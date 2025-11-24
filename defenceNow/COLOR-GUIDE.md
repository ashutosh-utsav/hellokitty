# Defence Wings - Color Guide

## Central Color Management

All colors for this website are controlled in **ONE FILE**: `tailwind.config.js`

This means you can change the entire website's color scheme by editing just this one file!

## Current Color Palette

### Primary Blue (DEFENCE Color - Exact from Logo)
**Exact color from "DEFENCE" text in your logo: `#013D8D`**

```javascript
primary: {
  50: '#e6f0f9',   // Lightest - backgrounds
  100: '#cce1f3',
  200: '#99c3e7',
  300: '#66a5db',
  400: '#3387cf',
  500: '#013D8D',  // ⭐ EXACT COLOUR FROM LOGO - "DEFENCE" blue
  600: '#01357d',  // Hover states, darker accents
  700: '#012d6e',
  800: '#01255e',
  900: '#011d4f',  // Darkest
}
```

### Navy (WINGS Color - Exact from Logo)
**Exact color from "WINGS" text in your logo: `#021E42`**

```javascript
navy: {
  50: '#e6e9ed',   // Lightest
  100: '#ccd3db',
  200: '#99a7b7',
  300: '#667b93',
  400: '#334f6f',
  500: '#02274b',
  600: '#021E42',  // ⭐ EXACT COLOUR FROM LOGO - "WINGS" navy
  700: '#021939',
  800: '#021430',
  900: '#020f27',  // Darkest
}
```

### Accent Color (Optional - Currently Warm Orange)
```javascript
accent: {
  500: '#e67e00',  // Warm accent color
  // Can be changed to any color you prefer
}
```

## How to Change Colors

### To change the ENTIRE website color scheme:

1. Open `tailwind.config.js`
2. Find the `colors` section in the `theme.extend` object
3. Modify the hex color values
4. Save the file
5. Restart your dev server (`npm run dev`)

### Example: Change Primary Blue to Green

```javascript
primary: {
  500: '#00ff66',  // Change from blue to green
  600: '#00cc52',  // Adjust hover state
  // ... adjust other shades accordingly
}
```

## Where Colors Are Used

- **primary-500**: Logo "Defence" text, main brand elements
- **primary-600**: Buttons, badges, hover states, links
- **primary-50**: Light backgrounds for hover effects
- **navy-900**: "Wings" logo text, headings, body text
- **navy-800**: Secondary text
- **gray shades**: Neutral elements, borders, subtle backgrounds

## Footer Colors (Kept Light)
The footer uses light gray tones as requested:
- Background: `bg-gradient-to-br from-gray-50 to-gray-100`
- Text: `text-gray-600`
- This was NOT changed to maintain the clean, light appearance

## Best Practices

1. **Always use the defined color names** (primary, navy, accent) instead of arbitrary colors
2. **Test on different screens** after changing colors
3. **Maintain contrast** for accessibility (text should be readable)
4. **Keep consistency** - primary-600 is used for all main action buttons

## Quick Reference

| Element | Color Class | Purpose |
|---------|------------|---------|
| Logo Image | `<img src="/defence-wings-logo.png" />` | Brand identity - uses exact logo colors |
| Logo "Defence" (fallback) | `#013D8D` | Exact blue from logo |
| Logo "Wings" (fallback) | `#021E42` | Exact navy from logo |
| Top Bar | `bg-navy-600` (#021E42) | Header background |
| Main Buttons | `bg-primary-500` | Call-to-action |
| Links Hover | `hover:text-primary-600` | Interactive elements |
| Article Badges | `bg-primary-500 text-white` | Category labels |
| Body Text | `text-navy-600` to `navy-900` | Readability |

## Need to Revert to Gold?

If you want to go back to the yellow/gold scheme:
1. Open `tailwind.config.js`
2. Change `primary` colors back to gold/yellow tones
3. Or simply rename `primary` to `gold` throughout the config

---

**Remember**: One file controls everything! 🎨
