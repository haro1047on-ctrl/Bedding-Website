/**
 * MORFE - Phase 4 Homepage & Mega-Menu Replication Browser Interaction Test Suite
 *
 * Runs on Headless Google Chrome via Chrome DevTools Protocol (CDP) using Node native WebSocket.
 * Strengthened browser interaction test battery enforcing:
 *  1. Storefront hydration and initial homepage composition.
 *  2. Header navigation with "Bedding" mega-menu hover trigger via CDP mouseMoved.
 *  3. Seamless pointer transit from trigger down into mega-menu panel (zero accidental closure).
 *  4. Pointer traversal across all 5 mega-menu columns without accidental closure.
 *  5. All 13 individual product category links rendered with verified styles/counts.
 *  6. All 6 signature fabric shortcuts rendered and linked.
 *  7. Curated editorial showcase card and complete catalogue destination rendered.
 *  8. Escape-key and outside-click dismissal of mega-menu.
 *  9. Mega-Menu Category Navigation via REAL CDP POINTER DISPATCH:
 *     - Verifies category title, product count, and rendered card count for:
 *       Quilt Covers (15), Pillowcase Pairs (10), Bed Sheets & Sets (18),
 *       Blankets & Bed Covers (19), Sleepwear (9), Wellness (8), Kids & Baby (16),
 *       and Complete Catalogue / All Bedding (167).
 *     - Verifies clean return navigation to home via CDP logo clicks.
 * 10. Horizontal Category Pill Strip:
 *     - All 14 pills rendered with authentic labels and counts.
 *     - Initial "All Bedding" active visual state.
 *     - CDP pointer clicks on category pills (Fitted Sheets, Cushions, Wellness) verifying active state and product counts.
 *     - Category strip scroll-left / scroll-right button states and scroll metrics.
 * 11. Editorial Homepage Vignettes:
 *     - Both vignettes rendered; all 4 local physical images loaded with natural dimensions.
 *     - Actionable CTA clicks via CDP pointer dispatch (Vignette 1 & Vignette 2 suite cards) verifying category filtering and product counts.
 * 12. Mobile Navigation Drawer (375px viewport):
 *     - Open drawer via CDP pointer dispatch; verify zero horizontal overflow.
 *     - Verify touch target compliance: all 15 interactive drawer buttons meet >= 44px vertical hit-target standard.
 *     - Accordion expand/collapse across Bedding Essentials, Layers & Comfort, and Living & Family.
 *     - Category navigation from inside drawer via CDP pointer dispatch (Sleepwear & Pillowcases) verifying automatic closure and product filtering.
 *     - Mobile drawer Escape-key dismissal.
 * 13. Responsive Testing Across 9 Exact Viewports (1440, 1280, 1024, 1023, 900, 768, 480, 375, 320 px):
 *     - Measures innerWidth, scrollWidth, horizontal overflow (scrollWidth - innerWidth <= 0).
 *     - Verifies deterministic desktop nav visibility (>= 1024px) vs mobile hamburger visibility (<= 1023px).
 * 14. React Rules of Hooks & Console Exception Verification (zero errors/warnings throughout).
 */

const { spawn, execSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(__dirname, '..', 'scratch_chromedir_phase4');
const PORT = 5197;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://127.0.0.1:${PORT}`);
  let pathname = parsedUrl.pathname;
  if (pathname === '/') pathname = '/index.html';

  let filePath = path.join(process.cwd(), 'dist', pathname);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'public', pathname);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    const indexHtml = path.join(process.cwd(), 'dist', 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(indexHtml).pipe(res);
  }
});

let totalTests = 0;
let passedTests = 0;
const testRecords = [];

function assert(condition, testName, expected = '', actual = '') {
  totalTests++;
  const passed = !!condition;
  if (passed) {
    console.log(`  [PASS] Test ${totalTests.toString().padStart(2, '0')}: ${testName}`);
    passedTests++;
    testRecords.push({ testNumber: totalTests, name: testName, status: 'PASS', expected, actual });
  } else {
    console.error(`  [FAIL] Test ${totalTests.toString().padStart(2, '0')}: ${testName}`);
    if (expected || actual) {
      console.error(`         Expected: ${expected}`);
      console.error(`         Actual:   ${actual}`);
    }
    process.exitCode = 1;
    testRecords.push({ testNumber: totalTests, name: testName, status: 'FAIL', expected, actual });
  }
}

async function run() {
  console.log('========================================================================');
  console.log(' MORFE PHASE 4 HOMEPAGE & MEGA-MENU INTERACTION TEST SUITE');
  console.log('========================================================================\n');

  if (!fs.existsSync(USER_DATA_DIR)) {
    fs.mkdirSync(USER_DATA_DIR, { recursive: true });
  }

  server.listen(PORT, async () => {
    console.log(`[INIT] Test server running on http://127.0.0.1:${PORT}`);

    const chromeProc = spawn(CHROME_PATH, [
      '--headless=new',
      '--remote-debugging-port=9292',
      '--no-sandbox',
      '--disable-gpu',
      `--user-data-dir=${USER_DATA_DIR}`
    ]);

    await new Promise(r => setTimeout(r, 2000));

    let targets = [];
    try {
      const res = await fetch('http://127.0.0.1:9292/json');
      targets = await res.json();
    } catch (err) {
      console.error('Failed to get CDP targets:', err.message);
      cleanup(chromeProc);
      process.exit(1);
    }

    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) {
      console.error('No page target found');
      cleanup(chromeProc);
      process.exit(1);
    }

    const ws = new globalThis.WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

    let msgId = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && callbacks.has(data.id)) {
        const resolve = callbacks.get(data.id);
        callbacks.delete(data.id);
        resolve(data.result);
      }
    };

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        callbacks.set(id, resolve);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    const browserConsoleErrors = [];
    await send('Runtime.enable');
    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        const type = data.params.type;
        const text = data.params.args.map(a => a.value || a.description || '').join(' ');
        if (type === 'error' || text.toLowerCase().includes('react hook') || text.toLowerCase().includes('warning:')) {
          browserConsoleErrors.push(`[${type}] ${text}`);
        }
      }
    });

    console.log(`[CDP] Navigating to http://127.0.0.1:${PORT}...`);
    await send('Page.navigate', { url: `http://127.0.0.1:${PORT}` });
    await new Promise(r => setTimeout(r, 2500));

    async function evaluate(expression) {
      const res = await send('Runtime.evaluate', {
        expression,
        returnByValue: true,
        awaitPromise: true
      });
      if (res?.exceptionDetails) {
        console.error('Evaluate Exception:', res.exceptionDetails.exception?.description || res.exceptionDetails.text);
      }
      return res?.result?.value;
    }

    // Helper: Real CDP pointer dispatch click
    async function cdpClick(x, y) {
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: Math.round(x), y: Math.round(y) });
      await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: Math.round(x), y: Math.round(y), button: 'left', clickCount: 1 });
      await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: Math.round(x), y: Math.round(y), button: 'left', clickCount: 1 });
    }

    // Helper: Get element center coordinates with instant scrollIntoView
    async function getElementCenter(selector) {
      return await evaluate(`
        (() => {
          const el = document.querySelector(${JSON.stringify(selector)});
          if (!el) return null;
          el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) return null;
          return { x: r.x + r.width / 2, y: r.y + r.height / 2, width: r.width, height: r.height };
        })()
      `);
    }

    // Helper: Get button center coordinates by text match inside a container with instant scrollIntoView
    async function getButtonCenterByText(containerSelector, textMatch) {
      return await evaluate(`
        (() => {
          const container = document.querySelector(${JSON.stringify(containerSelector)});
          if (!container) return null;
          const buttons = Array.from(container.querySelectorAll('button, a'));
          const target = buttons.find(b => b.textContent.toLowerCase().includes(${JSON.stringify(textMatch.toLowerCase())}));
          if (!target) return null;
          target.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });
          const r = target.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) return null;
          return { x: r.x + r.width / 2, y: r.y + r.height / 2, width: r.width, height: r.height };
        })()
      `);
    }

    // Helper: Inspect CatalogView state (title, product counter, rendered cards count in product grid)
    async function getCatalogState() {
      return await evaluate(`
        (() => {
          const h1 = document.querySelector('h1')?.textContent?.trim() || '';
          const countEl = document.querySelector('div strong');
          const count = countEl ? parseInt(countEl.textContent.trim(), 10) : null;
          const productGrid = Array.from(document.querySelectorAll('div.grid')).find(g => g.className.includes('lg:grid-cols-4'));
          const cards = productGrid ? productGrid.children : [];
          return {
            title: h1,
            count,
            cardCount: cards.length
          };
        })()
      `);
    }

    // Helper: Return to home view via CDP pointer click on the MORFE logo
    async function navigateHomeCdp() {
      await evaluate(`window.scrollTo({ top: 0, behavior: 'instant' })`);
      await new Promise(r => setTimeout(r, 100));
      const logo = await evaluate(`
        (() => {
          const btn = document.querySelector('header button[aria-label="MORFE Homepage"]');
          if (!btn) return null;
          const r = btn.getBoundingClientRect();
          return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
        })()
      `);
      if (logo) {
        await cdpClick(logo.x, logo.y);
        await new Promise(r => setTimeout(r, 400));
      }
      await evaluate(`window.scrollTo({ top: 0, behavior: 'instant' })`);
      await new Promise(r => setTimeout(r, 100));
    }

    try {
      // -------------------------------------------------------------
      // 1. Storefront Hydration
      // -------------------------------------------------------------
      console.log('--- 1. Storefront Hydration ---');
      const hydrationState = await evaluate(`
        (() => {
          const header = document.querySelector('header');
          const hero = document.querySelector('section');
          const categorySection = document.querySelector('#category-discovery-section');
          const vignettesSection = document.querySelector('#editorial-vignettes-section');
          const brandTitle = document.querySelector('header button span')?.textContent?.trim();
          return {
            hasHeader: !!header,
            hasHero: !!hero,
            hasCategorySection: !!categorySection,
            hasVignettesSection: !!vignettesSection,
            brandTitle
          };
        })()
      `);

      assert(hydrationState && hydrationState.hasHeader, 'Storefront header mounted in DOM');
      assert(hydrationState && hydrationState.hasCategorySection, 'Category discovery section mounted in DOM');
      assert(hydrationState && hydrationState.hasVignettesSection, 'Editorial vignettes section mounted in DOM');
      assert(hydrationState && hydrationState.brandTitle === 'MORFE', 'Brand wordmark "MORFE" rendered in header');

      // -------------------------------------------------------------
      // 2. Desktop Mega-Menu Hover & Pointer Transit
      // -------------------------------------------------------------
      console.log('\n--- 2. Desktop Mega-Menu Hover & Pointer Transit ---');
      
      const beddingButtonRect = await evaluate(`
        (() => {
          const buttons = Array.from(document.querySelectorAll('header nav button'));
          const beddingBtn = buttons.find(b => b.textContent.includes('Bedding'));
          if (!beddingBtn) return null;
          const rect = beddingBtn.getBoundingClientRect();
          return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2, top: rect.top, bottom: rect.bottom, width: rect.width };
        })()
      `);

      assert(beddingButtonRect !== null, 'Located "Bedding" navigation trigger in desktop nav');

      // Move pointer onto "Bedding" trigger
      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(beddingButtonRect.x),
        y: Math.round(beddingButtonRect.y)
      });
      await new Promise(r => setTimeout(r, 300));

      const megaMenuVisible = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          return !!panel && panel.getBoundingClientRect().height > 0;
        })()
      `);
      assert(megaMenuVisible, 'Hovering "Bedding" trigger opened desktop mega-menu panel');

      // Pointer transit from button down into mega-menu panel
      const transitSuccess = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          if (!panel) return null;
          const rect = panel.getBoundingClientRect();
          return { panelX: rect.x + 200, panelY: rect.y + 50 };
        })()
      `);

      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(transitSuccess.panelX),
        y: Math.round(transitSuccess.panelY)
      });
      await new Promise(r => setTimeout(r, 300));

      const megaMenuStillOpen = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          return !!panel && panel.getBoundingClientRect().height > 0;
        })()
      `);
      assert(megaMenuStillOpen, 'Pointer transit from trigger into mega-menu panel maintains open state (zero accidental closure)');

      // Pointer movement across columns without accidental closure
      console.log('\n--- 2B. Multi-Column Pointer Traversal ---');
      const columnPositions = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          if (!panel) return [];
          const cols = Array.from(panel.querySelectorAll('.grid > div'));
          return cols.map(c => {
            const r = c.getBoundingClientRect();
            return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
          });
        })()
      `);
      assert(columnPositions.length === 5, 'Mega-menu panel contains 5 distinct content columns');

      let allColumnsMaintainedOpen = true;
      for (let i = 0; i < columnPositions.length; i++) {
        await send('Input.dispatchMouseEvent', {
          type: 'mouseMoved',
          x: Math.round(columnPositions[i].x),
          y: Math.round(columnPositions[i].y)
        });
        await new Promise(r => setTimeout(r, 100));
        const isOpen = await evaluate(`!!document.querySelector('#desktop-mega-menu-panel')`);
        if (!isOpen) allColumnsMaintainedOpen = false;
      }
      assert(allColumnsMaintainedOpen, 'Pointer movement across all 5 mega-menu columns maintains open panel state');

      // -------------------------------------------------------------
      // 3. Mega-Menu All 13 Individual Category Links & Counts
      // -------------------------------------------------------------
      console.log('\n--- 3. Mega-Menu All 13 Individual Category Links ---');
      const categoryLinks = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          if (!panel) return null;
          const buttons = Array.from(panel.querySelectorAll('button')).map(b => b.textContent.trim());
          const text = panel.textContent;
          return {
            quiltCovers: text.includes('Quilt Covers') && text.includes('15 Styles'),
            fittedSheets: text.includes('Fitted Sheets') && text.includes('8 Styles'),
            flatSheets: text.includes('Flat Sheets') && text.includes('8 Styles'),
            pillowcases: text.includes('Pillowcase Pairs') && text.includes('10 Styles'),
            bedSheetsSets: text.includes('Bed Sheets & Sets') && text.includes('18 Styles'),
            blanketsBedCovers: text.includes('Blankets & Bed Covers') && text.includes('19 Styles'),
            cushions: text.includes('Cushions') && text.includes('31 Styles'),
            quiltsPillows: text.includes('Quilts & Pillows') && text.includes('12 Styles'),
            protectorsToppers: text.includes('Protectors & Toppers') && text.includes('7 Styles'),
            bathTowels: text.includes('Bath & Towels') && text.includes('6 Styles'),
            sleepwear: text.includes('Sleepwear') && text.includes('9 Styles'),
            wellness: text.includes('Wellness') && text.includes('8 Styles'),
            kidsBaby: text.includes('Kids & Baby') && text.includes('16 Styles'),
            viewCompleteCatalogue: buttons.some(b => b.includes('View Complete Catalogue'))
          };
        })()
      `);

      assert(categoryLinks && categoryLinks.quiltCovers, 'Mega-Menu Link 1: "Quilt Covers (15 Styles)" present');
      assert(categoryLinks && categoryLinks.fittedSheets, 'Mega-Menu Link 2: "Fitted Sheets (8 Styles)" present');
      assert(categoryLinks && categoryLinks.flatSheets, 'Mega-Menu Link 3: "Flat Sheets (8 Styles)" present');
      assert(categoryLinks && categoryLinks.pillowcases, 'Mega-Menu Link 4: "Pillowcase Pairs (10 Styles)" present');
      assert(categoryLinks && categoryLinks.bedSheetsSets, 'Mega-Menu Link 5: "Bed Sheets & Sets (18 Styles)" present');
      assert(categoryLinks && categoryLinks.blanketsBedCovers, 'Mega-Menu Link 6: "Blankets & Bed Covers (19 Styles)" present');
      assert(categoryLinks && categoryLinks.cushions, 'Mega-Menu Link 7: "Cushions (31 Styles)" present');
      assert(categoryLinks && categoryLinks.quiltsPillows, 'Mega-Menu Link 8: "Quilts & Pillows (12 Styles)" present');
      assert(categoryLinks && categoryLinks.protectorsToppers, 'Mega-Menu Link 9: "Protectors & Toppers (7 Styles)" present');
      assert(categoryLinks && categoryLinks.bathTowels, 'Mega-Menu Link 10: "Bath & Towels (6 Styles)" present');
      assert(categoryLinks && categoryLinks.sleepwear, 'Mega-Menu Link 11: "Sleepwear (9 Styles)" present');
      assert(categoryLinks && categoryLinks.wellness, 'Mega-Menu Link 12: "Wellness (8 Styles)" present');
      assert(categoryLinks && categoryLinks.kidsBaby, 'Mega-Menu Link 13: "Kids & Baby (16 Styles)" present');
      assert(categoryLinks && categoryLinks.viewCompleteCatalogue, 'Mega-Menu Top-Level Link: "View Complete Catalogue" present');

      // -------------------------------------------------------------
      // 4. Mega-Menu 6 Signature Fabrics & Editorial Showcase
      // -------------------------------------------------------------
      console.log('\n--- 4. Mega-Menu 6 Signature Fabrics & Editorial Card ---');
      const fabricsAndEditorial = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          if (!panel) return null;
          const text = panel.textContent;
          const img = panel.querySelector('img');
          return {
            eveLinen: text.includes('Eve Linen') && text.includes('100% French Flax Linen'),
            darcyCorduroy: text.includes('Darcy Corduroy') && text.includes('Plush Ribbed Cotton'),
            edenCotton: text.includes('Eden Cotton') && text.includes('Smooth Cotton Percale'),
            judeOrganic: text.includes('Jude Organic Cotton') && text.includes('Crisp Certified Organic'),
            frankieFlannelette: text.includes('Frankie Flannelette') && text.includes('Brushed Cozy Warmth'),
            leoWashed: text.includes('Leo Washed Cotton') && text.includes('Soft Lived-In Finish'),
            editorialCard: text.includes('Darcy Corduroy in Russet') && text.includes('Atelier Edit'),
            hasCardImage: !!img && img.complete && img.naturalWidth > 0,
            hasCardButton: text.includes('Explore Darcy Corduroy')
          };
        })()
      `);

      assert(fabricsAndEditorial && fabricsAndEditorial.eveLinen, 'Fabric Shortcut 1: "Eve Linen (100% French Flax Linen)" present');
      assert(fabricsAndEditorial && fabricsAndEditorial.darcyCorduroy, 'Fabric Shortcut 2: "Darcy Corduroy (Plush Ribbed Cotton)" present');
      assert(fabricsAndEditorial && fabricsAndEditorial.edenCotton, 'Fabric Shortcut 3: "Eden Cotton (Smooth Cotton Percale)" present');
      assert(fabricsAndEditorial && fabricsAndEditorial.judeOrganic, 'Fabric Shortcut 4: "Jude Organic Cotton (Crisp Certified Organic)" present');
      assert(fabricsAndEditorial && fabricsAndEditorial.frankieFlannelette, 'Fabric Shortcut 5: "Frankie Flannelette (Brushed Cozy Warmth)" present');
      assert(fabricsAndEditorial && fabricsAndEditorial.leoWashed, 'Fabric Shortcut 6: "Leo Washed Cotton (Soft Lived-In Finish)" present');
      assert(fabricsAndEditorial && fabricsAndEditorial.editorialCard, 'Editorial Showcase: "Darcy Corduroy in Russet" card present');
      assert(fabricsAndEditorial && fabricsAndEditorial.hasCardImage, 'Editorial Showcase: Image loaded successfully with natural dimensions');
      assert(fabricsAndEditorial && fabricsAndEditorial.hasCardButton, 'Editorial Showcase: "Explore Darcy Corduroy" CTA button present');

      // -------------------------------------------------------------
      // 5. Escape-Key & Outside-Click Dismissal
      // -------------------------------------------------------------
      console.log('\n--- 5. Escape-Key & Outside-Click Dismissal ---');
      
      // Dispatch Escape key
      await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await new Promise(r => setTimeout(r, 200));

      const dismissedByEscape = await evaluate(`!document.querySelector('#desktop-mega-menu-panel')`);
      assert(dismissedByEscape, 'Pressing Escape dismissed mega-menu panel');

      // Move away then re-hover to open
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 0, y: 0 });
      await new Promise(r => setTimeout(r, 100));
      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(beddingButtonRect.x),
        y: Math.round(beddingButtonRect.y)
      });
      await new Promise(r => setTimeout(r, 300));

      // Click outside at bottom of viewport via CDP mouse dispatch
      await cdpClick(600, 700);
      await new Promise(r => setTimeout(r, 250));

      const dismissedByOutsideClick = await evaluate(`!document.querySelector('#desktop-mega-menu-panel')`);
      assert(dismissedByOutsideClick, 'Clicking outside dismissed mega-menu panel');

      // Helper to reopen mega-menu via CDP
      async function openMegaMenuCdp() {
        await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 0, y: 0 });
        await new Promise(r => setTimeout(r, 100));
        await send('Input.dispatchMouseEvent', {
          type: 'mouseMoved',
          x: Math.round(beddingButtonRect.x),
          y: Math.round(beddingButtonRect.y)
        });
        await new Promise(r => setTimeout(r, 300));
      }

      // -------------------------------------------------------------
      // 6. Mega-Menu Navigation Destinations (Strengthened CDP Pointer Dispatch)
      // -------------------------------------------------------------
      console.log('\n--- 6. Mega-Menu Navigation Destinations via CDP Pointer Dispatch ---');
      
      // Category 1: Quilt Covers (15 styles)
      await openMegaMenuCdp();
      const quiltCoversCenter = await getButtonCenterByText('#desktop-mega-menu-panel', 'Quilt Covers');
      assert(quiltCoversCenter !== null, 'Mega-Menu: Located "Quilt Covers" link coordinates');
      await cdpClick(quiltCoversCenter.x, quiltCoversCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogQuiltCovers = await getCatalogState();
      assert(
        catalogQuiltCovers.title === 'Quilt Covers' && catalogQuiltCovers.count === 15 && catalogQuiltCovers.cardCount === 15,
        'Mega-Menu CDP Click: Navigated to "Quilt Covers" displaying exactly 15 products',
        'Quilt Covers / 15 products (15 cards)',
        `${catalogQuiltCovers.title} / ${catalogQuiltCovers.count} products (${catalogQuiltCovers.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Category 2: Pillowcase Pairs (10 styles)
      await openMegaMenuCdp();
      const pillowcasesCenter = await getButtonCenterByText('#desktop-mega-menu-panel', 'Pillowcase Pairs');
      assert(pillowcasesCenter !== null, 'Mega-Menu: Located "Pillowcase Pairs" link coordinates');
      await cdpClick(pillowcasesCenter.x, pillowcasesCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogPillowcases = await getCatalogState();
      assert(
        catalogPillowcases.title === 'Pillowcases' && catalogPillowcases.count === 10 && catalogPillowcases.cardCount === 10,
        'Mega-Menu CDP Click: Navigated to "Pillowcases" displaying exactly 10 products',
        'Pillowcases / 10 products (10 cards)',
        `${catalogPillowcases.title} / ${catalogPillowcases.count} products (${catalogPillowcases.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Category 3: Bed Sheets & Sets (18 styles)
      await openMegaMenuCdp();
      const bedSetsCenter = await getButtonCenterByText('#desktop-mega-menu-panel', 'Bed Sheets & Sets');
      assert(bedSetsCenter !== null, 'Mega-Menu: Located "Bed Sheets & Sets" link coordinates');
      await cdpClick(bedSetsCenter.x, bedSetsCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogBedSets = await getCatalogState();
      assert(
        catalogBedSets.title === 'Bed Sheets & Sets' && catalogBedSets.count === 18 && catalogBedSets.cardCount === 18,
        'Mega-Menu CDP Click: Navigated to "Bed Sheets & Sets" displaying exactly 18 products',
        'Bed Sheets & Sets / 18 products (18 cards)',
        `${catalogBedSets.title} / ${catalogBedSets.count} products (${catalogBedSets.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Category 4: Blankets & Bed Covers (19 styles)
      await openMegaMenuCdp();
      const blanketsCenter = await getButtonCenterByText('#desktop-mega-menu-panel', 'Blankets & Bed Covers');
      assert(blanketsCenter !== null, 'Mega-Menu: Located "Blankets & Bed Covers" link coordinates');
      await cdpClick(blanketsCenter.x, blanketsCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogBlankets = await getCatalogState();
      assert(
        catalogBlankets.title === 'Blankets & Bed Covers' && catalogBlankets.count === 19 && catalogBlankets.cardCount === 19,
        'Mega-Menu CDP Click: Navigated to "Blankets & Bed Covers" displaying exactly 19 products',
        'Blankets & Bed Covers / 19 products (19 cards)',
        `${catalogBlankets.title} / ${catalogBlankets.count} products (${catalogBlankets.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Category 5: Sleepwear (9 styles - specifically requested)
      await openMegaMenuCdp();
      const sleepwearCenter = await getButtonCenterByText('#desktop-mega-menu-panel', 'Sleepwear');
      assert(sleepwearCenter !== null, 'Mega-Menu: Located "Sleepwear" link coordinates');
      await cdpClick(sleepwearCenter.x, sleepwearCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogSleepwear = await getCatalogState();
      assert(
        catalogSleepwear.title === 'Sleepwear' && catalogSleepwear.count === 9 && catalogSleepwear.cardCount === 9,
        'Mega-Menu CDP Click: Navigated to "Sleepwear" displaying exactly 9 products',
        'Sleepwear / 9 products (9 cards)',
        `${catalogSleepwear.title} / ${catalogSleepwear.count} products (${catalogSleepwear.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Category 6: Wellness (8 styles - specifically requested)
      await openMegaMenuCdp();
      const wellnessCenter = await getButtonCenterByText('#desktop-mega-menu-panel', 'Wellness');
      assert(wellnessCenter !== null, 'Mega-Menu: Located "Wellness" link coordinates');
      await cdpClick(wellnessCenter.x, wellnessCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogWellness = await getCatalogState();
      assert(
        catalogWellness.title === 'Wellness' && catalogWellness.count === 8 && catalogWellness.cardCount === 8,
        'Mega-Menu CDP Click: Navigated to "Wellness" displaying exactly 8 products',
        'Wellness / 8 products (8 cards)',
        `${catalogWellness.title} / ${catalogWellness.count} products (${catalogWellness.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Category 7: Kids & Baby (16 styles)
      await openMegaMenuCdp();
      const kidsBabyCenter = await getButtonCenterByText('#desktop-mega-menu-panel', 'Kids & Baby');
      assert(kidsBabyCenter !== null, 'Mega-Menu: Located "Kids & Baby" link coordinates');
      await cdpClick(kidsBabyCenter.x, kidsBabyCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogKidsBaby = await getCatalogState();
      assert(
        catalogKidsBaby.title === 'Kids & Baby' && catalogKidsBaby.count === 16 && catalogKidsBaby.cardCount === 16,
        'Mega-Menu CDP Click: Navigated to "Kids & Baby" displaying exactly 16 products',
        'Kids & Baby / 16 products (16 cards)',
        `${catalogKidsBaby.title} / ${catalogKidsBaby.count} products (${catalogKidsBaby.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Top-Level Action: View Complete Catalogue (167 products)
      await openMegaMenuCdp();
      const viewAllCenter = await getButtonCenterByText('#desktop-mega-menu-panel', 'View Complete Catalogue');
      assert(viewAllCenter !== null, 'Mega-Menu: Located "View Complete Catalogue" CTA coordinates');
      await cdpClick(viewAllCenter.x, viewAllCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogComplete = await getCatalogState();
      assert(
        catalogComplete.title === 'Bedding' && catalogComplete.count === 167 && catalogComplete.cardCount === 167,
        'Mega-Menu CDP Click: Navigated to Complete Catalogue displaying full 167 products',
        'Bedding / 167 products (167 cards)',
        `${catalogComplete.title} / ${catalogComplete.count} products (${catalogComplete.cardCount} cards)`
      );
      await navigateHomeCdp();

      // -------------------------------------------------------------
      // 7. Horizontal Category Pill Strip: All 14 Pills & Controls
      // -------------------------------------------------------------
      console.log('\n--- 7. Horizontal Category Pill Strip ---');
      const expectedPills = [
        { label: 'All Bedding', count: 167 },
        { label: 'Quilt Covers', count: 15 },
        { label: 'Fitted Sheets', count: 8 },
        { label: 'Flat Sheets', count: 8 },
        { label: 'Pillowcases', count: 10 },
        { label: 'Bed Sheets & Sets', count: 18 },
        { label: 'Blankets & Bed Covers', count: 19 },
        { label: 'Quilts & Pillows', count: 12 },
        { label: 'Protectors & Toppers', count: 7 },
        { label: 'Cushions', count: 31 },
        { label: 'Bath & Towels', count: 6 },
        { label: 'Sleepwear', count: 9 },
        { label: 'Wellness', count: 8 },
        { label: 'Kids & Baby', count: 16 }
      ];

      const renderedPills = await evaluate(`
        (() => {
          const nav = document.querySelector('[aria-label="Category pill navigation"]');
          if (!nav) return [];
          const buttons = Array.from(nav.querySelectorAll('button'));
          return buttons.map(b => {
            const spans = Array.from(b.querySelectorAll('span'));
            const text = spans[0]?.textContent?.trim() || '';
            const count = parseInt(spans[1]?.textContent?.trim() || '0', 10);
            const isActive = b.className.includes('bg-umber') && b.className.includes('text-porcelain');
            return { text, count, isActive };
          });
        })()
      `);

      assert(renderedPills.length === 14, `Category strip contains exactly 14 pills (found: ${renderedPills.length})`);

      let allPillsMatch = true;
      for (let i = 0; i < expectedPills.length; i++) {
        const expected = expectedPills[i];
        const actual = renderedPills.find(p => p.text.toLowerCase() === expected.label.toLowerCase());
        if (!actual || actual.count !== expected.count) {
          allPillsMatch = false;
          console.error(`  [MISMATCH] Pill "${expected.label}": expected count ${expected.count}, actual: ${actual?.count}`);
        }
      }
      assert(allPillsMatch, 'All 14 category pills match expected labels and product counts');

      const allBeddingActive = renderedPills[0]?.isActive;
      assert(allBeddingActive, '"All Bedding" pill displays active visual styling by default');

      // Scroll to category strip section before testing clicks
      await evaluate(`
        (() => {
          const sec = document.querySelector('#category-discovery-section');
          if (sec) sec.scrollIntoView({ block: 'start', behavior: 'instant' });
        })()
      `);
      await new Promise(r => setTimeout(r, 200));

      // Category Pill Click via CDP: Fitted Sheets
      console.log('\n--- 7B. Category Pill Clicks & Filtering via CDP ---');
      const fittedPillCenter = await getButtonCenterByText('[aria-label="Category pill navigation"]', 'Fitted Sheets');
      assert(fittedPillCenter !== null, 'Category Strip: Located "Fitted Sheets" pill coordinates');
      await cdpClick(fittedPillCenter.x, fittedPillCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogFitted = await getCatalogState();
      assert(
        catalogFitted.title === 'Fitted Sheets' && catalogFitted.count === 8 && catalogFitted.cardCount === 8,
        'Category Pill CDP Click: Filtered to "Fitted Sheets" displaying exactly 8 products',
        'Fitted Sheets / 8 products (8 cards)',
        `${catalogFitted.title} / ${catalogFitted.count} products (${catalogFitted.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Category Pill Click via CDP: Cushions (31 products)
      await evaluate(`
        (() => {
          const sec = document.querySelector('#category-discovery-section');
          if (sec) sec.scrollIntoView({ block: 'start', behavior: 'instant' });
        })()
      `);
      await new Promise(r => setTimeout(r, 200));

      const cushionsPillCenter = await getButtonCenterByText('[aria-label="Category pill navigation"]', 'Cushions');
      assert(cushionsPillCenter !== null, 'Category Strip: Located "Cushions" pill coordinates');
      await cdpClick(cushionsPillCenter.x, cushionsPillCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogCushions = await getCatalogState();
      assert(
        catalogCushions.title === 'Cushions' && catalogCushions.count === 31 && catalogCushions.cardCount === 31,
        'Category Pill CDP Click: Filtered to "Cushions" displaying exactly 31 products',
        'Cushions / 31 products (31 cards)',
        `${catalogCushions.title} / ${catalogCushions.count} products (${catalogCushions.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Category Pill Click via CDP: Wellness (8 products)
      await evaluate(`
        (() => {
          const sec = document.querySelector('#category-discovery-section');
          if (sec) sec.scrollIntoView({ block: 'start', behavior: 'instant' });
        })()
      `);
      await new Promise(r => setTimeout(r, 200));

      const wellnessPillCenter = await getButtonCenterByText('[aria-label="Category pill navigation"]', 'Wellness');
      assert(wellnessPillCenter !== null, 'Category Strip: Located "Wellness" pill coordinates');
      await cdpClick(wellnessPillCenter.x, wellnessPillCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogWellnessPill = await getCatalogState();
      assert(
        catalogWellnessPill.title === 'Wellness' && catalogWellnessPill.count === 8 && catalogWellnessPill.cardCount === 8,
        'Category Pill CDP Click: Filtered to "Wellness" displaying exactly 8 products',
        'Wellness / 8 products (8 cards)',
        `${catalogWellnessPill.title} / ${catalogWellnessPill.count} products (${catalogWellnessPill.cardCount} cards)`
      );
      await navigateHomeCdp();

      // Scroll Button Controls Verification via CDP
      console.log('\n--- 7C. Category Strip Scroll Controls via CDP ---');
      await evaluate(`
        (() => {
          const sec = document.querySelector('#category-discovery-section');
          if (sec) sec.scrollIntoView({ block: 'start', behavior: 'instant' });
          const nav = document.querySelector('[aria-label="Category pill navigation"]');
          if (nav) nav.scrollLeft = 0;
        })()
      `);
      await new Promise(r => setTimeout(r, 200));

      const initialScrollState = await evaluate(`
        (() => {
          const nav = document.querySelector('[aria-label="Category pill navigation"]');
          const leftBtn = document.querySelector('button[aria-label="Scroll categories left"]');
          const rightBtn = document.querySelector('button[aria-label="Scroll categories right"]');
          return {
            scrollLeft: nav?.scrollLeft || 0,
            leftDisabled: leftBtn?.disabled,
            rightDisabled: rightBtn?.disabled
          };
        })()
      `);
      assert(initialScrollState.leftDisabled === true, 'Scroll-left button initially disabled at start of pill strip');
      assert(initialScrollState.rightDisabled === false, 'Scroll-right button initially enabled');

      // Click scroll right button via CDP
      const scrollRightCenter = await getElementCenter('button[aria-label="Scroll categories right"]');
      assert(scrollRightCenter !== null, 'Category Strip: Located scroll-right button coordinates');
      await cdpClick(scrollRightCenter.x, scrollRightCenter.y);
      await new Promise(r => setTimeout(r, 600));

      const scrolledRightState = await evaluate(`
        (() => {
          const nav = document.querySelector('[aria-label="Category pill navigation"]');
          const leftBtn = document.querySelector('button[aria-label="Scroll categories left"]');
          return {
            scrollLeft: nav?.scrollLeft || 0,
            leftDisabled: leftBtn?.disabled
          };
        })()
      `);
      assert(scrolledRightState.scrollLeft > 0, `Pill strip scrolled right via CDP (scrollLeft: ${scrolledRightState.scrollLeft}px)`);
      assert(scrolledRightState.leftDisabled === false, 'Scroll-left button became active after right scroll');

      // -------------------------------------------------------------
      // 8. Editorial Homepage Vignettes & Images
      // -------------------------------------------------------------
      console.log('\n--- 8. Editorial Homepage Vignettes & Images ---');
      await evaluate(`
        (() => {
          const sec = document.querySelector('#editorial-vignettes-section');
          if (sec) sec.scrollIntoView({ block: 'start', behavior: 'instant' });
        })()
      `);
      await new Promise(r => setTimeout(r, 600));

      const vignettesData = await evaluate(`
        (() => {
          const sec = document.querySelector('#editorial-vignettes-section');
          if (!sec) return null;
          const text = sec.textContent;
          const images = Array.from(sec.querySelectorAll('img')).map(img => ({
            src: img.getAttribute('src'),
            complete: img.complete,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight
          }));
          return {
            hasTextureEdit: text.includes('The Texture Edit'),
            hasArtOfUnmadeBed: text.includes('The Art of the Unmade Bed'),
            hasThreeElements: text.includes('Three Elements of a Restful Night'),
            hasBaseCard: text.includes('55cm Deep Fitted Sheet'),
            hasCenterpieceCard: text.includes('Tailored Quilt Covers'),
            hasLayerCard: text.includes('Stonewashed Bed Covers'),
            imageCount: images.length,
            allImagesLoaded: images.every(i => i.complete && i.naturalWidth > 0),
            images
          };
        })()
      `);

      assert(vignettesData && vignettesData.hasTextureEdit, 'Vignette 1 renders "The Texture Edit" eyebrow');
      assert(vignettesData && vignettesData.hasArtOfUnmadeBed, 'Vignette 1 renders "The Art of the Unmade Bed" title');
      assert(vignettesData && vignettesData.hasThreeElements, 'Vignette 2 renders "Three Elements of a Restful Night"');
      assert(vignettesData && vignettesData.hasBaseCard, 'Vignette 2 Card 1: 55cm Deep Fitted Sheet present');
      assert(vignettesData && vignettesData.hasCenterpieceCard, 'Vignette 2 Card 2: Tailored Quilt Covers present');
      assert(vignettesData && vignettesData.hasLayerCard, 'Vignette 2 Card 3: Stonewashed Bed Covers present');
      assert(vignettesData && vignettesData.imageCount === 4, 'Editorial vignettes contain 4 local physical image assets');
      assert(vignettesData && vignettesData.allImagesLoaded, 'All 4 editorial vignette images loaded successfully with natural dimensions');

      // Test Vignette CTAs via CDP
      console.log('\n--- 8B. Vignette Actionable CTA Navigation via CDP ---');
      
      // Vignette 1 CTA: "Shop Quilt Covers"
      const cta1Center = await getButtonCenterByText('#editorial-vignettes-section', 'Shop Quilt Covers');
      assert(cta1Center !== null, 'Vignette 1: Located "Shop Quilt Covers" CTA coordinates');
      await cdpClick(cta1Center.x, cta1Center.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogVignette1 = await getCatalogState();
      assert(
        catalogVignette1.title === 'Quilt Covers' && catalogVignette1.count === 15 && catalogVignette1.cardCount === 15,
        'Vignette 1 CTA CDP Click: Navigated to Quilt Covers displaying exactly 15 products'
      );
      await navigateHomeCdp();

      // Vignette 2 Card 1 CTA: "Shop Fitted Sheets"
      const cta2Center = await getButtonCenterByText('#editorial-vignettes-section', 'Shop Fitted Sheets');
      assert(cta2Center !== null, 'Vignette 2 Card 1: Located "Shop Fitted Sheets" CTA coordinates');
      await cdpClick(cta2Center.x, cta2Center.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogVignette2 = await getCatalogState();
      assert(
        catalogVignette2.title === 'Fitted Sheets' && catalogVignette2.count === 8 && catalogVignette2.cardCount === 8,
        'Vignette 2 Card 1 CTA CDP Click: Navigated to Fitted Sheets displaying exactly 8 products'
      );
      await navigateHomeCdp();

      // Vignette 2 Card 3 CTA: "Shop Bed Covers"
      const cta3Center = await getButtonCenterByText('#editorial-vignettes-section', 'Shop Bed Covers');
      assert(cta3Center !== null, 'Vignette 2 Card 3: Located "Shop Bed Covers" CTA coordinates');
      await cdpClick(cta3Center.x, cta3Center.y);
      await new Promise(r => setTimeout(r, 500));

      const catalogVignette3 = await getCatalogState();
      assert(
        catalogVignette3.title === 'Blankets & Bed Covers' && catalogVignette3.count === 19 && catalogVignette3.cardCount === 19,
        'Vignette 2 Card 3 CTA CDP Click: Navigated to Blankets & Bed Covers displaying exactly 19 products'
      );
      await navigateHomeCdp();

      // -------------------------------------------------------------
      // 9. Mobile Navigation Drawer & Touch Targets (375px)
      // -------------------------------------------------------------
      console.log('\n--- 9. Mobile Navigation Drawer & Touch Targets ---');
      await send('Emulation.setDeviceMetricsOverride', {
        width: 375,
        height: 812,
        deviceScaleFactor: 2,
        mobile: true
      });
      await new Promise(r => setTimeout(r, 500));

      // Open drawer via CDP click on hamburger
      const hamburgerCenter = await getElementCenter('header button[aria-label="Open navigation menu"]');
      assert(hamburgerCenter !== null, 'Mobile (375px): Located hamburger button coordinates');
      await cdpClick(hamburgerCenter.x, hamburgerCenter.y);
      await new Promise(r => setTimeout(r, 400));

      // Drawer dimensions and overflow
      const drawerMetrics = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          if (!drawer) return null;
          const rect = drawer.getBoundingClientRect();
          return {
            width: rect.width,
            clientWidth: drawer.clientWidth,
            scrollWidth: drawer.scrollWidth,
            hasZeroOverflow: drawer.scrollWidth <= drawer.clientWidth
          };
        })()
      `);
      assert(drawerMetrics && drawerMetrics.hasZeroOverflow, `Mobile Drawer: zero horizontal overflow (scrollWidth=${drawerMetrics?.scrollWidth}, clientWidth=${drawerMetrics?.clientWidth})`);

      // Touch target heights compliance (>= 44px)
      const touchTargets = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          if (!drawer) return [];
          const buttons = Array.from(drawer.querySelectorAll('button'));
          return buttons.map(b => {
            const r = b.getBoundingClientRect();
            return {
              text: b.textContent.trim().substring(0, 24),
              height: Math.round(r.height),
              width: Math.round(r.width),
              meets44px: r.height >= 44
            };
          });
        })()
      `);
      const allTouchCompliant = touchTargets.length > 0 && touchTargets.every(t => t.meets44px);
      assert(allTouchCompliant, `Mobile Drawer: All ${touchTargets.length} interactive buttons meet >= 44px touch target height standard`);

      // Mobile Accordion Tests via CDP
      console.log('\n--- 9B. Mobile Drawer Accordions via CDP ---');
      
      // Bedding Essentials accordion (toggle closed via CDP)
      const beddingEssentialsCenter = await getButtonCenterByText('.fixed.inset-y-0.left-0', 'Bedding Essentials');
      assert(beddingEssentialsCenter !== null, 'Mobile Drawer: Located Bedding Essentials accordion header');
      await cdpClick(beddingEssentialsCenter.x, beddingEssentialsCenter.y);
      await new Promise(r => setTimeout(r, 250));

      // Layers & Comfort accordion (toggle open via CDP)
      const layersCenter = await getButtonCenterByText('.fixed.inset-y-0.left-0', 'Layers & Comfort');
      assert(layersCenter !== null, 'Mobile Drawer: Located Layers & Comfort accordion header');
      await cdpClick(layersCenter.x, layersCenter.y);
      await new Promise(r => setTimeout(r, 250));

      const layersItemsVisible = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          return drawer?.textContent.includes('Blankets & Bed Covers') && drawer?.textContent.includes('Cushions');
        })()
      `);
      assert(layersItemsVisible, 'Layers & Comfort child categories visible when accordion is expanded');

      // Living & Family accordion (toggle open via CDP)
      const livingCenter = await getButtonCenterByText('.fixed.inset-y-0.left-0', 'Living & Family');
      assert(livingCenter !== null, 'Mobile Drawer: Located Living & Family accordion header');
      await cdpClick(livingCenter.x, livingCenter.y);
      await new Promise(r => setTimeout(r, 250));

      const livingItemsVisible = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          return drawer?.textContent.includes('Sleepwear') && drawer?.textContent.includes('Wellness');
        })()
      `);
      assert(livingItemsVisible, 'Living & Family child categories (Sleepwear & Wellness) visible when accordion expanded');

      // Category Navigation from Inside Mobile Accordion via CDP (Sleepwear)
      console.log('\n--- 9C. Category Navigation from Inside Mobile Drawer via CDP ---');
      const sleepwearDrawerCenter = await getButtonCenterByText('.fixed.inset-y-0.left-0', 'Sleepwear');
      assert(sleepwearDrawerCenter !== null, 'Mobile Drawer: Located "Sleepwear" button coordinates');
      await cdpClick(sleepwearDrawerCenter.x, sleepwearDrawerCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const drawerSleepwearState = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          const h1 = document.querySelector('h1')?.textContent?.trim() || '';
          const countEl = document.querySelector('div strong');
          const count = countEl ? parseInt(countEl.textContent.trim(), 10) : null;
          return { isDrawerClosed: !drawer, title: h1, count };
        })()
      `);
      assert(
        drawerSleepwearState.isDrawerClosed && drawerSleepwearState.title === 'Sleepwear' && drawerSleepwearState.count === 9,
        'Mobile Drawer CDP Click: Drawer auto-closed and navigated to "Sleepwear" (9 products)'
      );
      await navigateHomeCdp();

      // Reopen drawer, expand Bedding Essentials, and click Pillowcase Pairs
      const hamburgerAgain = await getElementCenter('header button[aria-label="Open navigation menu"]');
      await cdpClick(hamburgerAgain.x, hamburgerAgain.y);
      await new Promise(r => setTimeout(r, 300));

      const beddingEssentialsAgain = await getButtonCenterByText('.fixed.inset-y-0.left-0', 'Bedding Essentials');
      assert(beddingEssentialsAgain !== null, 'Mobile Drawer: Located Bedding Essentials accordion header again');
      await cdpClick(beddingEssentialsAgain.x, beddingEssentialsAgain.y);
      await new Promise(r => setTimeout(r, 300));

      const pillowcasesDrawerCenter = await getButtonCenterByText('.fixed.inset-y-0.left-0', 'Pillowcase');
      assert(pillowcasesDrawerCenter !== null, 'Mobile Drawer: Located "Pillowcase Pairs" button coordinates');
      await cdpClick(pillowcasesDrawerCenter.x, pillowcasesDrawerCenter.y);
      await new Promise(r => setTimeout(r, 500));

      const drawerPillowcasesState = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          const h1 = document.querySelector('h1')?.textContent?.trim() || '';
          const countEl = document.querySelector('div strong');
          const count = countEl ? parseInt(countEl.textContent.trim(), 10) : null;
          return { isDrawerClosed: !drawer, title: h1, count };
        })()
      `);
      assert(
        drawerPillowcasesState.isDrawerClosed && drawerPillowcasesState.title === 'Pillowcases' && drawerPillowcasesState.count === 10,
        'Mobile Drawer CDP Click: Drawer auto-closed and navigated to "Pillowcases" (10 products)'
      );
      await navigateHomeCdp();

      // Mobile Drawer Escape-Key Dismissal
      const hamburgerFinal = await getElementCenter('header button[aria-label="Open navigation menu"]');
      await cdpClick(hamburgerFinal.x, hamburgerFinal.y);
      await new Promise(r => setTimeout(r, 300));

      await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await new Promise(r => setTimeout(r, 300));

      const drawerDismissedByEscape = await evaluate(`!document.querySelector('.fixed.inset-y-0.left-0')`);
      assert(drawerDismissedByEscape, 'Pressing Escape dismissed mobile navigation drawer');

      // -------------------------------------------------------------
      // 10. Responsive Viewports Across 9 Exact Breakpoints
      // -------------------------------------------------------------
      console.log('\n--- 10. Responsive Testing Across 9 Exact Viewports ---');
      const testViewports = [
        { width: 1440, height: 900, name: '1440px (Wide Desktop)' },
        { width: 1280, height: 800, name: '1280px (Standard Desktop)' },
        { width: 1024, height: 768, name: '1024px (Small Desktop / Tablet Boundary)' },
        { width: 1023, height: 768, name: '1023px (Tablet Landscape Breakpoint)' },
        { width: 900,  height: 600, name: '900px (Medium Tablet)' },
        { width: 768,  height: 1024, name: '768px (Portrait Tablet)' },
        { width: 480,  height: 800, name: '480px (Large Mobile)' },
        { width: 375,  height: 667, name: '375px (Standard iPhone)' },
        { width: 320,  height: 568, name: '320px (Compact Mobile)' }
      ];

      for (const vp of testViewports) {
        await send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: vp.width < 1024
        });
        await new Promise(r => setTimeout(r, 350));

        const vpMetrics = await evaluate(`
          (() => {
            const innerWidth = window.innerWidth;
            const scrollWidth = document.documentElement.scrollWidth;
            const overflow = Math.max(0, scrollWidth - innerWidth);
            const desktopNav = Array.from(document.querySelectorAll('header nav div')).find(d => d.className.includes('lg:flex') && d.textContent.includes('Bedding'));
            const hamburger = document.querySelector('header button[aria-label="Open navigation menu"]');
            
            const desktopNavVisible = desktopNav ? window.getComputedStyle(desktopNav).display !== 'none' : false;
            const hamburgerVisible = hamburger ? window.getComputedStyle(hamburger).display !== 'none' : false;
            
            return {
              innerWidth,
              scrollWidth,
              overflow,
              desktopNavVisible,
              hamburgerVisible
            };
          })()
        `);

        const isDesktop = vp.width >= 1024;
        const expectedNav = isDesktop;
        const expectedHamburger = !isDesktop;

        assert(
          vpMetrics.overflow === 0,
          `Viewport ${vp.name}: Zero horizontal overflow (scrollWidth=${vpMetrics.scrollWidth}, innerWidth=${vpMetrics.innerWidth}, overflow=${vpMetrics.overflow}px)`
        );

        assert(
          vpMetrics.desktopNavVisible === expectedNav && vpMetrics.hamburgerVisible === expectedHamburger,
          `Viewport ${vp.name}: Correct navigation visibility (Desktop Nav: ${vpMetrics.desktopNavVisible}, Mobile Hamburger: ${vpMetrics.hamburgerVisible})`
        );
      }

      // -------------------------------------------------------------
      // 11. React Rules of Hooks & Console Exception Verification
      // -------------------------------------------------------------
      console.log('\n--- 11. React Rules of Hooks & Console Exception Verification ---');
      assert(browserConsoleErrors.length === 0, `Confirmed ZERO React Hooks violations or console errors (logged: ${browserConsoleErrors.join(' | ') || 'none'})`);

    } catch (err) {
      console.error('[UNCAUGHT EXCEPTION IN TEST RUNNER]:', err);
      process.exitCode = 1;
    } finally {
      console.log('\n========================================================================');
      console.log(` PHASE 4 INTERACTION TEST SUMMARY: ${passedTests}/${totalTests} TESTS PASSED (${Math.round((passedTests / totalTests) * 100)}%)`);
      console.log('========================================================================\n');

      let currentCommit = 'unknown';
      let currentBranch = 'unknown';
      try {
        currentCommit = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
        currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      } catch (e) {}

      fs.writeFileSync(
        'src/data/phase4_interaction_test_results.json',
        JSON.stringify({
          timestamp: new Date().toISOString(),
          branch: currentBranch,
          commit: currentCommit,
          testScript: 'scripts/test_phase4_interactions.cjs',
          passedTests,
          totalTests,
          exitCode: (passedTests === totalTests && totalTests > 0) ? 0 : 1,
          tests: testRecords
        }, null, 2),
        'utf8'
      );

      cleanup(chromeProc);
      server.close();
      process.exit(process.exitCode || 0);
    }
  });
}

function cleanup(proc) {
  try {
    proc.kill();
  } catch (e) {}
  try {
    fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
  } catch (e) {}
}

run();
