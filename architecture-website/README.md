# HAVATO Architecture Website

A modern, responsive website for an architecture company specializing in house design and building.

## Fixed Issues

### Image Layout Improvements
✅ **Project Images**: Fixed aspect ratio using padding-bottom technique (75% ratio) for consistent image display
✅ **About Section Image**: Added min-height and proper object-fit properties for better image rendering
✅ **Responsive Images**: Images now properly scale on all screen sizes

### Form Improvements
✅ **Form Labels**: Fixed floating label functionality using `:not(:placeholder-shown)` pseudo-class
✅ **Input Placeholders**: Added space placeholders to make labels work correctly
✅ **Select Dropdown**: Fixed label positioning for dropdown select element

### Layout Improvements
✅ **Grid System**: Changed from `auto-fill` to `auto-fit` for better responsive behavior
✅ **Mobile Navigation**: Added z-index to prevent menu overlap issues
✅ **Responsive Breakpoints**: Improved breakpoints for tablet and mobile views
✅ **Hero Section**: Added min-height and proper background sizing

## File Structure

```
architecture-website/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Features

### Sections
1. **Navigation** - Sticky navbar with smooth scroll
2. **Hero** - Full-screen banner with call-to-action
3. **Services** - 4 key services with icons
4. **Projects** - Filterable portfolio gallery
5. **About** - Company information with statistics
6. **Process** - 4-step workflow
7. **Testimonials** - Customer reviews
8. **Contact** - Contact form and details
9. **Footer** - Links, newsletter, social media

### Interactive Features
- ✨ Mobile hamburger menu
- ✨ Project filtering system (All, Villa, Townhouse, Interior, Special)
- ✨ Scroll-based navigation highlighting
- ✨ Animated statistics counters
- ✨ Form validation with floating labels
- ✨ Smooth scrolling
- ✨ Fade-in animations on scroll
- ✨ Parallax hero effect

## How to Use

### 1. Open the Website
Simply open `index.html` in your web browser:

```bash
cd /home/phucvo/workspace/repo/architecture-website
# Double-click index.html or use a local server
```

### 2. Using a Local Server (Recommended)
For better testing, use a local server:

**Python:**
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

**Node.js:**
```bash
npx http-server -p 8000
# Visit http://localhost:8000
```

**PHP:**
```bash
php -S localhost:8000
# Visit http://localhost:8000
```

## Customization

### Update Images
Replace the Unsplash placeholder URLs in `index.html` with your actual project images:

```html
<!-- Example: -->
<img src="path/to/your/image.jpg" alt="Your Project">
```

### Update Contact Information
Edit the contact details in the contact section and footer:

```html
<!-- Contact Section (line ~297) -->
<p>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
<p>0909 123 456</p>
<p>contact@havato.vn</p>
```

### Update Colors
Modify the color scheme in `styles.css` (line 9-17):

```css
:root {
    --primary-color: #2c3e50;     /* Dark blue */
    --secondary-color: #c9a961;   /* Gold */
    --accent-color: #e67e22;      /* Orange */
    --text-dark: #2c3e50;
    --text-light: #7f8c8d;
    --bg-light: #f8f9fa;
    --white: #ffffff;
}
```

### Add More Projects
Add new project cards in the projects section (line ~118):

```html
<div class="project-card" data-category="villa">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <h3>Your Project Name</h3>
            <p>Details here</p>
            <a href="#" class="btn-view">Xem Chi Tiết</a>
        </div>
    </div>
</div>
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Playfair Display, Poppins)
- SVG Icons

## Performance Optimizations

- ✅ CSS Grid for efficient layouts
- ✅ Lazy loading for images (via browser native)
- ✅ Optimized animations using transform and opacity
- ✅ Minimal JavaScript for better performance
- ✅ Mobile-first responsive design

## Contact Form Integration

The contact form is currently set up with client-side validation. To make it functional, you need to integrate it with a backend service:

### Option 1: FormSpree
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### Option 2: Google Forms
Create a Google Form and use the action URL.

### Option 3: Custom Backend
Update the form submission in `script.js` to send data to your API.

## Credits

- Design inspired by HAVATO Architecture (https://www.havato.vn/)
- Images from Unsplash (placeholder images)
- Icons: Custom SVG icons
- Fonts: Google Fonts

## License

This project is created for HAVATO Architecture Company.

---

**Last Updated**: May 8, 2026
**Version**: 1.1 (Fixed image layouts and form issues)
