# Apple Intelligence source review

Source page: `https://www.apple.com/in/apple-intelligence/`

## Source observations

| Route / viewport | Position or trigger | Expected result | Observed result | Evidence |
| --- | --- | --- | --- | --- |
| `/` desktop 1280×1800 | Initial page | Apple navigation, sticky product links, hero, gallery | All present. Hero artwork is an arranged multi-device collage. | `screenshots/source-desktop-top.png` |
| `/` phone 390×844 | Initial page | Mobile header, horizontal product links, centered hero | All present; product links scroll horizontally. | `screenshots/source-phone-top.png` |
| `/` desktop 1280×1800 | Hover Mac in global navigation | Three-column Mac flyout with product and support links | Flyout expanded; measured height 552 px during capture. | `source-desktop-mac-menu.html`; `screenshots/source-desktop-mac-menu.png` |
| `/` phone 390×844 | Tap Main menu | Full-screen list from Store through Support and close control | Full-screen category list. | `source-phone-menu.html`; `screenshots/source-phone-menu.png` |
| `/` desktop 1280×1800 | Select Siri AI from What’s New links | Move to the Siri AI highlight/card area | URL retained on source route and target section was present. | `source-capture.json` |
| `/` desktop 1280×1800 | Click Next in Siri AI gallery | Advance one feature card | Current card advanced to “Siri understands your personal context.” | `../source-controls.txt` |
| `/` desktop 1280×1800 | Scroll to Siri highlight media; play | Video advances; pause stops it | 5.47-second video loaded and advanced while playing. | `../control-pass-updated.txt` |
| `/` desktop 1280×1800 | Tap iPad product tab | Replace iPhone product group with iPad models | Tab receives click, but source content remained on iPhone; behavior did not pass. | `../source-controls.txt` |
| `/` desktop/phone | Scroll through main sections | Reveal all sections and end content | Sections from Siri through developer capabilities present in source. | `screenshots/source-desktop-section-*.png`; `screenshots/source-phone-section-*.png` |

## Preview verification

The app is open to the public preview URL, so visual verification is possible without signing in. Preview screenshots and interaction outcomes are added after the import build.

## Assets

Source image files and the short Siri animation are stored under `public/site-assets/apple-intelligence/`. The original-to-local image and video paths are mapped in `assets.json`. All 62 unique source image URLs were retrieved; two different Apple images shared the filename `visual_intelligence__f0ybhtxs0pea_large.jpg`, so the second image uses `visual_intelligence_gallery__f0ybhtxs0pea_large.jpg` locally.
## Preview review update

Not yet completed. The capture service did not import the page automatically; the manual page and local artwork have been added, and preview checks are pending the next generated build state.
