# SEREIN — The Quiet Atelier
## Premium Bedding & Home-Linen E-Commerce Platform

Designed and built in direct fulfillment of the **Complete UI/UX Art Direction & Website Generation Brief** (`premium_bedding_website_design_brief.md`).

---

### 1. Creative Direction: "The Quiet Atelier"
A warm, tactile visual world inspired by natural textiles, architectural interiors, vintage print ephemera, and contemporary editorial design. The platform communicates comfort, material quality, craftsmanship, and quiet confidence without generic AI-generated e-commerce tropes.

#### Design System & Palette Tokens
- **Porcelain** (`#F4F0E8`): Soft warm ivory page foundation
- **Chalk** (`#FBF9F5`): Clean warm white for product cards and light surfaces
- **Oat** (`#D8CBB8`): Muted natural beige for secondary backgrounds, borders & swatches
- **Umber** (`#49372F`): Deep earthy brown for headings, brand marks, and strong contrast
- **Olive Ink** (`#596451`): Muted botanical green for accents, selected states, and trust badges
- **Clay Rose** (`#B77F70`): Dusty terracotta-rose for campaign accents and bundle privileges
- **Dusk Blue** (`#71818A`): Slate blue for secondary accent and cooling product stories
- **Soft Graphite** (`#282725`): High-contrast readable body text

#### Typography System
- **Display / Editorial**: `Cormorant Garamond` (Google Fonts: 400, 500, 600, 400i) — an elegant, characterful serif with literary warmth.
- **Interface / Body**: `DM Sans` (Google Fonts: 400, 500, 600, 700) — clean, contemporary, and readable at all viewport sizes.

---

### 2. Implemented Features & Architecture

1. **Top Announcement Strip & Navigation**:
   - Slim low-height announcement bar with shipping threshold, guarantee, and live currency selector (USD, EUR, GBP).
   - Minimalist header with sticky behavior (shrinks smoothly with border blur on scroll).
   - Mega-menu for "Shop Bedding" with category counts and featured collection preview.
   - Mobile slide-over navigation drawer.
   - Dynamic bag item counter and instant search trigger.

2. **Section 3 — Split Editorial Hero**:
   - *"Make room for slower mornings."*
   - Cinematic photography of unironed natural French flax in gentle morning light.
   - Dual CTAs (*"Shop The Collection"* & *"Build Your Bed"*).
   - Floating curated swatch vignette and verifiable quality badges (100-Night Sleep Trial & 100% French Flax).

3. **Section 4 — Category Discovery**:
   - Visual category cards with tactile imagery for Sheets, Duvet Covers, Pillowcases, Quilts & Comforters, and Throws.

4. **Section 5 — Brand Point of View & Atelier Manifesto**:
   - Asymmetric duo of macro weave photography (170 GSM Normandy flax) and Guimarães stone-washed finish.
   - 3 verifiable pillars: Zero Irrigation coastal flax, OEKO-TEX Standard 100, and 100-Night Guarantee.

5. **Section 6 & 7 — Bestsellers & Curated Grid**:
   - Responsive multi-column layout with tabbed category filtering.
   - Live color swatches on product cards that update preview photography.
   - Secondary image swap on hover.
   - Quick View drawer trigger and pricing.

6. **Section 9 — Signature Feature: "Build Your Bed" Studio**:
   - Interactive 4-step bed customizer (Base Fitted Sheet → Normandy Linen Duvet → Pillowcases → Waffle Throw).
   - Real-time layered bed visualizer updating color swatches across headboard, sheets, duvet drape, pillow stack, and throw.
   - Real-time bundle pricing calculator with automatic **15% Atelier Complete Set Privilege** discount.
   - One-click *"Add Complete Custom Suite to Bag"* action.

7. **Section 8 — Material Science & Fabric Guide**:
   - Interactive switcher between French Flax Linen, Organic Cotton Percale, 4-Ply Cloud Cotton Gauze, and Heritage Sateen.
   - Detailed feel profiles: texture, thermal regulation, endurance, GSM weight, and ideal sleeper profile.

8. **Section 9b — Bedroom Suites Inspiration (Shop The Look)**:
   - Editorial bedroom suites with interactive clickable hotspot pins revealing coordinates and instant quick-view actions.

9. **Section 10 & 11 — Quality, Trust & Verified Reviews**:
   - 4 concise verifiable proof points.
   - Honest customer reviews with star ratings, verified buyer badges, and product/hue details.

10. **Section 12 & 13 — The Atelier Journal & Newsletter**:
    - Articles (*"The Art of Layering"*, *"Caring for Natural Linen"*, *"Percale vs Sateen"*) with full reading modal.
    - Thoughtful newsletter invitation offering 10% first-order privilege.

11. **Section 14 — Comprehensive Structured Footer**:
    - Complete category navigation, atelier services, customer concierge, certifications, and payment badges.

12. **Modals & Drawers**:
    - **Product Detail Modal (PDP)**: Multi-image gallery with thumbnails, color swatches, size picker with dimensions, quantity counter, and accordions for fabric, sizing, what's included, and care.
    - **Slide-over Cart Drawer**: Free shipping threshold meter ($150 target), quantity controls, item deletion, promo code input (`ATELIER10`), and secure checkout.
    - **Live Search Modal**: Predictive search matching names, fabrics, categories, and colors.
    - **Size Guide Modal**: Complete dimensions matrix across Twin, Full, Queen, King, and Cal King with inches/cm toggle and deep mattress pocket advice.
    - **Fabric Care Modal**: 4-step laundering, drying, and softening protocol.

13. **Full Catalog / Collection View**:
    - Filter by Category, Material, Color, and Size.
    - Sort by Featured, Price Low-High, Price High-Low, and Highest Rated.
    - Active filter tags with single-click dismissal and mobile filter sheet.

---

### 3. Running the Project

#### Development Server
```bash
npm run dev
```

#### Production Build & Verification
```bash
npm run build
npm run preview
```
