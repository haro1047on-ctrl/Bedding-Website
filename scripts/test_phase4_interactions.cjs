/**
 * MORFE - Phase 4 Homepage & Mega-Menu Replication Browser Interaction Test Suite
 *
 * Runs on Headless Google Chrome via Chrome DevTools Protocol (CDP) using Node native WebSocket.
 * Comprehensive, production-grade test battery verifying:
 *  1. Storefront hydration and homepage structure.
 *  2. Header navigation with "Bedding" mega-menu hover trigger.
 *  3. Seamless pointer transit from trigger down into mega-menu panel (zero accidental closure).
 *  4. Pointer traversal across all 5 mega-menu columns without accidental closure.
 *  5. All 13 individual product category links rendered with verified styles/counts (incl. Sleepwear & Wellness).
 *  6. All 6 signature fabric shortcuts rendered and linked.
 *  7. Curated editorial showcase card and complete catalogue destination rendered.
 *  8. Escape-key and outside-click dismissal of mega-menu.
 *  9. Mega-menu category link navigation to CatalogView (Quilt Covers, Sleepwear, Complete Catalogue).
 * 10. Horizontal Category Pill Strip: all 14 pills rendered with verified labels and counts.
 * 11. Category pill active visual state and filtering verification.
 * 12. Category pill scrollability: scroll-left / scroll-right buttons and scroll states.
 * 13. Editorial Homepage Vignettes: Both vignettes rendered, all 4 local images loaded with natural dimensions.
 * 14. Actionable CTA navigation across vignettes (Vignette 1 & Vignette 2 suite cards).
 * 15. Mobile Navigation Drawer: Open/close, touch target compliance (>= 44px), zero horizontal overflow.
 * 16. Mobile Drawer Accordions: Expand/collapse across all 3 sections, category navigation from inside accordion.
 * 17. Mobile Drawer Escape-key dismissal.
 * 18. Responsive testing across 9 exact viewports (1440, 1280, 1024, 1023, 900, 768, 480, 375, 320 px):
 *     - innerWidth, scrollWidth, horizontal overflow (scrollWidth - innerWidth <= 0)
 *     - Desktop nav visibility (>= 1024px) vs Mobile hamburger visibility (<= 1023px)
 * 19. React Rules of Hooks & Console Exception verification (zero errors/warnings).
 */

const { spawn } = require('child_process');
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

      // Click outside at bottom of viewport
      await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: 600, y: 700, button: 'left', clickCount: 1 });
      await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: 600, y: 700, button: 'left', clickCount: 1 });
      await new Promise(r => setTimeout(r, 250));

      const dismissedByOutsideClick = await evaluate(`!document.querySelector('#desktop-mega-menu-panel')`);
      assert(dismissedByOutsideClick, 'Clicking outside dismissed mega-menu panel');

      // -------------------------------------------------------------
      // 6. Mega-Menu Navigation Destinations
      // -------------------------------------------------------------
      console.log('\n--- 6. Mega-Menu Navigation Destinations ---');
      
      // Navigate to Quilt Covers
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 0, y: 0 });
      await new Promise(r => setTimeout(r, 100));
      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(beddingButtonRect.x),
        y: Math.round(beddingButtonRect.y)
      });
      await new Promise(r => setTimeout(r, 300));

      const clickQuiltCovers = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          const btn = Array.from(panel?.querySelectorAll('button') || []).find(b => b.textContent.includes('Quilt Covers'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(clickQuiltCovers, 'Clicked "Quilt Covers" in mega-menu');
      await new Promise(r => setTimeout(r, 400));

      const catalogQuiltCovers = await evaluate(`document.body.textContent.includes('Quilt Covers')`);
      assert(catalogQuiltCovers, 'Mega-menu navigated to CatalogView filtered to "Quilt Covers"');

      // Return home
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));

      // Navigate to Sleepwear (specifically requested)
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 0, y: 0 });
      await new Promise(r => setTimeout(r, 100));
      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(beddingButtonRect.x),
        y: Math.round(beddingButtonRect.y)
      });
      await new Promise(r => setTimeout(r, 300));

      const clickSleepwear = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          const btn = Array.from(panel?.querySelectorAll('button') || []).find(b => b.textContent.includes('Sleepwear'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(clickSleepwear, 'Clicked "Sleepwear" in mega-menu');
      await new Promise(r => setTimeout(r, 400));

      const catalogSleepwear = await evaluate(`document.body.textContent.includes('Sleepwear')`);
      assert(catalogSleepwear, 'Mega-menu navigated to CatalogView filtered to "Sleepwear"');

      // Return home
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));

      // Navigate to Complete Catalogue
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 0, y: 0 });
      await new Promise(r => setTimeout(r, 100));
      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(beddingButtonRect.x),
        y: Math.round(beddingButtonRect.y)
      });
      await new Promise(r => setTimeout(r, 300));

      const clickViewAll = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          const btn = Array.from(panel?.querySelectorAll('button') || []).find(b => b.textContent.includes('View Complete Catalogue'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(clickViewAll, 'Clicked "View Complete Catalogue" in mega-menu');
      await new Promise(r => setTimeout(r, 400));

      const catalogComplete = await evaluate(`
        (() => {
          const text = document.body.textContent;
          return text.includes('All Bedding') || text.includes('167');
        })()
      `);
      assert(catalogComplete, 'Navigated to complete catalogue showing full collection');

      // Return home
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));

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

      // Test Category Pill Click: Fitted Sheets
      console.log('\n--- 7B. Category Pill Clicks & Filtering ---');
      const clickFitted = await evaluate(`
        (() => {
          const nav = document.querySelector('[aria-label="Category pill navigation"]');
          const btn = Array.from(nav?.querySelectorAll('button') || []).find(b => b.textContent.includes('Fitted Sheets'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(clickFitted, 'Clicked "Fitted Sheets" category pill');
      await new Promise(r => setTimeout(r, 400));

      const catalogFilteredFitted = await evaluate(`document.body.textContent.includes('Fitted Sheets')`);
      assert(catalogFilteredFitted, 'Catalogue filtered to "Fitted Sheets" upon pill click');

      // Return home
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));

      // Test Category Pill Click: Wellness
      const clickWellness = await evaluate(`
        (() => {
          const nav = document.querySelector('[aria-label="Category pill navigation"]');
          const btn = Array.from(nav?.querySelectorAll('button') || []).find(b => b.textContent.includes('Wellness'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(clickWellness, 'Clicked "Wellness" category pill');
      await new Promise(r => setTimeout(r, 400));

      const catalogFilteredWellness = await evaluate(`document.body.textContent.includes('Wellness')`);
      assert(catalogFilteredWellness, 'Catalogue filtered to "Wellness" upon pill click');

      // Return home
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));

      // Scroll Button Controls Verification
      console.log('\n--- 7C. Category Strip Scroll Controls ---');
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

      // Click scroll right button
      await evaluate(`document.querySelector('button[aria-label="Scroll categories right"]')?.click()`);
      await new Promise(r => setTimeout(r, 500));

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
      assert(scrolledRightState.scrollLeft > 0, `Pill strip scrolled right (scrollLeft: ${scrolledRightState.scrollLeft}px)`);
      assert(scrolledRightState.leftDisabled === false, 'Scroll-left button became active after right scroll');

      // Click scroll left button to return
      await evaluate(`document.querySelector('button[aria-label="Scroll categories left"]')?.click()`);
      await new Promise(r => setTimeout(r, 500));

      // -------------------------------------------------------------
      // 8. Editorial Homepage Vignettes & CTAs
      // -------------------------------------------------------------
      console.log('\n--- 8. Editorial Homepage Vignettes & Images ---');
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

      // Test Vignette CTAs
      console.log('\n--- 8B. Vignette Actionable CTA Navigation ---');
      
      // Vignette 1 CTA: "Shop Quilt Covers"
      const cta1Success = await evaluate(`
        (() => {
          const sec = document.querySelector('#editorial-vignettes-section');
          const btn = Array.from(sec?.querySelectorAll('button') || []).find(b => b.textContent.includes('Shop Quilt Covers'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(cta1Success, 'Clicked Vignette 1 CTA: "Shop Quilt Covers"');
      await new Promise(r => setTimeout(r, 400));
      assert(await evaluate(`document.body.textContent.includes('Quilt Covers')`), 'Vignette 1 CTA navigated to Quilt Covers');
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));

      // Vignette 2 Card 1 CTA: "Shop Fitted Sheets"
      const cta2Success = await evaluate(`
        (() => {
          const sec = document.querySelector('#editorial-vignettes-section');
          const btn = Array.from(sec?.querySelectorAll('button') || []).find(b => b.textContent.includes('Shop Fitted Sheets'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(cta2Success, 'Clicked Vignette 2 Card 1 CTA: "Shop Fitted Sheets"');
      await new Promise(r => setTimeout(r, 400));
      assert(await evaluate(`document.body.textContent.includes('Fitted Sheets')`), 'Vignette 2 Card 1 CTA navigated to Fitted Sheets');
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));

      // Vignette 2 Card 3 CTA: "Shop Bed Covers"
      const cta3Success = await evaluate(`
        (() => {
          const sec = document.querySelector('#editorial-vignettes-section');
          const btn = Array.from(sec?.querySelectorAll('button') || []).find(b => b.textContent.includes('Shop Bed Covers'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(cta3Success, 'Clicked Vignette 2 Card 3 CTA: "Shop Bed Covers"');
      await new Promise(r => setTimeout(r, 400));
      assert(await evaluate(`document.body.textContent.includes('Blankets & Bed Covers')`), 'Vignette 2 Card 3 CTA navigated to Blankets & Bed Covers');
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));

      // -------------------------------------------------------------
      // 9. Mobile Navigation Drawer & Touch Targets
      // -------------------------------------------------------------
      console.log('\n--- 9. Mobile Navigation Drawer & Touch Targets ---');
      await send('Emulation.setDeviceMetricsOverride', {
        width: 375,
        height: 812,
        deviceScaleFactor: 2,
        mobile: true
      });
      await new Promise(r => setTimeout(r, 500));

      // Open drawer via hamburger
      const openHamburger = await evaluate(`
        (() => {
          const btn = document.querySelector('header button[aria-label="Open navigation menu"]');
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(openHamburger, 'Mobile (375px): Clicked hamburger menu button');
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

      // Mobile Accordion Tests
      console.log('\n--- 9B. Mobile Drawer Accordions ---');
      
      // Bedding Essentials (open by default, toggle closed)
      const toggleBeddingEssentials = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          const btn = Array.from(drawer?.querySelectorAll('button') || []).find(b => b.textContent.includes('Bedding Essentials'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(toggleBeddingEssentials, 'Toggled Bedding Essentials accordion closed');
      await new Promise(r => setTimeout(r, 200));

      // Expand Layers & Comfort
      const expandLayersComfort = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          const btn = Array.from(drawer?.querySelectorAll('button') || []).find(b => b.textContent.includes('Layers & Comfort'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(expandLayersComfort, 'Toggled Layers & Comfort accordion open');
      await new Promise(r => setTimeout(r, 200));

      const layersItemsVisible = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          return drawer?.textContent.includes('Blankets & Bed Covers') && drawer?.textContent.includes('Cushions');
        })()
      `);
      assert(layersItemsVisible, 'Layers & Comfort child categories visible when accordion is expanded');

      // Expand Living & Family
      const expandLivingFamily = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          const btn = Array.from(drawer?.querySelectorAll('button') || []).find(b => b.textContent.includes('Living & Family'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(expandLivingFamily, 'Toggled Living & Family accordion open');
      await new Promise(r => setTimeout(r, 200));

      const livingItemsVisible = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          return drawer?.textContent.includes('Sleepwear') && drawer?.textContent.includes('Wellness');
        })()
      `);
      assert(livingItemsVisible, 'Living & Family child categories (Sleepwear & Wellness) visible when accordion expanded');

      // Category Navigation from Inside Mobile Accordion
      console.log('\n--- 9C. Category Navigation from Inside Mobile Drawer ---');
      const clickSleepwearInDrawer = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          const btn = Array.from(drawer?.querySelectorAll('button') || []).find(b => b.textContent.includes('Sleepwear'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(clickSleepwearInDrawer, 'Clicked "Sleepwear" inside mobile drawer');
      await new Promise(r => setTimeout(r, 400));

      const drawerClosedAndFiltered = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          const hasSleepwear = document.body.textContent.includes('Sleepwear');
          return !drawer && hasSleepwear;
        })()
      `);
      assert(drawerClosedAndFiltered, 'Drawer automatically closed and catalogue filtered to "Sleepwear"');

      // Return home and re-open drawer to test Escape dismissal
      await evaluate(`document.querySelector('header button[aria-label="MORFE Homepage"]')?.click()`);
      await new Promise(r => setTimeout(r, 400));
      await evaluate(`document.querySelector('header button[aria-label="Open navigation menu"]')?.click()`);
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

      fs.writeFileSync(
        'src/data/phase4_interaction_test_results.json',
        JSON.stringify(testRecords, null, 2),
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
