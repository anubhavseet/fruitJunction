# Design Specification: FruitJunction x Freshly Fruits Hybrid

## Overview
This document outlines the design changes implemented to align FruitJunction's product presentation with the minimalist aesthetic of Freshly Fruits, while maintaining the unique brand identity of FruitJunction.

## UI Comparison: Side-by-Side

| Feature | Freshly Fruits (Inspiration) | FruitJunction (New Hybrid) |
| :--- | :--- | :--- |
| **Card Layout** | 4-column grid (Desktop), 1-column (Mobile) | 4-column grid, responsive collapse (3-col @1200px, 2-col @992px, 1-col @689px) |
| **Shadows** | Subtle, clean: `0 4px 12px rgba(0,0,0,0.08)` | Minimalist: `0 4px 12px rgba(0,0,0,0.05)` (Idle), `0 12px 30px rgba(0,0,0,0.1)` (Hover) |
| **Borders** | Clean or `1px dashed` (Blog) | `1px solid rgba(0, 0, 0, 0.08)` for definition |
| **Corners** | Rounded (approx. 8px) | Rounded (12px) for a slightly softer feel |
| **Typography** | Open Sans, Roboto | Open Sans (System default fallback) |
| **Alignment** | Left-aligned product info | **Left-aligned** (shifted from centered) |
| **Price Tags** | Sale price highlighted, original strikethrough | **FruitJunction Secondary (#fcb424)** for price highlighting |
| **CTA Button** | Minimalist rounded rectangle | **FruitJunction Dark (#0a0500)** background, primary hover |

## Implementation Details

### 1. Data Synchronization
- **Source:** Real-time data extracted from `freshlyfruits.in` listings.
- **Fields Mapping:**
    - `Product Name` -> `name`
    - `Sale Price` & `Regular Price` -> `salePrice`, `originalPrice`
    - `Unit/Weight` (e.g., 300g) -> `unit` (Extracted from descriptions/titles)
    - `Stock Status` -> `inStock` (Mapped from site availability)

### 2. Component Enhancements (`ProductCard.jsx`)
- Added **Out of Stock** logic: Cards dim slightly, badges change, and buttons are disabled.
- **Sale Badge:** Relocated to the top-left (Freshly Fruits style) and simplified.
- **Unit Display:** Integrated units directly into the product title for clarity.

### 3. Responsive Logic
The grid now follows a more granular collapse pattern to ensure visual density across all device sizes:
- **Desktop (>=1200px):** 4 Columns
- **Large Tablet (992px - 1199px):** 3 Columns
- **Small Tablet (689px - 991px):** 2 Columns
- **Mobile (<689px):** 1 Column

## Visual Assets
*Refer to `src/components/Products.jsx` for the updated list of products and images sourced from Freshly Fruits CDN.*
