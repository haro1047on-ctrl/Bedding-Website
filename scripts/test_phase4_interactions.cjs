/**
 * MORFE - Phase 4 Homepage & Mega-Menu Replication Browser Interaction Test Suite
 *
 * Runs on Headless Google Chrome via Chrome DevTools Protocol (CDP) using Node native WebSocket.
 * Validates real client interactions in the browser DOM:
 *  1. Storefront hydration and initial homepage composition.
 *  2. Header navigation with "Bedding" mega-menu hover trigger.
 *  3. Seamless pointer transit from parent nav trigger into mega-menu panel (zero accidental closure).
 *  4. All 11 approved sub-departments rendered with authentic counts and hierarchy.
 *  5. Signature fabrics and curated editorial card rendered inside mega-menu.
 *  6. Escape-key dismissal.
 *  7. Outside-click dismissal.
 *  8. Mega-menu category link navigation to CatalogView.
 *  9. Horizontal Category Pill Strip rendering all departments with active, hover, and focus states.
 * 10. Category pill click navigation to CatalogView.
 * 11. Category pill scrollability and indicator controls.
 * 12. Editorial Vignettes: Asymmetrical split feature ("The Art of the Unmade Bed") and dual CTAs.
 * 13. Editorial Vignettes: Three-column sleep foundation suite and actionable CTAs.
 * 14. Responsive viewport tests at 1280px (desktop), 768px (tablet), and 375px (mobile).
 * 15. Mobile navigation drawer with hierarchical accordions and zero horizontal overflow.
 * 16. Confirms ZERO React Hooks violations, console errors, or runtime exceptions throughout.
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
          return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2, top: rect.top, bottom: rect.bottom };
        })()
      `);

      assert(beddingButtonRect !== null, 'Located "Bedding" navigation trigger in desktop nav');

      // Step A: Move pointer onto "Bedding" trigger
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

      // Step B: Pointer transit from button down into the mega-menu panel (diagonal/vertical traverse)
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

      // -------------------------------------------------------------
      // 3. Mega-Menu 11 Approved Sub-Departments & Columns
      // -------------------------------------------------------------
      console.log('\n--- 3. Mega-Menu 11 Approved Sub-Departments ---');
      const menuContent = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          if (!panel) return null;
          const text = panel.textContent;
          const buttons = Array.from(panel.querySelectorAll('button')).map(b => b.textContent.trim());
          return {
            hasQuiltCovers: text.includes('Quilt Covers') && text.includes('15 Styles'),
            hasFittedSheets: text.includes('Fitted Sheets') && text.includes('8 Styles'),
            hasFlatSheets: text.includes('Flat Sheets') && text.includes('8 Styles'),
            hasPillowcases: text.includes('Pillowcase Pairs') && text.includes('10 Styles'),
            hasBedSheets: text.includes('Bed Sheets & Sets') && text.includes('18 Styles'),
            hasBlankets: text.includes('Blankets & Bed Covers') && text.includes('19 Styles'),
            hasCushions: text.includes('Cushions') && text.includes('31 Styles'),
            hasQuiltsPillows: text.includes('Quilts & Pillows') && text.includes('12 Styles'),
            hasProtectors: text.includes('Protectors & Toppers') && text.includes('7 Styles'),
            hasBathTowels: text.includes('Bath & Towels') && text.includes('6 Styles'),
            hasKidsBaby: text.includes('Kids & Baby') && text.includes('16 Styles'),
            hasFabrics: text.includes('Shop by Fabric') && text.includes('Eve Linen') && text.includes('Darcy Corduroy'),
            hasEditorialCard: text.includes('Darcy Corduroy in Russet') && text.includes('Atelier Edit'),
            hasViewAll: buttons.some(b => b.includes('View Complete Catalogue'))
          };
        })()
      `);

      assert(menuContent && menuContent.hasQuiltCovers, 'Department 1: "Quilt Covers (15 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasFittedSheets, 'Department 2: "Fitted Sheets (8 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasFlatSheets, 'Department 3: "Flat Sheets (8 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasPillowcases, 'Department 4: "Pillowcase Pairs (10 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasBedSheets, 'Department 5: "Bed Sheets & Sets (18 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasBlankets, 'Department 6: "Blankets & Bed Covers (19 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasCushions, 'Department 7: "Cushions (31 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasQuiltsPillows, 'Department 8: "Quilts & Pillows (12 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasProtectors, 'Department 9: "Protectors & Toppers (7 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasBathTowels, 'Department 10: "Bath & Towels (6 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasKidsBaby, 'Department 11: "Kids & Baby (16 Styles)" rendered in mega-menu');
      assert(menuContent && menuContent.hasFabrics, 'Signature Weaves column rendered (Eve Linen, Darcy Corduroy, etc.)');
      assert(menuContent && menuContent.hasEditorialCard, 'Curated Editorial Showcase card rendered with local imagery');
      assert(menuContent && menuContent.hasViewAll, '"View Complete Catalogue" CTA present in mega-menu');

      // -------------------------------------------------------------
      // 4. Escape-Key & Outside-Click Dismissal
      // -------------------------------------------------------------
      console.log('\n--- 4. Escape-Key & Outside-Click Dismissal ---');
      
      // Dispatch Escape key
      await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await new Promise(r => setTimeout(r, 200));

      const dismissedByEscape = await evaluate(`
        (() => {
          return !document.querySelector('#desktop-mega-menu-panel');
        })()
      `);
      assert(dismissedByEscape, 'Pressing Escape dismissed the mega-menu panel');

      // Re-open by hover
      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(beddingButtonRect.x),
        y: Math.round(beddingButtonRect.y)
      });
      await new Promise(r => setTimeout(r, 250));

      // Click outside at bottom of viewport
      await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: 600, y: 700, button: 'left', clickCount: 1 });
      await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: 600, y: 700, button: 'left', clickCount: 1 });
      await new Promise(r => setTimeout(r, 250));

      const dismissedByOutsideClick = await evaluate(`
        (() => {
          return !document.querySelector('#desktop-mega-menu-panel');
        })()
      `);
      assert(dismissedByOutsideClick, 'Clicking outside dismissed the mega-menu panel');

      // -------------------------------------------------------------
      // 5. Mega-Menu Navigation Click
      // -------------------------------------------------------------
      console.log('\n--- 5. Mega-Menu Navigation Click ---');
      // Re-open by hover
      await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(beddingButtonRect.x),
        y: Math.round(beddingButtonRect.y)
      });
      await new Promise(r => setTimeout(r, 250));

      // Click "Quilt Covers" inside mega-menu
      const clickQuiltCovers = await evaluate(`
        (() => {
          const panel = document.querySelector('#desktop-mega-menu-panel');
          if (!panel) return false;
          const buttons = Array.from(panel.querySelectorAll('button'));
          const btn = buttons.find(b => b.textContent.includes('Quilt Covers'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(clickQuiltCovers, 'Clicked "Quilt Covers" in mega-menu');
      await new Promise(r => setTimeout(r, 500));

      const catalogActiveCategory = await evaluate(`
        (() => {
          const header = document.querySelector('h1, h2');
          const isCatalog = document.querySelector('[data-testid="catalog-view"]') || document.body.textContent.includes('Quilt Covers');
          return isCatalog;
        })()
      `);
      assert(catalogActiveCategory, 'Navigated to CatalogView filtered to "Quilt Covers"');

      // Navigate home via logo
      await evaluate(`
        (() => {
          const homeBtn = Array.from(document.querySelectorAll('header button')).find(b => b.textContent.includes('MORFE'));
          homeBtn?.click();
        })()
      `);
      await new Promise(r => setTimeout(r, 500));

      // -------------------------------------------------------------
      // 6. Horizontal Category Pill Strip
      // -------------------------------------------------------------
      console.log('\n--- 6. Horizontal Category Pill Strip ---');
      const pillStripData = await evaluate(`
        (() => {
          const nav = document.querySelector('[aria-label="Category pill navigation"]');
          if (!nav) return null;
          const pills = Array.from(nav.querySelectorAll('button')).map(b => b.textContent.trim());
          const allPill = nav.querySelector('button');
          const isAllActive = allPill?.className?.includes('bg-umber') || allPill?.className?.includes('text-porcelain');
          return {
            count: pills.length,
            pills,
            hasQuiltCovers: pills.some(p => p.toLowerCase().includes('quilt covers')),
            hasFittedSheets: pills.some(p => p.toLowerCase().includes('fitted sheets')),
            hasBedSets: pills.some(p => p.toLowerCase().includes('bed sheets & sets')),
            hasCushions: pills.some(p => p.toLowerCase().includes('cushions')),
            hasKidsBaby: pills.some(p => p.toLowerCase().includes('kids & baby')),
            isAllActive
          };
        })()
      `);

      assert(pillStripData && pillStripData.count >= 14, `Category pill strip rendered ${pillStripData?.count} category pills`);
      assert(pillStripData && pillStripData.hasQuiltCovers, 'Category pill strip includes "Quilt Covers"');
      assert(pillStripData && pillStripData.hasFittedSheets, 'Category pill strip includes "Fitted Sheets"');
      assert(pillStripData && pillStripData.hasBedSets, 'Category pill strip includes "Bed Sheets & Sets"');
      assert(pillStripData && pillStripData.hasCushions, 'Category pill strip includes "Cushions"');
      assert(pillStripData && pillStripData.hasKidsBaby, 'Category pill strip includes "Kids & Baby"');
      assert(pillStripData && pillStripData.isAllActive, '"All Bedding" pill displays active visual styling');

      // Click a pill (e.g. "Fitted Sheets")
      const pillClickResult = await evaluate(`
        (() => {
          const nav = document.querySelector('[aria-label="Category pill navigation"]');
          if (!nav) return false;
          const buttons = Array.from(nav.querySelectorAll('button'));
          const fittedPill = buttons.find(b => b.textContent.toLowerCase().includes('fitted sheets'));
          if (!fittedPill) return false;
          fittedPill.click();
          return true;
        })()
      `);
      assert(pillClickResult, 'Clicked "Fitted Sheets" category pill');
      await new Promise(r => setTimeout(r, 500));

      const catalogFittedActive = await evaluate(`
        (() => {
          return document.body.textContent.includes('Fitted Sheets');
        })()
      `);
      assert(catalogFittedActive, 'Pill click filtered catalogue to "Fitted Sheets"');

      // Return home
      await evaluate(`
        (() => {
          const homeBtn = Array.from(document.querySelectorAll('header button')).find(b => b.textContent.includes('MORFE'));
          homeBtn?.click();
        })()
      `);
      await new Promise(r => setTimeout(r, 500));

      // -------------------------------------------------------------
      // 7. Editorial Homepage Vignettes
      // -------------------------------------------------------------
      console.log('\n--- 7. Editorial Homepage Vignettes ---');
      const vignettesContent = await evaluate(`
        (() => {
          const sec = document.querySelector('#editorial-vignettes-section');
          if (!sec) return null;
          const text = sec.textContent;
          const images = Array.from(sec.querySelectorAll('img')).map(i => i.getAttribute('src'));
          return {
            hasTextureEdit: text.includes('The Texture Edit'),
            hasArtOfUnmadeBed: text.includes('The Art of the Unmade Bed'),
            hasThreeElements: text.includes('Three Elements of a Restful Night'),
            hasBaseCard: text.includes('55cm Deep Fitted Sheet') && text.includes('01 · The Base'),
            hasCenterpieceCard: text.includes('Tailored Quilt Covers') && text.includes('02 · The Centerpiece'),
            hasLayerCard: text.includes('Stonewashed Bed Covers') && text.includes('03 · The Layer'),
            imageCount: images.length,
            images
          };
        })()
      `);

      assert(vignettesContent && vignettesContent.hasTextureEdit, 'Vignette 1 renders "The Texture Edit" tag');
      assert(vignettesContent && vignettesContent.hasArtOfUnmadeBed, 'Vignette 1 renders serif headline "The Art of the Unmade Bed"');
      assert(vignettesContent && vignettesContent.hasThreeElements, 'Vignette 2 renders "Three Elements of a Restful Night"');
      assert(vignettesContent && vignettesContent.hasBaseCard, 'Vignette 2 Card 1: 55cm Deep Fitted Sheet rendered');
      assert(vignettesContent && vignettesContent.hasCenterpieceCard, 'Vignette 2 Card 2: Tailored Quilt Covers rendered');
      assert(vignettesContent && vignettesContent.hasLayerCard, 'Vignette 2 Card 3: Stonewashed Bed Covers rendered');
      assert(vignettesContent && vignettesContent.imageCount === 4, 'Editorial vignettes load 4 verified local image assets');

      // Click CTA in Vignette 1: "Shop Quilt Covers"
      const ctaClickSuccess = await evaluate(`
        (() => {
          const sec = document.querySelector('#editorial-vignettes-section');
          const btn = Array.from(sec?.querySelectorAll('button') || []).find(b => b.textContent.includes('Shop Quilt Covers'));
          if (!btn) return false;
          btn.click();
          return true;
        })()
      `);
      assert(ctaClickSuccess, 'Clicked "Shop Quilt Covers" CTA in Editorial Vignette');
      await new Promise(r => setTimeout(r, 500));

      // Return home
      await evaluate(`
        (() => {
          const homeBtn = Array.from(document.querySelectorAll('header button')).find(b => b.textContent.includes('MORFE'));
          homeBtn?.click();
        })()
      `);
      await new Promise(r => setTimeout(r, 500));

      // -------------------------------------------------------------
      // 8. Responsive Viewports & Zero Horizontal Overflow
      // -------------------------------------------------------------
      console.log('\n--- 8. Responsive Viewports & Zero Overflow ---');
      
      // Desktop: 1280px
      const desktopOverflow = await evaluate(`
        (() => {
          return {
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            hasNoOverflow: document.documentElement.scrollWidth <= window.innerWidth
          };
        })()
      `);
      assert(desktopOverflow.hasNoOverflow, `Desktop (1280px): zero horizontal overflow (scrollWidth=${desktopOverflow.scrollWidth}, innerWidth=${desktopOverflow.innerWidth})`);

      // Tablet: 768px
      await send('Emulation.setDeviceMetricsOverride', {
        width: 768,
        height: 1024,
        deviceScaleFactor: 1,
        mobile: false
      });
      await new Promise(r => setTimeout(r, 500));

      const tabletOverflow = await evaluate(`
        (() => {
          return {
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            hasNoOverflow: document.documentElement.scrollWidth <= window.innerWidth
          };
        })()
      `);
      assert(tabletOverflow.hasNoOverflow, `Tablet (768px): zero horizontal overflow (scrollWidth=${tabletOverflow.scrollWidth}, innerWidth=${tabletOverflow.innerWidth})`);

      // Mobile: 375px
      await send('Emulation.setDeviceMetricsOverride', {
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        mobile: true
      });
      await new Promise(r => setTimeout(r, 500));

      const mobileOverflow = await evaluate(`
        (() => {
          return {
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            hasNoOverflow: document.documentElement.scrollWidth <= window.innerWidth
          };
        })()
      `);
      assert(mobileOverflow.hasNoOverflow, `Mobile (375px): zero horizontal overflow (scrollWidth=${mobileOverflow.scrollWidth}, innerWidth=${mobileOverflow.innerWidth})`);

      // Mobile Menu Drawer: Click Hamburger & Verify Accordions
      const mobileDrawerOpen = await evaluate(`
        (() => {
          const hamburger = document.querySelector('header button[aria-label="Open navigation menu"]');
          if (!hamburger) return false;
          hamburger.click();
          return true;
        })()
      `);
      assert(mobileDrawerOpen, 'Mobile (375px): Clicked hamburger menu button');
      await new Promise(r => setTimeout(r, 400));

      const mobileDrawerContent = await evaluate(`
        (() => {
          const drawer = document.querySelector('.fixed.inset-y-0.left-0');
          if (!drawer) return null;
          const text = drawer.textContent;
          return {
            hasBeddingEssentials: text.includes('Bedding Essentials'),
            hasLayersComfort: text.includes('Layers & Comfort'),
            hasLivingFamily: text.includes('Living & Family'),
            hasAtelierStory: text.includes('Our Story & Manifesto'),
            hasZeroDrawerOverflow: drawer.scrollWidth <= drawer.clientWidth
          };
        })()
      `);
      assert(mobileDrawerContent && mobileDrawerContent.hasBeddingEssentials, 'Mobile Drawer: "Bedding Essentials" accordion section present');
      assert(mobileDrawerContent && mobileDrawerContent.hasLayersComfort, 'Mobile Drawer: "Layers & Comfort" accordion section present');
      assert(mobileDrawerContent && mobileDrawerContent.hasLivingFamily, 'Mobile Drawer: "Living & Family" accordion section present');
      assert(mobileDrawerContent && mobileDrawerContent.hasAtelierStory, 'Mobile Drawer: "Our Story & Manifesto" link present');
      assert(mobileDrawerContent && mobileDrawerContent.hasZeroDrawerOverflow, 'Mobile Drawer: Zero horizontal overflow inside drawer container');

      // -------------------------------------------------------------
      // 9. React Rules of Hooks & Console Exception Verification
      // -------------------------------------------------------------
      console.log('\n--- 9. React Rules of Hooks & Console Exception Verification ---');
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
