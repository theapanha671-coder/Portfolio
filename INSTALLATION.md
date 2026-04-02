# Installation & Setup Steps

**Step-by-step guide to get your portfolio running in minutes**

---

## ⏱️ Estimated Time: 15 minutes

### Prerequisites (2 min)
- [ ] Node.js 14+ installed (https://nodejs.org)
- [ ] MongoDB or MongoDB Atlas account

---

## Step 1️⃣ Install Backend Dependencies (2 min)

```bash
cd backend
npm install
```

**What it does:** Downloads ~100+ packages for Express, MongoDB, validation, etc.
**Expected:** See "npm notice" messages, may take 1-2 minutes

---

## Step 2️⃣ Setup Backend Environment (1 min)

### Copy template file:
```bash
cp .env.example .env
```

### Edit `backend/.env`:

**Option A: Local MongoDB**
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
```

**Option B: MongoDB Atlas (Cloud)**
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
CLIENT_URL=http://localhost:3000
```

**To get MongoDB Atlas URI:**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Click "Connect"
5. Choose "Connect your application"
6. Copy connection string
7. Replace `<username>` and `<password>`
8. Replace `<database_name>` with `portfolio`

---

## Step 3️⃣ Test Backend (1 min)

```bash
npm run dev
```

**Expected output:**
```
╔══════════════════════════════════════╗
║  🚀 Portfolio Backend Server Running  ║
║  Port: 5000                          ║
║  Environment: development            ║
╚══════════════════════════════════════╝
```

**Verify it's working:**
- Open browser: http://localhost:5000/api/health
- Should see: `{"success":true,"message":"Server is running"...}`

✅ Backend is working! Keep this terminal open.

**Go to Step 4 in new terminal window →**

---

## Step 4️⃣ Install Frontend Dependencies (2 min)

**Open NEW terminal window** (keep backend running)

```bash
cd frontend
npm install
```

---

## Step 5️⃣ Setup Frontend Environment (1 min)

### Copy template file:
```bash
cp .env.example .env
```

### The file contains:
```
REACT_APP_API_URL=http://localhost:5000/api
```

✅ This is already correct for local development, no changes needed!

---

## Step 6️⃣ Start Frontend (1 min)

```bash
npm start
```

**Expected:**
- React dev server starts
- Browser opens automatically to http://localhost:3000
- You see your portfolio website!
- No console errors

✅ Frontend is running!

---

## Step 7️⃣ Test Everything (2 min)

### Checklist:
- [ ] Can see portfolio sections (About, Journey, Skills, Projects)
- [ ] Navigation scrolls to different sections
- [ ] Website looks good on phone (open DevTools, click mobile icon)
- [ ] Contact form appears at bottom
- [ ] Fill out contact form and submit

### Test Contact Form:
1. Scroll to "Get In Touch" section
2. Fill in: Name, Email, Subject, Message
3. Click "Send Message"
4. Should see green success message
5. Check MongoDB to verify message saved

---

## 🎨 Customize Your Info

Now that it's running, customize with YOUR information:

### 1. Your Profile (About Section)
**File:** `frontend/src/components/About.jsx`

Find and replace:
```jsx
// CHANGE THIS:
<h3 className="text-4xl font-bold text-gray-900 mb-2">John Doe</h3>
<p className="text-2xl text-blue-500 font-semibold mb-4">Full Stack Developer</p>

// TO THIS:
<h3 className="text-4xl font-bold text-gray-900 mb-2">Your Name</h3>
<p className="text-2xl text-blue-500 font-semibold mb-4">Your Title</p>
```

### 2. Your Experience
**File:** `frontend/src/components/Journey.jsx`

Update arrays:
```jsx
const education = [
  { school: 'Your School', degree: 'Your Degree', field: 'Your Field', year: '2024' }
]

const experience = [
  { title: 'Your Job', company: 'Your Company', duration: '2024', responsibilities: 'Your work' }
]
```

### 3. Your Skills
**File:** `frontend/src/components/Skills.jsx`

```jsx
{ name: 'Your Skill', level: 85 }  // 0-100
```

### 4. Your Projects
**File:** `frontend/src/components/Projects.jsx`

```jsx
{
  id: 1,
  title: 'Your Project',
  description: 'What it does',
  techStack: ['React', 'Node.js'],
  image: '🎨',
  github: 'https://github.com/yourrepo',
  demo: 'https://demo.com'
}
```

### 5. Social Links
**File:** `frontend/src/components/Footer.jsx`

```jsx
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/YOUR_PROFILE', label: 'LinkedIn' },
]
```

### 6. Colors (Optional)
**File:** `frontend/tailwind.config.js`

```javascript
colors: {
  primary: '#3B82F6',      // Change to your brand color
  secondary: '#1F2937',
  accent: '#10B981',
}
```

---

## 🔄 After Making Changes

Frontend automatically reloads! Just:
1. Edit file
2. Save (Ctrl+S)
3. Check browser - changes appear immediately

---

## 📱 Test Responsiveness

1. Open your portfolio
2. Press `F12` (opens DevTools)
3. Click phone icon at top left
4. Select different devices to test
5. Check everything looks good

---

## 🧪 Verify Contact Form Works

### Locally (with your MongoDB):

1. Submit contact form
2. MongoDB: Check `portfolio.contacts` collection
3. See your message saved!

---

## ✅ Installation Complete!

Your portfolio is now:
- ✅ Running locally
- ✅ Ready for customization
- ✅ Tested and working
- ✅ Ready to fill with your data

---

## 🚀 Next Steps

### Option A: Continue Customizing
- [ ] Update all your information
- [ ] Add more projects
- [ ] Customize colors
- [ ] Create perfect bio

### Option B: Deploy to Production
- See **[DEPLOYMENT.md](DEPLOYMENT.md)**
- Frontend → Vercel (5 min)
- Backend → Railway (5 min)
- Database → MongoDB Atlas (already setup)

### Option C: More Advanced
- Add more sections
- Add image gallery
- Add blog
- Add authentication

---

## 🆘 Troubleshooting

### "Cannot GET /api/health"
```
→ Backend not running
→ Run: npm run dev in backend/ terminal
```

### "Error: connect ECONNREFUSED"
```
→ Backend not accessible
→ Check PORT in backend/.env (should be 5000)
→ Check http://localhost:5000/api/health
```

### "CORS error" on contact form
```
→ Backend CORS not configured correctly
→ Check backend/.env CLIENT_URL matches frontend URL
→ Restart backend server
```

### Contact form success but no DB save
```
→ MongoDB not connected
→ Check MONGODB_URI in backend/.env
→ Check MongoDB is running (if local)
→ Check IP whitelisted (if using Atlas)
```

---

## 📚 More Help

- Full setup: **[QUICKSTART.md](QUICKSTART.md)**
- Customization: **[CONFIGURATION.md](CONFIGURATION.md)**
- Deployment: **[DEPLOYMENT.md](DEPLOYMENT.md)**
- Project structure: **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)**
- Frontend details: **[frontend/README.md](frontend/README.md)**
- Backend details: **[backend/README.md](backend/README.md)**

---

## 🎯 Success Indicators

You'll know installation is successful when:

✅ Backend shows: "Portfolio Backend Server Running"
✅ Frontend shows: "Compiled successfully"
✅ Browser opens to http://localhost:3000
✅ Portfolio sections load and scroll smoothly
✅ Contact form submits without error
✅ Message appears in MongoDB

**If all green, you're good to go!**

---

## Keeping Things Running

### Terminal 1 (Keep Running)
```bash
cd backend
npm run dev
# Don't close this!
```

### Terminal 2 (Keep Running)
```bash
cd frontend
npm start
# Don't close this!
```

### To Stop:
- Press `Ctrl+C` in either terminal
- Finds in the section where you want to take tests again: `npm start` or `npm run dev`

---

## Quick Reference

| What You Need | Command |
|--------------|---------|
| Start backend | `cd backend && npm run dev` |
| Start frontend | `cd frontend && npm start` |
| Stop servers | `Ctrl+C` in terminal |
| Check backend | http://localhost:5000/api/health |
| View portfolio | http://localhost:3000 |
| Open DevTools | `F12` |

---

**You're all set! 🎉 Happy building!**
