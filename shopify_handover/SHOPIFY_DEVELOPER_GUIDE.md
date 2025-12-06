# Oxygen Theme - Shopify Developer Handover Guide

This package contains the design assets and specifications needed to rebuild the "Oxygen" React prototype as a Shopify Liquid theme.

## 1. Design System Overview

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Background** | `#17201b` | Main site background (Dark Green/Black) |
| **Accent/Text** | `#5ac65e` | Primary text color, icons, highlights |
| **Primary CTA** | `#f5f5dc` | "Add to Cart" buttons, key actions (Beige) |
| **Card Bg** | `#1a241f` | Subtle background for product cards/sections |
| **White** | `#ffffff` | Hero text, high contrast elements |

### Typography
*   **Headings:** `Outfit` (Google Font) - Weights: 700 (Bold), 600 (SemiBold)
*   **Body:** `DM Sans` (Google Font) - Weights: 400 (Regular), 500 (Medium)

### Iconography
*   Library: `Lucide React` (Stroke width: 2px)
*   Style: Rounded, clean, matching text color or accent.

---

## 2. Key Component Specifications

### Buttons
*   **Shape:** Fully rounded pills (`border-radius: 9999px`)
*   **Primary:** Beige background (`#f5f5dc`) with Dark Green text (`#17201b`).
*   **Hover:** White background.

### Product Cards
*   **Image Aspect Ratio:** 4:5 (Portrait)
*   **Container:** No border on the card itself, but the image container has `border-radius: 1rem`.
*   **Interaction:**
    *   Hover: Image scales up slightly (1.05x).
    *   Hover: "Add to Cart" (+) button slides up from bottom right.

### Navigation
*   **Style:** Sticky header.
*   **State:** Transparent at top, becomes blurred glassmorphism (`backdrop-filter: blur(12px)`) on scroll.

---

## 3. Included Files

*   `settings_schema.json`: A starter JSON for Shopify's theme editor settings, pre-configured with our color palette.
*   `theme.css`: Consolidated CSS variables and base styles.
*   `index.html`: A static reference of the homepage structure.

## 4. Assets
All images generated for this prototype are located in the `@assets` folder of the React project. You will need to upload these to the Shopify "Files" section.

*   Hero Image: `hero_image_of_a_modern_living_room...`
*   Product Images: `snake_plant...`, `peace_lily...`, etc.
