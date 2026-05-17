# Lab Task 1 - Responsive Landing Page Development

## 🎯 Objective
Make the Assignment 1 landing page fully responsive for mobile devices and tablets using HTML5 and Plain CSS with Media Queries.

## 📋 Task Completed

### ✅ What Was Done:
1. Created a new folder `labtask-1`
2. Added responsive viewport meta tag to HTML
3. Implemented CSS Media Queries for responsive design
4. Tested and optimized for multiple screen sizes

## 📱 Responsive Breakpoints

### Desktop View (1200px and above)
- 4-column product grid
- Full navigation bar with all links visible
- Large hero section with 3.5rem heading
- Standard padding and margins

### Tablet View (1024px - 768px)
- 3-column product grid
- Adjusted font sizes
- Reduced padding
- Navigation wraps gracefully
- Product images scaled down to 200px height

### Mobile View (768px - 480px)
- 2-column product grid (transitions to 1-column at smaller sizes)
- Navigation bar wraps with centered items
- Logo and text reduced in size
- Hero heading: 2rem
- Buttons adjust to smaller screens
- Product footer becomes vertical layout
- Reduced spacing and padding

### Small Mobile View (480px - 360px)
- Single column product grid
- All elements stack vertically
- Minimal padding and margins
- Extra small font sizes for better fit
- Full-width buttons

### Extra Small Devices (below 360px)
- Minimal styling adjustments
- Compact navigation
- Smallest text sizes for readability

## 🛠 Technical Implementation

### HTML Changes
- Added `<meta name="viewport" content="width=device-width, initial-scale=1.0">` for proper mobile scaling

### CSS Media Queries Implemented
1. **@media (max-width: 1024px)** - Tablet optimization
2. **@media (max-width: 768px)** - Mobile optimization
3. **@media (max-width: 480px)** - Small mobile devices
4. **@media (max-width: 360px)** - Extra small screens

### Key Responsive Features
- Flexible navigation layout (wraps at 768px)
- Responsive product grid (4 → 3 → 2 → 1 columns)
- Adjustable font sizes across all breakpoints
- Flexible button sizing and layout
- Responsive image heights
- Mobile-friendly spacing and padding
- Vertical product footer on mobile

## 📁 File Structure
```
labtask-1/
├── index.html          # Responsive HTML with viewport meta tag
├── styles.css          # CSS with media queries for responsive design
├── Assets/             # Product and logo images
│   ├── logo.png
│   ├── Air filter.png
│   ├── Engine Oil.png
│   ├── Head light.png
│   └── Rear light.png
└── README.md          # This file
```

## 🎨 Color Scheme
- Primary Red: #dc143c
- Dark Red: #8b0000
- Light Red: #ffebee
- Text Dark: #0f172a
- Text Muted: #64748b
- White: #ffffff
- Dark Background: #0f172a

## ✅ Responsive Design Features

### Navigation Bar
- Wraps to vertical layout on tablets (768px)
- Logo section centers on mobile
- Navigation links stack horizontally with wrapping
- Actions section responds to screen size

### Hero Section
- Responsive heading size (3.5rem → 2rem → 1.5rem)
- Responsive paragraph text
- Button adjusts to mobile size
- Padding reduces on smaller screens

### Product Grid
- Dynamic columns based on screen size
- 4 columns on desktop
- 3 columns on tablets
- 2 columns on mobile (768px-480px)
- 1 column on small mobile (below 480px)
- Adjustable gaps between cards

### Product Cards
- Image height responsive (250px → 200px)
- Text sizes adjust for readability
- Footer layout changes (flex → flex-direction: column)
- Button becomes full-width on mobile

### Footer
- Responsive padding and text size
- Center-aligned on all screen sizes

## 🧪 Testing Recommendations

### Desktop Testing (1200px+)
- Full 4-column grid
- All navigation visible
- Large hero section

### Tablet Testing (768px - 1024px)
- 2-3 column grid
- Wrapped navigation
- Medium-sized text

### Mobile Testing (360px - 768px)
- 1-2 column grid
- Stacked navigation
- Touch-friendly buttons
- Readable font sizes

### Device-Specific Testing
- iPhone (375px width)
- iPad (768px width)
- Android tablets (600px+ width)
- Desktop monitors (1200px+)

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Resize the browser window to test responsiveness
3. Use browser DevTools (F12) to test different device sizes
4. Or test on actual mobile devices by serving the file

## 📝 Technical Rules Followed

✅ HTML5 semantic markup
✅ Plain CSS only (no frameworks)
✅ Media Queries for responsive design
✅ No JavaScript required
✅ No CSS animations or transitions
✅ No inline styles (all CSS in stylesheet)
✅ Proper viewport meta tag for mobile
✅ Mobile-first responsive approach

## 🔍 Media Query Breakpoints Used

```css
/* Tablet - 1024px */
@media (max-width: 1024px) { ... }

/* Tablet/Mobile - 768px */
@media (max-width: 768px) { ... }

/* Small Mobile - 480px */
@media (max-width: 480px) { ... }

/* Extra Small - 360px */
@media (max-width: 360px) { ... }
```

## ✨ Key Improvements Over Assignment 1

1. ✅ Viewport meta tag added for proper mobile scaling
2. ✅ Responsive navigation bar that wraps on mobile
3. ✅ Dynamic product grid (4 → 3 → 2 → 1 columns)
4. ✅ Mobile-friendly typography with adjusted font sizes
5. ✅ Touch-friendly button sizes on mobile devices
6. ✅ Responsive spacing and padding
7. ✅ Flexible layout that adapts to all screen sizes
8. ✅ Four complete media query breakpoints

## 📊 Browser Compatibility

- Chrome (all versions)
- Firefox (all versions)
- Safari (all versions)
- Edge (all versions)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

---

**Created**: May 2026
**Lab Task**: Lab Task 1 - Responsive Landing Page Development
**Status**: ✅ Complete and Responsive
