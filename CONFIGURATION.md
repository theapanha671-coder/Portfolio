# Configuration Guide

Complete guide to customizing your portfolio website.

## Frontend Configuration

### 1. Tailwind CSS Colors

**File:** `frontend/tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',      // Blue - main color
      secondary: '#1F2937',    // Dark - text/backgrounds
      accent: '#10B981',       // Green - highlights
      dark: '#111827',         // Very dark
      light: '#F9FAFB',        // Very light
    },
  },
}
```

**How to change:**
1. Open `tailwind.config.js`
2. Modify hex color values
3. Colors automatically apply everywhere they're used

**Popular Color Schemes:**
```javascript
// Professional Blue
primary: '#2563EB', secondary: '#1E3A8A', accent: '#0EA5E9'

// Modern Purple
primary: '#8B5CF6', secondary: '#6D28D9', accent: '#EC4899'

// Corporate Gray
primary: '#475569', secondary: '#0F172A', accent: '#3B82F6'

// Vibrant Green
primary: '#10B981', secondary: '#065F46', accent: '#F59E0B'
```

### 2. Animations

**File:** `frontend/tailwind.config.js`

Predefined animations:
```javascript
animation: {
  fadeIn: 'fadeIn 0.5s ease-in',
  slideUp: 'slideUp 0.6s ease-out',
  slideInLeft: 'slideInLeft 0.6s ease-out',
  slideInRight: 'slideInRight 0.6s ease-out',
  bounce: 'bounce 1s infinite',
}
```

**Apply to elements:**
```jsx
<div className="animate-fadeIn">Fades in</div>
<div className="animate-slideUp">Slides up</div>
<div className="animate-slideInLeft">Slides from left</div>
```

**Add new animation:**
```javascript
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  customAnimation: {
    '0%': { ... },
    '50%': { ... },
    '100%': { ... },
  },
}
```

### 3. Typography

**Default Font:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif

**Change font in `src/index.css`:**
```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

**Heading sizes:**
- `text-4xl` - Extra large (About name)
- `text-3xl` - Large (Section titles)
- `text-2xl` - Medium (Subsection titles)
- `text-lg` - Normal
- `text-sm` - Small

### 4. Spacing

Tailwind uses 4px base unit:
- `p-4` = 1rem (16px) padding
- `m-4` = 1rem (16px) margin
- `gap-4` = 1rem (16px) gap

**Modify in components:**
```jsx
<section className="py-20 bg-white">  {/* 20 * 4px = 80px padding */}
```

### 5. Responsive Design

**Breakpoints:**
- `sm` = 640px (small devices)
- `md` = 768px (tablets)
- `lg` = 1024px (desktops)
- `xl` = 1280px (large screens)

**Example:**
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

## Component Customization

### 1. Navigation Items

**File:** `frontend/src/components/Header.jsx`

```jsx
const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Journey', to: 'journey' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];
```

**Add new item:**
```jsx
{ label: 'Blog', to: 'blog' }
```

### 2. Social Media Links

**File:** `frontend/src/components/Footer.jsx`

```jsx
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, url: 'mailto:your@email.com', label: 'Email' },
];
```

**Update URLs:**
1. Replace example URLs with your profiles
2. Icons from `react-icons` library
3. Add more social platforms as needed

**Available Icon Libraries:**
```jsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'        // Font Awesome
import { SiInstagram, SiYoutube } from 'react-icons/si'                 // Simple Icons
import { BiWorld, BiMail } from 'react-icons/bi'                        // Boxicons
```

### 3. Skills & Proficiency

**File:** `frontend/src/components/Skills.jsx`

```jsx
{ name: 'React.js', level: 90 },      // 0-100%
```

**Adjust proficiency levels:**
- 100 = Expert
- 80-90 = Advanced
- 60-80 = Intermediate
- 40-60 = Beginner
- 20-40 = Novice

### 4. Projects Display

**File:** `frontend/src/components/Projects.jsx`

**Add new project:**
```jsx
{
  id: 7,
  title: 'New Project Name',
  description: 'Detailed description of the project',
  techStack: ['React', 'Node.js', 'MongoDB'],
  image: '🚀',                    // Emoji or import image
  github: 'https://github.com/yourrepo',
  demo: 'https://project-url.com',
}
```

**Change project image:**
```jsx
// Option 1: Emoji (easy)
image: '🎨'

// Option 2: Import image
import projectImage from '@/assets/project.png'
image: projectImage  // Use <img> tag in component
```

### 5. Hero Section Colors

**File:** `frontend/src/components/About.jsx`

Change the gradient background:
```jsx
<div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full">
  {/* from-COLOR-LEVEL to-COLOR-LEVEL */}
```

**Gradient options:**
```jsx
// Blue to Purple
from-blue-400 to-purple-500

// Pink to Purple
from-pink-400 to-purple-600

// Green to Blue
from-green-400 to-blue-500

// Red to Orange
from-red-400 to-orange-500
```

## Backend Configuration

### 1. MongoDB Connection

**File:** `backend/.env`

**Local MongoDB:**
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

**MongoDB Atlas (Cloud):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

**Connection pooling settings:**
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio?retryWrites=true&w=majority&maxPoolSize=50
```

### 2. Port Configuration

**File:** `backend/.env`

```
PORT=5000  # Change port number here
```

**Why change port?**
- Port 3000 or 5000 already in use
- Running multiple services
- Production requirements

### 3. CORS Settings

**File:** `backend/middleware/validation.js`

```javascript
corsOptions: {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}
```

**For production:**
```javascript
origin: 'https://yourportfolio.com'
```

### 4. Environment Variables

**File:** `backend/.env`

```
NODE_ENV=development          # development or production
PORT=5000                     # Server port
MONGODB_URI=...               # Database connection
CLIENT_URL=http://localhost:3000  # Frontend URL
```

### 5. Database Name

**File:** `backend/server.js` (MongoDB URI)

```javascript
// Local: mongodb://localhost:27017/portfolio
//                              ↑ database name

// Atlas: mongodb+srv://.../portfolio
//                         ↑ database name
```

Change `portfolio` to your desired database name.

## Contact Form Customization

### 1. Form Fields

**File:** `frontend/src/components/Contact.jsx`

```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  // Add new field:
  phone: '',
});
```

**Add field to JSX:**
```jsx
<input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Your Phone"
/>
```

### 2. Form Validation

**File:** `backend/middleware/validation.js`

```javascript
body('phone')
  .trim()
  .notEmpty().withMessage('Phone is required')
  .isMobilePhone().withMessage('Please provide a valid phone number'),
```

### 3. Contact Info Display

**File:** `frontend/src/components/Contact.jsx`

Update contact details:
```jsx
<p className="text-gray-600">your@email.com</p>
<p className="text-gray-600">+1 (555) 123-4567</p>
<p className="text-gray-600">San Francisco, CA, USA</p>
```

### 4. Success/Error Messages

**File:** `frontend/src/components/Contact.jsx`

```javascript
// On success
setStatus({
  type: 'success',
  message: 'Custom success message'
});

// On error
setStatus({
  type: 'error',
  message: 'Custom error message'
});
```

## API Customization

### 1. Add Email Notifications

**File:** `backend/server.js`

```javascript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})
```

### 2. Rate Limiting

**Install:**
```bash
npm install express-rate-limit
```

**Use in server.js:**
```javascript
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

app.use('/api/', limiter)
```

### 3. Authentication

For admin routes, add JWT:

```bash
npm install jsonwebtoken
```

```javascript
const token = jwt.sign({ admin: true }, process.env.JWT_SECRET)
```

## Performance Optimization

### 1. Image Optimization

Convert images to WebP format and use `<picture>` tag:
```jsx
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### 2. Lazy Loading

```jsx
<img src="image.jpg" loading="lazy" alt="Description" />
```

### 3. Code Splitting

```jsx
import { lazy, Suspense } from 'react'

const Section = lazy(() => import('./components/Section'))

<Suspense fallback={<div>Loading...</div>}>
  <Section />
</Suspense>
```

## SEO Optimization

### Meta Tags

**File:** `frontend/index.html`

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, portfolio, react">
<meta property="og:title" content="Your Portfolio">
<meta property="og:description" content="Description">
<meta property="og:image" content="image-url">
```

### Structured Data

Add JSON-LD schema:
```jsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourportfolio.com",
  "jobTitle": "Your Title"
}
</script>
```

## Security

### 1. Environment Variables

Always use `.env` for sensitive data:
```javascript
// ✗ WRONG
const dbUri = 'mongodb+srv://user:pass@...'

// ✓ RIGHT
const dbUri = process.env.MONGODB_URI
```

### 2. Input Validation

Validate all user inputs on backend (already configured).

### 3. HTTPS

In production, always use HTTPS:
```javascript
// Redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`)
  else next()
})
```

## Common Customizations Checklist

- [ ] Update name and profession
- [ ] Change color scheme
- [ ] Update skills and levels
- [ ] Add/remove projects
- [ ] Update contact information
- [ ] Customize social media links
- [ ] Change animations and transitions
- [ ] Update meta tags for SEO
- [ ] Configure MongoDB connection
- [ ] Test contact form submission

---

*See [README.md](README.md) for full documentation*
