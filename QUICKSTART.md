# 🚀 Quick Start Guide

Get your portfolio website up and running in minutes!

## Prerequisites

- ✅ Node.js 14+ (download from https://nodejs.org)
- ✅ npm (comes with Node.js)
- ✅ MongoDB (local or MongoDB Atlas cloud)

## Option 1: Fast Setup (MongoDB Atlas - Recommended)

### Step 1: Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
CLIENT_URL=http://localhost:3000
```

**Get MongoDB Atlas Connection String:**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Click "Connect" → "Connect your application"
5. Copy connection string and add your password/username

### Step 2: Setup Frontend

```bash
cd ../frontend
npm install
```

Create `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Step 3: Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

✨ Visit http://localhost:3000

---

## Option 2: Local MongoDB Setup

### Install MongoDB Community Edition

**Windows:**
1. Download from https://www.mongodb.com/try/download/community
2. Run installer and follow instructions
3. MongoDB runs as a service automatically

**macOS (Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu):**
```bash
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

### Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
```

### Setup Frontend & Run

Same as Option 1, Steps 2-3 above.

---

## Customize Your Portfolio

### 1. Update Basic Information

**File:** `frontend/src/components/About.jsx`

Change these lines:
```jsx
<h3 className="text-4xl font-bold text-gray-900 mb-2">John Doe</h3>
<p className="text-2xl text-blue-500 font-semibold mb-4">Full Stack Developer</p>
```

### 2. Add Your Experience

**File:** `frontend/src/components/Journey.jsx`

Update the `experience` array:
```jsx
const experience = [
  {
    title: 'Your Job Title',
    company: 'Your Company',
    duration: '2023-2024',
    responsibilities: 'Your responsibilities here',
  },
];
```

### 3. Add Your Projects

**File:** `frontend/src/components/Projects.jsx`

Update the `projects` array:
```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    techStack: ['React', 'Node.js'],
    image: '🎨',
    github: 'https://github.com/yourrepo',
    demo: 'https://yourproject.com',
  },
];
```

### 4. Update Skills

**File:** `frontend/src/components/Skills.jsx`

Modify the skill levels (0-100):
```jsx
{ name: 'React.js', level: 90 },
```

### 5. Add Social Media Links

**File:** `frontend/src/components/Footer.jsx`

Update URLs in `socialLinks` array:
```jsx
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
];
```

---

## Project File Structure Overview

```
portfolio/
├── frontend/                    # React app
│   ├── src/
│   │   ├── components/         # UI components
│   │   ├── pages/              # Page components
│   │   ├── App.jsx             # Main app
│   │   └── index.css           # Global styles
│   └── package.json
│
├── backend/                     # Express server
│   ├── models/Contact.js        # Database schema
│   ├── routes/contact.js        # API routes
│   ├── server.js                # Main server
│   └── package.json
│
└── README.md                    # Full documentation
```

---

## Testing the Contact Form

1. Fill out the contact form on the website
2. Submit the form
3. Check your MongoDB database to verify the message was saved

**Backend Database Query:** (In MongoDB Compass or Atlas)
```
Database: portfolio
Collection: contacts
```

---

## Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is in use
# Windows: Change port in .env
PORT=5001

# Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

### Frontend showing "API Connection Error"
```bash
# Make sure:
# 1. Backend is running (http://localhost:5000/api/health)
# 2. REACT_APP_API_URL in .env matches backend URL
# 3. Restart frontend: Ctrl+C and npm start again
```

### MongoDB Connection Error
```bash
# Check MongoDB is running
# macOS: brew services start mongodb-community
# Windows: Check Services → MongoDB
# Atlas: Verify connection string in .env
```

### Node modules issues
```bash
# Clean install
rm -rf node_modules
npm install
```

---

## Next Steps

### 1. Deploy Frontend (Free Options)

**Vercel (Recommended):**
```bash
npm i -g vercel
cd frontend
vercel
```

**Netlify:**
1. Build: `npm run build`
2. Visit netlify.com
3. Drag & drop `dist` folder

### 2. Deploy Backend

**Railway.app** (Simple, free tier)
1. Connect GitHub
2. Select backend folder
3. Add MongoDB Atlas URI in environment variables
4. Deploy!

**Heroku:**
```bash
heroku login
cd backend
heroku create your-app-name
git push heroku main
```

### 3. Connect Frontend to Deployed Backend

Update `frontend/.env`:
```
REACT_APP_API_URL=https://your-backend-domain.com/api
```

---

## Performance Tips

- ✅ Use Tailwind CSS for fast styling (no extra CSS files)
- ✅ React Router for fast page transitions
- ✅ MongoDB indexes for quick queries
- ✅ Minify and compress images
- ✅ Use CDN for assets

---

## Support & Help

- 📖 Check [README.md](README.md) for full documentation
- 📖 Check [frontend/README.md](frontend/README.md) for frontend details
- 📖 Check [backend/README.md](backend/README.md) for backend details

---

## File Checklist

Before deploying, ensure you have:
- ✅ Updated personal information in About section
- ✅ Added at least 3 projects
- ✅ Updated education and experience
- ✅ Added social media links
- ✅ Updated contact information
- ✅ Tested contact form submission
- ✅ Set correct API URLs for production

---

## Common Customizations

| Task | File | What to Change |
|------|------|---------|
| Change name | `About.jsx` | "John Doe" → Your name |
| Change profession | `About.jsx` | "Full Stack Developer" → Your title |
| Add project | `Projects.jsx` | Add to projects array |
| Change colors | `tailwind.config.js` | Color hex values |
| Add skill | `Skills.jsx` | Add to skills array |
| Update social links | `Footer.jsx` | Update URLs in socialLinks |
| Change header text | `Header.jsx` | Update navItems array |

---

## Ready to Deploy?

Once you're happy with your portfolio:

1. **Test Locally:** ✅ All sections load, form works, responsive on mobile
2. **Build Frontend:** `cd frontend && npm run build`
3. **Deploy:** Upload to Vercel, Netlify, or your hosting
4. **Deploy Backend:** Upload to Railway, Heroku, or your server
5. **Update URLs:** Ensure frontend points to deployed backend

**Congratulations! 🎉 Your portfolio is live!**

---

*For more details, see [README.md](README.md)*
