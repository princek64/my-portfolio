# AI decisions

Decisions in this file are already made. Follow them when the task touches the same area. Do not ask first.

## Phone screenshots in case studies

Mobile case-study images must be the device only. No matte, padding, coloured canvas, or border outside the phone bezel.

Screenshots exported from a browser device frame or a design tool usually include a flat background around the phone. The shots cleaned in October 2026 used a solid `#2C2C2C` (`rgb(44, 44, 44)`) canvas, with the iPhone bezel and side buttons inside it. That canvas showed up in the portfolio as extra space and a second colour around the phone. `PhoneFrame` used to add another rounded border and padding on top of that. Both are wrong. The bezel is the frame.

When you add or replace a project image that is a phone screenshot, clean it before it is committed. Do this for every new mobile shot, including replacements of existing ones.

1. Open the PNG and read the corner colour. That is the matte.
2. Flood-fill from every edge. A pixel is matte when it is still connected to the edge and its L1 distance from the corner colour is 28 or less (`|r| + |g| + |b|`).
3. Make the matte fully transparent.
4. Feather only the one-pixel fringe where the bezel meets the matte, so the edge anti-aliases onto the page instead of leaving a hard step. Do not eat into the bezel highlight.
5. Trim to the bounding box of pixels that are still visible. Keep the side buttons. Do not crop inside the bezel, and do not remove browser chrome that sits inside the phone screen.
6. Save a PNG with an alpha channel. Current cleaned shots are 802×1626. If a new export crops to a different size, use that size.
7. Check the result on white and on `#121212`. Corners must show the page background. There must be no gray rectangle and no extra outline.

Then wire it up without a second frame:

- Ichie and GetSociable use `PhoneFrame`. It renders the image only: `h-auto w-full max-w-[280px]`, no border and no padding. Pass `width` and `height` that match the cropped file. The defaults are 802 and 1626.
- Community Christmas mobile shots use `CaseStudyImage` with `plain`, so they also have no border. Set `width` and `height` to the cropped size.
- Do not add `rounded-*`, `border`, `p-*`, or a background behind these images. A rounded wrapper clips the bezel and brings the extra frame back.
- Desktop and web screenshots are not device frames. Do not run this crop on them.
