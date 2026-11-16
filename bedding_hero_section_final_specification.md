# HERO SECTION — FINAL VISUAL & MOTION SPECIFICATION
## Premium Bedding E-commerce Website
### Antigravity implementation brief · Gemini 3.8 Flash High

**Status:** Approved art direction  
**Hero direction:** Quiet Luxury  
**Height:** Full viewport (`100svh`, with sensible fallbacks)  
**Motion:** Cinematic horizontal slide transitions  
**Headline placement:** Bottom-left  
**Slides:** Three campaign slides

This document defines the hero section precisely. Treat it as the source of truth for the hero design and implementation. Do not reinterpret the approved direction as a split hero, card-based banner, standard Shopify carousel or generic AI-generated landing-page header.

---

# 1. Creative direction

Create a full-screen, immersive bedding campaign hero inspired by the supplied Bedfolk reference.

The first screen should feel like entering a beautifully photographed bedroom in a premium interiors magazine. The bedroom photograph is the hero; the interface should sit quietly on top of it.

The visual character is:
- Quiet luxury, not flashy luxury.
- Warm, soft, tactile and residential.
- Editorial, spacious and carefully art-directed.
- Natural and believable, never synthetic or overly polished.
- Confident and minimal, with no unnecessary UI decoration.

**Visual priority order:**
1. Bedroom photography.
2. Brand identity and navigation.
3. Campaign headline.
4. Shopping calls to action.
5. Slide navigation/progress.

Do not let buttons, text panels, badges or controls compete with the bedroom image.

# 2. Full-screen layout

## 2.1 Viewport and image

- Hero fills the visible viewport: use `100svh` where supported, with `100vh` fallback.
- Minimum height on desktop: approximately `680px`; avoid clipping essential content on shorter screens.
- Image spans the full viewport width and height.
- Use `object-fit: cover` or an equivalent background-image treatment.
- Choose a deliberate `object-position` per slide so the bed and important interior details remain visible.
- The image must extend behind the header and navigation.
- No outer margins, card borders or rounded hero container.
- Avoid visible page gutters around the hero.

The image should look like a real interior photography campaign, not a product cutout or generic stock banner.

## 2.2 Layer order

Build the hero in distinct visual layers:

1. Campaign image layer.
2. Very subtle full-image tonal overlay for legibility.
3. Optional restrained bottom gradient, strongest only behind the bottom-left copy.
4. Announcement strip.
5. Transparent navigation/header.
6. Bottom-left campaign copy and CTAs.
7. Slide controls and progress indicator.

All overlay layers must remain visually subtle. Do not put the copy inside a large opaque card.

# 3. Header and navigation

The header overlays the hero image and should feel lightweight.

## 3.1 Announcement strip

- Slim strip at the very top.
- Approximate desktop height: `26–32px`.
- Warm ivory or off-white surface.
- Small, centered, letter-spaced DM Sans text.
- Keep the message concise, for example: `COMPLIMENTARY DELIVERY ON SELECT ORDERS` only if the offer is true.
- Do not use unverified delivery promises, payment partners or promotional claims.
- On mobile, shorten the message or allow a clean single-line treatment.

The strip is visually separate from the transparent navigation below it.

## 3.2 Main header

- Transparent over the campaign image.
- Center the brand wordmark horizontally near the top.
- Use the actual client logo/wordmark if supplied. Do not invent a brand name or fabricate a logo.
- Wordmark can use a refined serif treatment if consistent with the actual brand identity.
- Desktop utility links such as Account, Search and Cart sit toward the upper-right.
- Main navigation sits centered below the wordmark, as in the reference.
- Keep navigation labels small, uppercase if appropriate, with generous letter spacing.
- Use DM Sans for navigation.
- Keep controls visually quiet: no large filled buttons, pill backgrounds or oversized icons.
- Use white or warm off-white text over darker image areas. If contrast is insufficient, adjust the image overlay or text placement rather than adding a heavy navigation panel.
- Header remains above the hero image and does not occupy a separate opaque block.

Suggested desktop composition:
- Brand mark centered around the upper 8–12% of the image area.
- Utility navigation aligned upper-right.
- Main links centered beneath the logo.
- Adequate spacing so logo and navigation never collide.

Suggested navigation labels (replace with the client's actual information architecture):
`SHOP` · `STORY` · `INFO` · `JOURNAL`

Suggested utility labels:
`ACCOUNT` · `SEARCH` · `CART (0)`

Do not add links that do not exist in the website.

## 3.3 Header behavior

- Header begins transparent.
- If the site has a sticky header after leaving the hero, transition to a calm solid Porcelain/Chalk surface with dark text.
- Do not abruptly switch colors while the hero is still visible.
- Keep the transition subtle, around `250–350ms`.
- Do not shrink the logo dramatically.

# 4. Bottom-left campaign content

This placement is fixed for all three slides.

## 4.1 Position

- Align content to the left.
- Desktop left inset: approximately `4.2–4.8vw`, with a sensible max-width container.
- Position content in the lower-left portion of the image, above the bottom edge with comfortable breathing room.
- Content should not sit directly on the browser edge.
- Keep the text block compact; do not stretch it across the entire viewport.
- Ensure the copy does not cover the main bed or key product details.

## 4.2 Copy hierarchy

Each slide contains:

1. Small uppercase eyebrow line.
2. Main campaign headline.
3. One or two CTA buttons.

Eyebrow:
- DM Sans.
- Approximately `10–12px` desktop.
- Uppercase with generous letter spacing.
- Short, factual and understated.

Headline:
- Cormorant Garamond.
- Regular weight; optional restrained italic only if it suits the brand.
- Approximately `clamp(2.1rem, 3.1vw, 3.5rem)`.
- Tight but comfortable line height.
- Maximum width approximately `520–620px`.
- Use deliberate line breaks.
- Warm white or Chalk, depending on image contrast.

Supporting paragraph is optional. If used, keep it to one short sentence and do not let it make the hero feel crowded.

## 4.3 CTA buttons

- Two buttons on desktop where the content and width allow.
- First CTA: primary, warm white/ivory background with dark text.
- Second CTA: secondary, either transparent with a subtle light border or a second light surface, depending on contrast.
- Rectangular or very lightly rounded corners; no pill buttons.
- DM Sans, small uppercase text and restrained letter spacing.
- Approximate height: `44–50px`.
- Comfortable horizontal padding.
- Clear hover state: subtle background/text transition, no bounce.
- Buttons must link to real collection/product destinations.
- Stack or wrap buttons on small screens without crowding.

Do not invent destinations. If a collection URL is not available, use an existing valid shop destination and report the mapping.

# 5. Three-slide campaign plan

Implement exactly three slides. Each slide uses its own image, eyebrow, headline and CTA labels/destinations. The header and slide controls remain consistent.

Use these as creative copy directions only. Replace them with approved client wording where available.

## Slide 01 — The signature bedroom

**Purpose:** Establish the brand's visual identity and make the first impression memorable.

Photography:
- Wide, beautifully styled bedroom.
- Large bed as the central visual anchor.
- Natural linen or cotton bedding in warm ivory, oat or soft stone.
- Soft daylight and realistic shadows.
- Calm architectural background: plaster walls, wood, linen curtains or understated furniture.
- Avoid busy decor and distracting props.
- Leave readable negative space in the lower-left area.

Copy direction:
- Eyebrow: `THOUGHTFULLY MADE FOR EVERYDAY COMFORT`
- Headline: `Ridiculously comfortable bedding.`
- Primary CTA: `SHOP BEDDING`
- Secondary CTA: `EXPLORE THE COLLECTION`

## Slide 02 — Texture and material

**Purpose:** Make the quality and tactile nature of the bedding desirable.

Photography:
- A different bedroom scene or a carefully composed close-up with bedding clearly identifiable.
- Visible natural fabric folds, stitching, drape and surface texture.
- Warm sunlight, subtle shadow and tactile detail.
- Keep the image sophisticated and believable.
- Maintain enough negative space for the bottom-left copy.

Copy direction:
- Eyebrow: `MADE FOR THE WAY YOU WIND DOWN`
- Headline: `A softer kind of everyday.`
- Primary CTA: `DISCOVER OUR BED LINEN`
- Secondary CTA: `EXPLORE THE DETAILS`

Only mention material, weave or construction claims that the client has verified.

## Slide 03 — The slow morning

**Purpose:** Create an emotional lifestyle moment and complete the campaign sequence.

Photography:
- A serene, naturally lit bedroom.
- Soft morning light across layered bedding.
- Relaxed, lived-in styling without looking messy.
- Natural materials and a warm, muted palette.
- Use a different composition from slides 01 and 02.

Copy direction:
- Eyebrow: `MAKE SPACE FOR SLOWER MORNINGS`
- Headline: `Come home to comfort.`
- Primary CTA: `SHOP THE BEDROOM`
- Secondary CTA: `VIEW ALL BEDDING`

Only use these CTA destinations if matching pages exist.

## Slide consistency

- Keep the same text placement, header, button styling and navigation controls across all slides.
- Each slide can have its own image crop and subtle overlay adjustment.
- Copy may vary in length, but typography and alignment must remain consistent.
- Do not change the entire layout between slides.
- All three images should share a coherent color grade.

# 6. Cinematic slide transition — exact behavior

This is a core requirement. A simple crossfade is not sufficient.

## 6.1 Forward transition

When the user activates Next:
1. The current image begins moving horizontally out toward the **left**.
2. The incoming image begins just outside the viewport on the **right**.
3. The incoming image travels into the viewport.
4. The outgoing image exits fully to the left.
5. Text from the incoming slide enters with a small horizontal offset and a slight delay.
6. The slide counter/progress updates in sync with the transition.

The movement must be clearly visible but elegant. Do not make the image move so quickly that it feels like a basic slideshow.

## 6.2 Backward transition

When the user activates Previous:
1. The current image exits toward the **right**.
2. The previous image enters from the **left**.
3. Text follows with the corresponding reverse direction.
4. The progress indicator updates.

## 6.3 Timing and easing

Recommended starting values:
- Image movement: `800ms`.
- Text movement and opacity: `450–550ms`.
- Text delay: `100–160ms`.
- Button reveal: `100–150ms` after the headline.
- Easing: a smooth ease-in-out curve, for example `cubic-bezier(0.22, 1, 0.36, 1)` for settling movement.

Use a restrained opacity change alongside movement. Avoid overshoot, elastic bounce, 3D rotation, page flips or zoom bursts.

## 6.4 Image loading and transition stability

- Preload the next slide image where practical.
- Do not begin a transition until the incoming image is ready.
- Use appropriately sized responsive images.
- Prevent layout shifts.
- Keep the outgoing image visible until the incoming image is ready.
- Do not show blank frames or flash a background color between slides.
- Use a stable slide state so repeated clicks cannot corrupt the animation.
- Decide whether to queue or ignore repeated navigation during an active transition; do not allow overlapping transitions.

## 6.5 Controls

- Previous and Next controls must work.
- Controls should be visually subtle and placed near the lower-right or lower-center edge, away from the CTA copy.
- Use clear accessible labels such as `Previous slide` and `Next slide`.
- Add a small counter such as `01 / 03`.
- Add a thin progress line or three minimal indicators.
- Active indicator must be visibly distinguishable.
- Controls must be keyboard accessible.
- Touch users must be able to swipe horizontally.
- Swipe must not make vertical page scrolling difficult.
- Do not use large circular floating controls or prominent colored buttons.

## 6.6 Autoplay

Autoplay is optional, not mandatory.

If implemented:
- Wait approximately 6–7 seconds between slides.
- Pause on pointer hover, keyboard focus and user interaction.
- Stop or pause when the browser tab is hidden.
- Do not restart unexpectedly after a user manually changes slides.
- Do not autoplay when reduced motion is requested.
- Make it possible to navigate manually at all times.

A manual-only carousel is preferable to intrusive autoplay.

# 7. Entrance animation on initial page load

The first view should feel composed, not like every element is flying in.

Recommended sequence:
1. Hero image is visible immediately or reveals with a very subtle scale settle (`1.025` to `1.0`) over approximately `1000–1400ms`.
2. Announcement strip and header remain stable and readable.
3. Eyebrow appears with a short opacity/vertical reveal.
4. Headline rises gently by approximately `16–22px`.
5. CTA buttons appear with a small stagger.

Keep the total entrance sequence around one second. Do not delay the availability of navigation or shopping links. Avoid a loading screen unless technically necessary.

# 8. Responsive behavior

## Desktop — 1200px and above
- Full-viewport hero.
- Centered wordmark and navigation.
- Utility links upper-right.
- Bottom-left text block.
- Two horizontal CTA buttons.
- Slide controls near bottom-right.

## Tablet — 768px to 1199px
- Maintain the full-bleed image.
- Reduce header spacing and headline size.
- Ensure logo and utility links do not collide.
- Reposition image crop to keep the bed visible.
- Keep CTA buttons side by side if space allows; otherwise wrap cleanly.
- Keep slide controls away from copy.

## Mobile — below 768px
- Continue using a full-screen or near-full-screen campaign image.
- Use a separate mobile image crop where available; do not simply center-crop the desktop image.
- Simplify header: menu control, centered compact wordmark and cart/search as space allows.
- Do not force desktop navigation onto mobile.
- Keep bottom-left copy, but respect safe-area insets.
- Use a shorter headline and smaller type.
- Stack CTAs or use one primary CTA and a quiet text link.
- Ensure controls remain tappable and do not overlap CTA buttons.
- Keep swipe navigation functional.
- Consider reducing movement distance and duration slightly.
- Avoid parallax on mobile if it harms performance or usability.

Test at widths of 360px, 390px, 430px, 768px, 1024px, 1440px and 1920px.

# 9. Accessibility and usability

- Maintain sufficient text contrast over every slide image.
- Use a subtle gradient or overlay only as needed.
- Provide visible keyboard focus states.
- Use semantic buttons for slide controls.
- Use meaningful accessible names.
- Do not rely on color alone to indicate the active slide.
- Respect `prefers-reduced-motion`.
- In reduced-motion mode, disable large horizontal movement and use a static image or brief crossfade.
- Ensure CTA buttons remain usable throughout transitions.
- Avoid automatically moving content when reduced motion is enabled.

# 10. Technical implementation guidance for Antigravity

You are Gemini 3.8 Flash High working inside an existing project.

Before coding:
1. Inspect the current framework, routing and component structure.
2. Identify the existing hero component and its image assets.
3. Inspect the installed animation library and version.
4. Reuse the project's current animation solution if suitable.
5. Do not install another animation library without a clear reason.
6. Preserve working navigation, cart and existing shop functionality.

Implementation expectations:
- Build the hero as a reusable component with structured slide data.
- Keep each slide's image, alt text, eyebrow, headline, CTA labels and destinations together.
- Keep responsive image sources/crops separate where needed.
- Use stable keys and predictable transition direction state.
- Avoid unnecessary re-renders.
- Ensure slide controls are functional, not decorative.
- Do not use arbitrary external image URLs that may break.
- Use the client's licensed/approved photography wherever possible.
- If images are not supplied, identify the exact photography needed rather than pretending temporary imagery is final.

Do not rewrite unrelated pages or backend functionality as part of this hero task.

# 11. Browser verification checklist

Do not claim completion until the actual rendered page has been inspected.

- [ ] Hero occupies the full viewport without unintended margins.
- [ ] Image fills the viewport without distortion.
- [ ] Main bed remains visible at desktop and mobile breakpoints.
- [ ] Announcement strip is slim and legible.
- [ ] Brand logo is centered.
- [ ] Navigation overlays the image transparently.
- [ ] Utility links are aligned and readable.
- [ ] Headline and CTAs sit at the bottom-left.
- [ ] No large opaque text card appears.
- [ ] Exactly three campaign slides exist.
- [ ] Next moves the outgoing image left and incoming image in from the right.
- [ ] Previous reverses the direction.
- [ ] Text transitions are subtle and synchronized.
- [ ] Counter/progress reflects the active slide.
- [ ] Touch swipe works on mobile.
- [ ] Controls work with keyboard.
- [ ] No blank frame or image-loading flash appears.
- [ ] Text contrast is sufficient on all three images.
- [ ] Reduced-motion behavior works.
- [ ] Header does not overlap or collide at smaller widths.
- [ ] Existing links and shopping functionality remain intact.

After implementation, provide desktop and mobile screenshots and report any missing client assets or unfinished details.

---

# FINAL INSTRUCTION

Implement the hero exactly as specified: **Quiet Luxury, full-screen, cinematic, bottom-left campaign copy and exactly three slides.**

The visual should closely follow the supplied reference's composition: a full-bleed, beautifully photographed bedroom; a slim announcement bar; transparent overlaid navigation; centered wordmark; and understated bottom-left headline with two refined shopping CTAs.

The animation must be a real directional horizontal transition. On Next, the current bedroom image moves left and the next image enters from the right. On Previous, the direction reverses. Add restrained text entrance motion and minimal slide progress controls.

Do not redesign this into a split layout, card-based banner, standard product grid, or generic carousel. Do not add unrelated interactive features. Preserve existing project functionality and verify the finished result in the browser at desktop and mobile sizes.
