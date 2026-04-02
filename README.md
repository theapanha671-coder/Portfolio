# Personal Portfolio Website - Full Stack

A modern, fully responsive personal portfolio website built with React.js, Tailwind CSS, Node.js/Express, and MongoDB. Perfect for showcasing your projects, skills, experience, and achievements.

## 🌟 Features

- ✅ **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Modern UI/UX** - Built with Tailwind CSS for beautiful styling
- ✅ **Smooth Animations** - Fade-in, slide-up, and hover effects throughout
- ✅ **React Router Navigation** - Smooth single-page navigation
- ✅ **Contact Form** - Stores messages in MongoDB
- ✅ **Social Media Integration** - Links to your social profiles
- ✅ **SEO Friendly** - Optimized meta tags and structure
- ✅ **Fast Performance** - Optimized for load speed
- ✅ **Easy to Customize** - Well-organized, commented code

## 📋 Sections

1. **About Me** - Profile photo, name, profession, and biography
2. **My Journey** - Education, certifications, and work experience
3. **My Achievements** - Awards, recognitions, and milestones
4. **My Skills** - Technical and soft skills with proficiency levels
5. **My Projects** - Showcase with descriptions, tech stack, and links
6. **Get In Touch** - Contact form with MongoDB integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Icon components
- **Axios** - HTTP client
- **React Scroll** - Smooth scrolling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Express Validator** - Input validation

## 📂 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Achievement.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Journey.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── .env.example
│   └── tsconfig.json
│
└── backend/
    ├── models/
    │   └── Contact.js
    ├── routes/
    │   └── contact.js
    ├── middleware/
    │   └── validation.js
    ├── server.js
    ├── package.json
    └── .env.example
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud - MongoDB Atlas)

### Installation

#### 1. Clone or Download the Project
```bash
cd portfolio
```

#### 2. Setup Frontend

```bash
cd frontend
npm install
```

Create `.env` file:
```bash
cp .env.example .env
```

Edit `.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

#### 3. Setup Backend

```bash
cd ../backend
npm install
```

Create `.env` file:
```bash
cp .env.example .env
```

Edit `.env`:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
CLIENT_URL=http://localhost:3000
```

### Running the Application

#### Terminal 1 - Start Backend Server
```bash
cd backend
npm run dev
```

Server will start on http://localhost:5000

#### Terminal 2 - Start Frontend Development Server
```bash
cd frontend
npm start
```

Frontend will open at http://localhost:3000

## 📱 Customization Guide

### Update Personal Information

**Frontend - `src/components/About.jsx`**
```jsx
<h3 className="text-4xl font-bold text-gray-900 mb-2">John Doe</h3>
<p className="text-2xl text-blue-500 font-semibold mb-4">Full Stack Developer</p>
```

**Frontend - `src/components/Footer.jsx`**
```jsx
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  // ... more links
];
```

### Update Education & Experience

**Frontend - `src/components/Journey.jsx`**
```jsx
const education = [
  {
    school: 'Your University',
    degree: 'Bachelor of Science',
    field: 'Your Field',
    year: '2020',
  },
  // ... more entries
];

const experience = [
  {
    title: 'Your Job Title',
    company: 'Your Company',
    duration: '2022-2024',
    responsibilities: 'Your responsibilities',
  },
  // ... more entries
];
```

### Update Skills

**Frontend - `src/components/Skills.jsx`**
```jsx
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      // ... more skills
    ],
  },
  // ... more categories
];
```

### Update Projects

**Frontend - `src/components/Projects.jsx`**
```jsx
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    techStack: ['React', 'Node.js', 'MongoDB'],
    image: '🎨',
    github: 'https://github.com/yourproject',
    demo: 'https://project-demo.com',
  },
  // ... more projects
];
```

### Update Social Links in Header

**Frontend - `src/components/Header.jsx`**
- Update navigation items and links as needed

## 🔌 API Endpoints

### Contact Routes

**POST** `/api/contact` - Submit new contact message
- Body: `{ name, email, subject, message }`
- Response: Success message with contact ID

**GET** `/api/contact` - Get all contacts (admin)
- Response: Array of contact messages

**GET** `/api/contact/:id` - Get single contact
- Response: Contact details

**PATCH** `/api/contact/:id/read` - Mark as read
- Response: Updated contact

**DELETE** `/api/contact/:id` - Delete contact
- Response: Deleted contact info

## 🎨 Customizing Colors & Styling

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',      // Blue
      secondary: '#1F2937',    // Dark
      accent: '#10B981',       // Green
      dark: '#111827',
      light: '#F9FAFB',
    },
  },
}
```

## 📈 Performance Optimization

- ✅ Code splitting with React Router
- ✅ Lazy loading of images
- ✅ Minified CSS with Tailwind
- ✅ Optimized animations
- ✅ Responsive images
- ✅ SEO-friendly structure

## 🔒 Security Features

- ✅ Input validation on backend
- ✅ CORS enabled
- ✅ Environment variables for sensitive data
- ✅ Mongoose schema validation
- ✅ Rate limiting ready

## 📦 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the 'dist' folder to Vercel or Netlify
```

### Backend Deployment (Heroku/Railway)
```bash
# Set environment variables on your hosting platform
# Deploy the backend folder
```

### MongoDB Atlas
1. Create account at mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update `MONGODB_URI` in backend `.env`

## 🐛 Troubleshooting

**Frontend won't connect to backend?**
- Check `REACT_APP_API_URL` in frontend `.env`
- Ensure backend is running on port 5000
- Check CORS settings in `backend/middleware/validation.js`

**MongoDB connection error?**
- Verify MongoDB is running locally or check atlas connection string
- Check `MONGODB_URI` in backend `.env`
- Ensure database name exists

**Styling not loading?**
- Run `npm run build` in frontend
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure Tailwind CSS is properly configured

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, customize, and use this portfolio template!

## 📧 Support

For issues or questions, please create an issue or contact the author.

---

**Built with ❤️ using React, Tailwind CSS, Node.js & MongoDB**
