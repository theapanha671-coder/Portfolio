# Project Structure Guide

## Complete Project Layout

```
portfolio/
│
├── 📄 README.md                          # Full project documentation
├── 📄 QUICKSTART.md                      # Quick setup guide
├── 📄 CONFIGURATION.md                   # Configuration details
├── 📄 package.json                       # Root package.json
├── 📄 .gitignore                         # Git ignore rules
├── 🔧 verify-setup.sh                    # Linux/Mac verification script
├── 🔧 verify-setup.bat                   # Windows verification script
│
├── 📁 frontend/                          # React Frontend
│   ├── 📄 package.json                   # Frontend dependencies
│   ├── 📄 index.html                     # HTML entry point
│   ├── 📄 vite.config.js                 # Vite configuration
│   ├── 📄 tailwind.config.js             # Tailwind CSS config
│   ├── 📄 postcss.config.js              # PostCSS config
│   ├── 📄 tsconfig.json                  # TypeScript config
│   ├── 📄 .env.example                   # Environment variables template
│   ├── 📄 .env                           # Environment variables (create from .example)
│   ├── 📄 .gitignore                     # Git ignore for frontend
│   ├── 📄 README.md                      # Frontend documentation
│   │
│   └── 📁 src/                           # Source code
│       ├── 📄 main.jsx                   # React entry point
│       ├── 📄 App.jsx                    # Main App component
│       ├── 📄 index.css                  # Global styles with Tailwind
│       │
│       ├── 📁 components/                # Reusable Components
│       │   ├── 📄 Header.jsx             # Navigation header with mobile menu
│       │   ├── 📄 Footer.jsx             # Footer with social links
│       │   ├── 📄 About.jsx              # About section with profile
│       │   ├── 📄 Journey.jsx            # Education, training, experience
│       │   ├── 📄 Achievements.jsx       # Awards and recognitions
│       │   ├── 📄 Skills.jsx             # Skills with progress bars
│       │   ├── 📄 Projects.jsx           # Project showcase cards
│       │   └── 📄 Contact.jsx            # Contact form
│       │
│       ├── 📁 pages/                     # Page Components
│       │   └── 📄 Home.jsx               # Home page combining all sections
│       │
│       └── 📁 assets/                    # Static Assets
│           ├── 📁 images/                # Image files (placeholder)
│           └── 📁 videos/                # Video files (placeholder)
│
├── 📁 backend/                           # Node.js/Express Backend
│   ├── 📄 package.json                   # Backend dependencies
│   ├── 📄 server.js                      # Express server setup
│   ├── 📄 .env.example                   # Environment variables template
│   ├── 📄 .env                           # Environment variables (create from .example)
│   ├── 📄 .gitignore                     # Git ignore for backend
│   ├── 📄 README.md                      # Backend documentation
│   │
│   ├── 📁 models/                        # Mongoose Models
│   │   └── 📄 Contact.js                 # Contact message schema
│   │
│   ├── 📁 routes/                        # API Routes
│   │   └── 📄 contact.js                 # Contact endpoints
│   │       ├── POST /api/contact         # Submit new message
│   │       ├── GET /api/contact          # Get all messages
│   │       ├── GET /api/contact/:id      # Get single message
│   │       ├── PATCH /api/contact/:id    # Mark as read
│   │       └── DELETE /api/contact/:id   # Delete message
│   │
│   └── 📁 middleware/                    # Express Middleware
│       └── 📄 validation.js              # Input validation & error handling
│           ├── validateContact()         # Validation rules
│           ├── handleValidationErrors()  # Error handler
│           ├── errorHandler()            # Global error handler
│           └── corsOptions               # CORS configuration
```

## Key Files Explained

### Frontend

#### `src/main.jsx`
React entry point that renders the App component into the DOM.

#### `src/App.jsx`
Main application component with Router setup and layout structure.

#### `src/index.css`
Global CSS with Tailwind imports and custom component classes.

#### Components
- **Header.jsx** - Sticky navigation with mobile hamburger menu
- **Footer.jsx** - Site footer with social media links
- **About.jsx** - Profile section with introduction
- **Journey.jsx** - Three-column layout: education, training, experience
- **Achievements.jsx** - Grid of achievement cards
- **Skills.jsx** - Skill categories with progress bars
- **Projects.jsx** - Project showcase cards with links
- **Contact.jsx** - Contact form with validation

### Backend

#### `server.js`
Express server setup with:
- MongoDB connection
- Middleware configuration
- Route registration
- Error handling

#### `models/Contact.js`
Mongoose schema for contact messages with:
- Field validation
- Type definitions
- Indexes for performance

#### `routes/contact.js`
RESTful API endpoints:
- Create contact message
- Retrieve contacts
- Mark as read
- Delete contact

#### `middleware/validation.js`
- Input validation using express-validator
- Error formatting
- CORS configuration

### Configuration Files

#### `tailwind.config.js`
Tailwind CSS customization:
- Custom colors
- Animation keyframes
- Plugin configuration

#### `vite.config.js`
Vite build tool configuration:
- React plugin
- Path aliases
- Dev server proxy

#### `tsconfig.json`
TypeScript configuration for IDE support.

## Component Hierarchy

```
App
├── Header
│   └── Navigation Links
├── Main
│   └── Home (Page)
│       ├── About
│       ├── Journey
│       │   ├── Education
│       │   ├── Training
│       │   └── Experience
│       ├── Achievements
│       ├── Skills
│       ├── Projects
│       └── Contact
└── Footer
    └── Social Links
```

## API Endpoint Structure

```
/api
└── /contact
    ├── GET / (list all)
    ├── POST / (create)
    ├── GET /:id (get one)
    ├── PATCH /:id/read (mark read)
    └── DELETE /:id (delete)
```

## Database Structure

### MongoDB Collections

#### contacts
```
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  isRead: Boolean,
  ip: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
```

## Folder Explanation

| Folder | Purpose |
|--------|---------|
| `frontend/src/components` | Reusable React components |
| `frontend/src/pages` | Page-level components |
| `frontend/src/assets` | Images, videos, fonts |
| `backend/models` | Mongoose schemas |
| `backend/routes` | API endpoints |
| `backend/middleware` | Express middleware |

## Import Paths

### Frontend
```jsx
// Absolute imports (configured in vite.config.js)
import Component from '@/components/Component'

// Relative imports
import Component from '../components/Component'
```

### Backend
```javascript
// ES6 module imports
import express from 'express'
import Contact from '../models/Contact.js'
```

## Adding New Sections

To add a new section to portfolio:

1. **Create Component**
   ```bash
   touch frontend/src/components/NewSection.jsx
   ```

2. **Import in Home.jsx**
   ```jsx
   import NewSection from '../components/NewSection'
   ```

3. **Add to Home**
   ```jsx
   <NewSection />
   ```

4. **Add Navigation Link** (in Header.jsx)
   ```jsx
   { label: 'New Section', to: 'new-section' }
   ```

## Adding New API Endpoints

To add new backend routes:

1. **Create Route File**
   ```bash
   touch backend/routes/newroute.js
   ```

2. **Export Router**
   ```javascript
   const router = express.Router()
   router.get('/', (req, res) => { ... })
   export default router
   ```

3. **Register in server.js**
   ```javascript
   import newRoute from './routes/newroute.js'
   app.use('/api/newroute', newRoute)
   ```

## File Size Guide

- Frontend build: ~200-300 KB (gzipped)
- Backend size: ~10 MB (with node_modules)
- MongoDB storage: ~1-10 MB (depends on messages)

## Performance Considerations

- React components use functional components with hooks
- Tailwind CSS for optimal file size
- MongoDB indexes on frequently queried fields
- CORS configured for production
- Error handling on all API routes

---

*For detailed configuration, see [CONFIGURATION.md](CONFIGURATION.md)*
