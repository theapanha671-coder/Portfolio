# Frontend Setup & Configuration

## Installation

```bash
cd frontend
npm install
```

## Environment Variables

Create `.env` file in the frontend directory:

```
VITE_API_URL=http://localhost:5000/api
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
```

## Available Scripts

### Development Mode
```bash
npm start
```
Starts the development server with hot reload at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Creates optimized production build in `dist/` folder

### Run Tests
```bash
npm test
```

## Project Structure

- `src/` - Source code
  - `components/` - Reusable React components
  - `pages/` - Page components
  - `assets/` - Images and static files
  - `App.jsx` - Main app component
  - `main.jsx` - Entry point
  - `index.css` - Global styles
- `public/` - Static files
- `package.json` - Dependencies and scripts
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite configuration

## Components

### About
Profile section with photo, name, profession, and bio.

### Journey
Three-column layout:
- Education history
- Certifications/Training
- Work experience

### Achievements
Grid of achievement cards with icons and descriptions.

### Skills
Skill categories with progress bars showing proficiency levels.

### Projects
Project showcase cards with tech stack, GitHub, and demo links.

### Contact
Contact form with validation and MongoDB integration.

### Header
Sticky navigation with mobile menu.

### Footer
Social media links and quick navigation.

## Styling with Tailwind CSS

All styling is done with Tailwind CSS utility classes. Key customizations:

- Custom colors in `tailwind.config.js`
- Custom animations (fadeIn, slideUp, etc.)
- Component classes (btn-primary, card, etc.)
- Responsive design utilities (md:, lg:, xl:)

## Adding New Pages

1. Create component in `src/pages/`
2. Import in `App.jsx`
3. Add route in Router

Example:
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## Forms & Validation

Contact form uses:
- `react-scroll` for smooth navigation
- `axios` for API calls
- Built-in HTML5 validation
- Custom error handling

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop dist folder to netlify.app
```

### GitHub Pages
Update `package.json`:
```json
"homepage": "https://username.github.io/portfolio"
```

Then:
```bash
npm run build
npm run deploy
```

## Performance Tips

- Use React DevTools to identify re-renders
- Lazy load images with `loading="lazy"`
- Split code with dynamic imports
- Use production builds for testing
- Monitor bundle size with `npm run build -- --analyze`

## Troubleshooting

**Port 3000 already in use?**
```bash
# Change port in vite.config.js or use:
PORT=3001 npm start
```

**CORS errors?**
- Check backend CORS configuration
- Verify `VITE_API_URL` matches backend URL

**Build errors?**
- Clear node_modules and reinstall
- Check Node.js version compatibility
- Review console errors for details
