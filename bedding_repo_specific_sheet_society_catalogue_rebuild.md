# EXISTING REPOSITORY CORRECTION — SHEET SOCIETY CATALOGUE REPRODUCTION
## Codebase-specific implementation brief for Antigravity / Gemini 3.8 Flash High

**Existing project archive inspected:** `Bedding-Website-main.zip`  
**Reference catalogue:** https://sheetsociety.com/  
**Existing project identity:** SEREIN — The Quiet Atelier  
**Stack:** React 18 + Vite 5 + TypeScript + Tailwind CSS 3  
**Primary requirement:** Replace the fabricated/placeholder catalogue and reused stock imagery with the client's requested Sheet Society reference catalogue and its corresponding product photography, based on the client's stated authorization to reproduce that catalogue for this client demo.

---

# 1. Read this first — the actual repository findings

I inspected the uploaded ZIP. These are observed facts from the current source, not assumptions.

## 1.1 Existing project structure

The archive contains:
- `src/App.tsx`
- `src/data/mockData.ts`
- `src/types/index.ts`
- `src/utils/format.ts`
- `src/index.css`
- `src/components/`

Existing components include:
- `Hero.tsx`
- `Header.tsx`
- `CatalogView.tsx`
- `ProductCard.tsx`
- `ProductDetailModal.tsx`
- `CartDrawer.tsx`
- `SearchModal.tsx`
- `BestsellersGrid.tsx`
- `BestsellersRail.tsx`
- `CategoryStrip.tsx`
- `BuildYourBedStudio.tsx`
- `ShopTheLook.tsx`
- `MaterialStory.tsx`
- `FabricCareModal.tsx`
- `SizeGuideModal.tsx`
- `ReviewsSection.tsx`
- `JournalSection.tsx`
- `Footer.tsx`

The project already has a meaningful component foundation. Reuse and correct it. Do not replace the whole application with a new starter template.

## 1.2 Current product and image data problems

The current `src/data/mockData.ts` contains **8 mock product records**.

The file contains approximately:
- 65 Unsplash image URL references.
- 22 distinct Unsplash image URLs.
- The same image URLs reused for product images, color swatches, bedroom looks, reviews, journal articles and material illustrations.

The current catalogue includes fabricated/example products such as:
- Normandy Washed Linen Duvet Cover
- French Flax Fitted Sheet
- French Flax Pillowcase Pair
- Brushed Waffle Wool-Linen Throw
- Silk-Touch Sateen Duvet Cover
- Stitch-Quilted Linen Chambray Quilt

These are not verified Sheet Society products and must not remain as if they were the reference catalogue.

The existing mock data also contains unverified:
- PKR prices.
- Color names and swatches.
- Sizes and dimensions.
- Ratings and review counts.
- Product certifications.
- Material descriptions and manufacturing claims.
- Customer reviews and customer identities.
- Bedroom look names and hotspot products.

Do not silently preserve these as factual catalogue data. Replace them with verified reference data where appropriate, or client-approved demo data where the reference does not provide Pakistan-specific information.

## 1.3 Dependencies

The uploaded `package.json` currently lists:
- React 18.3.1
- React DOM 18.3.1
- Vite 5.3.1
- TypeScript 5.4.5
- Tailwind CSS 3.4.4
- Lucide React 1.16.0

Framer Motion is **not currently listed** in the uploaded package manifest. Inspect the lockfile and source before adding it. Do not assume it is installed.

## 1.4 Existing features must be tested, not assumed

The README describes product browsing, search, filters, quick view, cart, Build Your Bed, fabric guide and other functionality. Verify the actual browser behavior before claiming these features work.

Do not delete working cart, search, modal, size-guide or navigation logic just to simplify the redesign.

---

# 2. Client requirement and asset authorization

The client specifically wants the Sheet Society product catalogue and product photography reproduced in this demo. The client has stated that the reference catalogue and photography are required for this presentation.

Therefore, implement the approved reference catalogue and its corresponding images rather than substituting AI-generated product scenes or unrelated stock imagery.

Operational rules:
- Use the exact corresponding product photographs for the matching products and variants.
- Preserve source URLs and product-page URLs in the data manifest for traceability.
- Download and store approved image files locally in the project when permitted by the client's authorization and the source's applicable terms.
- Do not hotlink unstable image URLs as the final production/demo asset strategy.
- Do not use an image from one colorway to represent another colorway unless the source itself uses that image for that variant.
- Do not generate replacement product photos with AI.
- Do not substitute Unsplash images.
- Do not fabricate missing products, prices, sizes, reviews or product attributes.
- If an asset cannot be retrieved, record it as missing and report it. Do not quietly replace it with a generic image.

Before any public deployment, confirm that the client has the necessary rights/permission for the reference brand's product photography, product content and catalogue data. This brief is for the client's authorized demo reproduction, not a claim that the demo is the official Sheet Society store.

---

# 3. Reference catalogue research — actual source pages

Use the correct regional storefront consistently. Start with the `/en` storefront and record any redirect or region switch. Do not mix product variants and pricing from `/en-au`, `/en-us` and other storefronts.

Main source pages:
- Homepage: `https://sheetsociety.com/en`
- All products: `https://sheetsociety.com/en/products`
- All bedding: `https://sheetsociety.com/en/products/all/bedding`
- Product example: `https://sheetsociety.com/en/product/bed-sheets-white`
- Collection example: `https://sheetsociety.com/en/collections/eden-cotton`

The current publicly indexed bedding category identifies these core item groups:
- Quilt Covers
- Bed Sheets
- Fitted Sheets
- Pillowcases
- Flat Sheets

The current publicly indexed collection taxonomy includes:
- Eden Cotton
- Eden Organic Cotton
- Eve Linen Recycled
- Eve Linen
- Leo Washed Cotton
- Goldie Gauze
- Poppy Tufted Cotton
- Tully Waffle
- Darcy Corduroy
- Lola Bouclé
- Parker Quilted
- Frankie Flannelette
- Limited Edition

Additional ranges may appear in the live storefront. Discover them from the actual site rather than assuming this list is exhaustive.

The live catalogue may vary by region and date. Capture:
- Exact source URL.
- Source region/locale.
- Date/time accessed.
- Product title.
- Collection/fabric.
- Product type.
- Color/print.
- Variant options.
- Current price and compare-at price as source metadata.
- Product image gallery.
- Availability if explicitly displayed.
- Product description and details, where required.

Do not copy Australia-specific shipping, returns, currency, Afterpay, delivery time or guarantees into the Pakistan demo unless the client has separately confirmed equivalent policies.

---

# 4. Exact catalogue extraction workflow

Do not manually invent a list of products. Enumerate the actual products in the reference catalogue.

## 4.1 Discover product inventory

1. Open the selected regional `/en` storefront.
2. Open the all-products and all-bedding pages.
3. Identify all category and collection links.
4. Follow each relevant category and collection.
5. Follow pagination, load-more and any available filtering states.
6. Record every unique product detail URL.
7. Deduplicate products by canonical product URL or stable source product ID.
8. Open each product detail page.
9. Capture all available product image variants and product options.
10. Compare discovered product counts with category/collection counts where visible.

If the site provides a public product feed, sitemap or public storefront data endpoint, it may be used if accessible without bypassing restrictions. Do not bypass login, anti-bot controls, rate limits or other access controls.

## 4.2 Product records

Create one canonical product record for each distinct product page or source product entity. Do not create one fake product per color or size if the reference represents these as variants of the same product.

Suggested type:

```ts
export type CatalogProduct = {
  id: string;
  handle: string;
  title: string;
  collectionName: string;
  productType: string;
  colorOrPrint: string | null;
  description: string | null;
  details: string[];
  materialDetails: string[];
  careInstructions: string[];
  sourceProductUrl: string;
  sourceRegion: string;
  sourceCheckedAt: string;
  sourceCurrency: string | null;
  sourcePriceFrom: number | null;
  sourceCompareAtPrice: number | null;
  demoPricePKR: number | null;
  images: ProductImage[];
  options: ProductOption[];
  variants: ProductVariant[];
};

export type ProductImage = {
  src: string;
  localPath: string | null;
  alt: string;
  position: number;
  role: "hero" | "gallery" | "detail" | "swatch" | "feature";
  colorOrPrint: string | null;
};

export type ProductOption = {
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  sourceVariantId: string | null;
  title: string;
  sku: string | null;
  size: string | null;
  colorOrPrint: string | null;
  sourcePrice: number | null;
  sourceCompareAtPrice: number | null;
  demoPricePKR: number | null;
  availability: "available" | "unavailable" | "unknown";
};
```

Adapt this schema to the actual data. Keep source values separate from demo-specific PKR prices.

## 4.3 Catalogue completeness report

Generate `catalogue-audit.json` and a readable `CATALOGUE_AUDIT.md` with:
- Total unique products found.
- Total products imported.
- Count by product type.
- Count by collection.
- Number of variants.
- Number of product images.
- Number of missing image mappings.
- Number of products missing source price.
- Number of products with unavailable/unknown stock status.
- Number of inaccessible product pages.
- Any difference between visible category counts and imported product counts.

Do not label the catalogue complete if the source pages were only partially accessible.

---

# 5. Product image acquisition and exact matching

This is the highest-priority correction.

## 5.1 No more generated or generic product imagery

Remove the current mock image mapping from `mockData.ts` after migrating any genuinely reusable client-owned visual assets.

Search the entire project for:
- `images.unsplash.com`
- `unsplash`
- `placehold`
- generated image URLs
- reused stock bedroom images
- duplicate image paths assigned to different unrelated products

No product card may use an unrelated generic bedroom image.

## 5.2 Image matching

For each reference product:
- Capture the main image shown on its actual product page.
- Capture additional product gallery images.
- Capture fabric/texture details where available.
- Capture the exact matching color/print.
- Capture variant swatch image or swatch color only if source data exposes it.
- Preserve gallery order.
- Use descriptive alt text based on the actual product and image role.

A product's white colorway must not display the beige, sage or blue photo. A fitted sheet must not use a random duvet cover photo. A pillowcase must not use a generic bedroom image as its only product photo.

## 5.3 Download/local asset organization

Create this structure:

```text
public/
  assets/
    sheetsociety-catalog/
      bed-sheets/
      fitted-sheets/
      flat-sheets/
      quilt-covers/
      pillowcases/
      other-bedding/
      collections/
      product-details/
      swatches/
```

Use stable, readable filenames:

```text
eden-cotton-white-bed-sheets-01.webp
eden-cotton-white-fitted-sheet-02.webp
eden-cotton-white-fabric-detail-03.webp
eden-cotton-warm-white-bed-sheets-01.webp
```

The actual filename must reflect the real product and color. Never name an image after an assumed product.

Create `src/data/imageManifest.json` to map every product/variant to its local assets.

## 5.4 Image quality

- Keep product image color accurate.
- Preserve source aspect ratio.
- Use WebP/AVIF where conversion does not damage detail or color.
- Use consistent card aspect ratios without distorting the photo.
- Use `object-fit: cover` only for intentional card crops.
- Use `object-fit: contain` where the full product image must remain visible.
- Define aspect ratio to prevent layout shifts.
- Lazy-load below-the-fold product imagery.
- Prioritize the hero and first visible product row.
- Provide responsive image sizes.
- Check all downloaded images decode successfully.

## 5.5 Image QA page

Create a temporary internal route or developer-only page that displays:
- Product title.
- Product color/print.
- Main image.
- Gallery thumbnails.
- Source product URL.
- Local asset path.

This page is for visually checking the catalogue image mappings. Do not expose it as a public customer route.

---

# 6. PKR pricing rules

The client demo is intended for Pakistan, so visible demo prices must use PKR.

However, reference storefront prices are not Pakistani selling prices.

Rules:
- Preserve source prices in their original source currency as metadata.
- Do not display AUD/USD as the demo store's selling price.
- Do not invent a conversion rate or silently convert prices.
- Use client-provided PKR prices if available.
- If the client has not supplied PKR pricing, use an explicitly labelled internal demo-price table that the client can approve before presentation.
- Keep `sourcePrice`, `sourceCurrency` and `demoPricePKR` separate.
- Never present an unapproved demo price as the client's actual retail price.

Use one shared formatter:

```ts
export const formatPKR = (amount: number) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);
```

Use the same formatter on product cards, product details, search, cart, order summary and demo checkout.

---

# 7. Replace the fabricated product data, preserve the working UI

Primary data file to replace:
`src/data/mockData.ts`

Current `mockData.ts` contains the mock products and also bedroom looks, reviews, journal articles and material specs. Do not replace the entire file blindly if components still import its other exports.

Required migration:
1. Identify every import from `mockData.ts`.
2. Create a canonical product data module, e.g. `src/data/products.ts`.
3. Migrate all product-dependent components to the verified catalogue.
4. Move collection/category data to `src/data/collections.ts`.
5. Move any retained editorial/demo data to clearly separate files.
6. Remove fabricated product facts from customer-facing UI.
7. Update `src/types/index.ts` to the new product schema.
8. Keep stable IDs/handles.
9. Keep the current component design where it works, but update it to show the real source catalogue.
10. Remove duplicate product arrays and inconsistent category names.

## Existing components to inspect and update

### `ProductCard.tsx`
- Use exact product primary image.
- Display actual title, collection, color/print and PKR demo price.
- Do not show invented review count, ratings or sale badges.
- Swatches must correspond to real source variants.
- Quick view must open the selected product, not a hardcoded sample.

### `CatalogView.tsx`
- Use the full imported catalogue.
- Product count must be computed from the data.
- Filters must reflect actual categories, collections, colors and sizes.
- Sorting must work on actual data.
- Empty states must be implemented.

### `ProductDetailModal.tsx`
- Use the exact product gallery.
- Use real product details and available options.
- Variant selection must update image/price/availability when source data supports it.
- Do not display invented fabric or certification claims.

### `BestsellersGrid.tsx` and `BestsellersRail.tsx`
- Do not label products bestsellers unless the source/client confirms it.
- Use a neutral title such as `Explore the Collection` if bestseller status is unverified.
- Populate from the same canonical product data.
- Keep the horizontal slide controls functional.

### `SearchModal.tsx`
- Search actual product title, collection, type, color and material.
- Show the matching product image and PKR price.

### `CartDrawer.tsx`
- Store product ID and variant ID.
- Display correct selected variant.
- Calculate quantity and subtotal correctly.
- Use PKR consistently.
- Do not lose cart state when modal state changes.

### `App.tsx`
- Keep existing app-level state and component relationships where practical.
- Do not remove working navigation, cart or modal behavior.
- Ensure all product selection handlers use the new canonical product type.

---

# 8. Build a real catalogue-led e-commerce demo

The product catalogue must be the center of the shopping experience.

## 8.1 Homepage
- Keep the previously approved full-screen Quiet Luxury hero with three campaign slides.
- Use actual client-approved campaign photography where supplied.
- Product sections below the hero must use real reference catalogue product images.
- Category tiles must link to working category pages.
- Featured product rows must use actual products.
- Do not use a generic Unsplash bedroom image to represent a product collection.

## 8.2 All products
- Show the full accessible catalogue.
- Display correct product image and name.
- Show collection/fabric label.
- Show PKR demo price.
- Show real color options.
- Filters and sorting must work.
- Product count must be real.

## 8.3 Category pages
At minimum support the actual bedding item types found on the reference:
- Quilt Covers
- Bed Sheets
- Fitted Sheets
- Pillowcases
- Flat Sheets

Only add other product categories when they are actually present in the source catalogue and included in the client's scope.

## 8.4 Collection pages
Create pages for each discovered fabric collection, not just a hardcoded selection.

Each page must include:
- Collection title.
- Verified collection description.
- Correct product grid.
- Relevant product images.
- Real color and size options.
- Working filters where useful.

## 8.5 Product detail pages
Every product card must open the correct product detail page/modal.

Include:
- Product image gallery.
- Product title.
- Collection/fabric.
- Color/print.
- PKR demo price.
- Size selection.
- Availability state if source data provides it.
- Add to cart.
- Product details.
- Fabric details.
- Care instructions.
- Related items.

Do not fabricate details when the source does not provide them.

## 8.6 Cart and checkout
- Add/remove items.
- Update quantity.
- Correct variant selection.
- Correct subtotal.
- PKR formatting.
- Persist cart for the demo.
- Build a clearly marked demo checkout.
- Do not process real payment or claim an order has been placed.

---

# 9. Design fidelity and motion

Do not change the approved Quiet Luxury visual direction into an unrelated design.

Keep:
- Full-screen three-slide hero.
- Transparent header.
- Centered brand wordmark.
- Bottom-left hero copy.
- Warm neutral palette.
- Refined serif/sans typography.
- Editorial spacing.
- Real product photography.

But the product listing and collection experience must behave like a proper product-led e-commerce store.

Use the reference's visual behavior as a benchmark for:
- Product grid density.
- Image aspect ratios.
- White space.
- Filter/sort placement.
- Collection navigation.
- Product detail gallery.
- Variant selectors.
- Cart behavior.

Do not copy the reference's brand logo into the SEREIN demo unless the client explicitly wants and is authorized to present that exact brand identity. The product catalogue and product photography are the requested reproduced material; keep the client's store identity clearly represented.

Animations should support browsing:
- Smooth horizontal product rails.
- Subtle product image hover transition.
- Calm filter drawer/panel transitions.
- Smooth cart drawer.
- Product gallery transitions.
- Respect reduced motion.
Do not add unnecessary decorative animation to every element.

---

# 10. Existing data cleanup

The following current mock content must be audited and either replaced or removed:
- Mock product records.
- Mock product prices.
- Mock color swatches.
- Mock sizes and dimensions.
- Mock certifications.
- Mock ratings and review counts.
- Fabric claims.
- Bedroom look names and hotspot mappings.
- Customer reviews and reviewer names.
- Journal content if it makes unsupported claims about the reference products.

Do not create fake customer testimonials or claim that the reference brand's reviews belong to the client.

If a section is not required for the demo and has no verified/client-owned content, hide it rather than fill it with invented information.

---

# 11. Required implementation sequence

Do these phases in order.

## Phase A — Baseline audit
- Run the current project.
- Capture current desktop and mobile screenshots.
- Identify broken features and current component imports.
- List every mock product and every repeated image URL.
- Record all existing working features.

## Phase B — Reference catalogue extraction
- Select one storefront region.
- Enumerate all relevant products.
- Capture product titles, categories, collections, variants and source URLs.
- Capture exact product image gallery URLs.
- Record product count and missing information.
- Do not start inventing product records.

## Phase C — Asset download and mapping
- Download authorized reference photography.
- Organize local images.
- Build image manifest.
- Verify product-to-image mapping.
- Generate and inspect contact sheet.
- Report any inaccessible assets.

## Phase D — Data migration
- Create canonical catalogue data.
- Update types.
- Migrate components.
- Remove mock products.
- Remove fake prices/reviews/material claims.

## Phase E — E-commerce implementation
- Full catalogue.
- Collection/category pages.
- Product details.
- Variant selectors.
- Search.
- Filters and sorting.
- Cart.
- Demo checkout.

## Phase F — Visual and motion refinement
- Preserve approved hero design.
- Match reference shopping layouts.
- Polish product image grids.
- Implement subtle functional transitions.

## Phase G — Browser QA
- Test desktop and mobile.
- Open every category.
- Open a sample product from each collection.
- Verify image and variant correctness.
- Test search, filters, sort, cart and checkout.
- Confirm PKR display.
- Confirm no generated/Unsplash product images remain.
- Run production build.

Do not skip from Phase A to visual styling. The catalogue and imagery must be corrected first.

---

# 12. Definition of done

The project is not ready for the client until all relevant items below pass.

## Product data
- [ ] The original 8 mock products are removed/replaced.
- [ ] Catalogue records come from the selected reference storefront.
- [ ] Product count reflects actual discovered products.
- [ ] Product names and categories are verified.
- [ ] Variants are represented correctly.
- [ ] No invented product descriptions or specifications remain.
- [ ] Source URLs and region metadata are retained.

## Photography
- [ ] Correct reference product image is mapped to every product.
- [ ] Exact color/print photography is used.
- [ ] Product gallery images match the selected product.
- [ ] No AI-generated product photography remains.
- [ ] No Unsplash product images remain.
- [ ] No unrelated images are reused.
- [ ] No broken image assets.
- [ ] Local asset paths are verified.
- [ ] Contact sheet has been inspected.

## Shopping
- [ ] Full product catalogue is browsable.
- [ ] Collection/category pages work.
- [ ] Search works.
- [ ] Filters work.
- [ ] Sorting works.
- [ ] Product detail views work.
- [ ] Size/color selection works where supported.
- [ ] Cart works.
- [ ] Totals are correct.
- [ ] PKR is used throughout the customer-facing demo.
- [ ] Checkout is clearly in demo mode.

## Visual
- [ ] Homepage hero follows approved specification.
- [ ] Product cards look like real retail listings.
- [ ] Product image ratios are consistent.
- [ ] Collection pages look complete.
- [ ] Product detail pages look complete.
- [ ] Mobile layout is polished.
- [ ] No accidental overflow.

---

# 13. Final report Gemini must produce

At completion, report:
1. Files inspected.
2. Files changed.
3. Existing features retained.
4. Mock products removed.
5. Total unique reference products discovered.
6. Total products imported.
7. Total variants imported.
8. Total reference images downloaded.
9. Total images successfully validated.
10. Number of missing product images.
11. Number of missing or unapproved PKR prices.
12. Collections and categories completed.
13. Search/filter/sort/cart/checkout test results.
14. Build result.
15. Desktop and mobile screenshots.
16. Any source pages/assets that could not be accessed.

Do not state that the catalogue is complete unless the product count has been reconciled against the accessible reference storefront.

---

# FINAL INSTRUCTION TO GEMINI

You are working inside the existing SEREIN React/Vite/TypeScript project. Do not create a new starter application.

I have uploaded the actual repository ZIP. Inspect its real source files. The current code has only 8 mock products and approximately 22 unique Unsplash images reused across around 65 image references. This is the reason the store looks fake. The existing components already include a catalogue, product cards, product detail modal, cart, search and horizontal product rail. Preserve and improve them.

The client specifically wants the Sheet Society catalogue and its product photography reproduced for this demo. Use the exact matching reference product images and product information from the selected storefront, subject to the client's stated authorization. Do not substitute generated images, random stock images, Unsplash photos or repeated generic bedroom images.

First enumerate the actual catalogue. Then download/map the exact images to the correct products and variants. Replace the mock data with one canonical catalogue dataset. Build the complete product grid, category/collection pages and product detail experiences from that dataset. Make search, filters, sorting, variants and cart work from the same data source.

All customer-facing demo prices must be PKR. Keep source-region prices separately as reference metadata. Use client-approved PKR prices or clearly identified demo prices awaiting approval. Do not invent actual retail prices.

Preserve the approved three-slide Quiet Luxury hero and existing working functionality. The goal is a fully populated, believable bedding e-commerce store that can be demonstrated to a client, not another generated landing-page concept.

Work in phases, verify every product-image mapping, test the browser and provide actual screenshots and a factual completion report. If the source catalogue or image assets cannot be accessed, report the exact missing items and stop pretending the work is complete.
