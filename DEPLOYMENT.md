# Deployment Guide

Complete guide to deploying your portfolio website to production.

## Pre-Deployment Checklist

- [ ] All components populated with your information
- [ ] Contact form tested and working
- [ ] All links (GitHub, LinkedIn, portfolio projects) verified
- [ ] Images optimized and loaded
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Console errors checked and resolved
- [ ] Environment variables securely configured
- [ ] Database backup taken
- [ ] Performance optimized (no unused code/styles)

## Frontend Deployment

### Option 1: Vercel (Recommended - Free, Fast)

**Advantages:**
- ✅ Free and easy
- ✅ Automatic deployments from Git
- ✅ Fast CDN
- ✅ Built-in analytics

**Steps:**

1. **Push to GitHub**
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourname/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Visit https://vercel.com
   - Click "New Project"
   - Select your portfolio repo
   - Configure:
     - Framework: React
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Environment Variables: (if needed)
   - Click Deploy

3. **Custom Domain** (Optional)
   - In Vercel dashboard: Settings → Domains
   - Add your domain
   - Update DNS records (Vercel provides instructions)

**Environment Variables in Vercel:**
```
REACT_APP_API_URL=https://your-backend-domain.com/api
```

### Option 2: Netlify (Free, Alternative)

**Steps:**

1. **Build locally**
```bash
cd frontend
npm run build
```

2. **Deploy on Netlify**
   - Visit https://app.netlify.com
   - Drag and drop `dist` folder
   - OR connect GitHub for auto-deploys

3. **Configure**
   - Deploy settings → Build command: `npm run build`
   - Deploy settings → Publish directory: `dist`

### Option 3: GitHub Pages (Free, Basic)

**Steps:**

1. **Update package.json**
```json
{
  "homepage": "https://yourname.github.io/portfolio"
}
```

2. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

3. **Update package.json scripts**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**
```bash
cd frontend
npm run deploy
```

### Option 4: Traditional Hosting

**For shared hosting (GoDaddy, Bluehost, etc.):**

1. **Build**
```bash
cd frontend
npm run build
```

2. **Upload**
   - FTP the `dist/` folder contents to `public_html/`
   - Create `.htaccess` for clean URLs:
     ```
     <IfModule mod_rewrite.c>
       <IfModule mod_negotiation.c>
         Options -MultiViews
       </IfModule>
       RewriteEngine On
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule ^ index.html [QSA,L]
     </IfModule>
     ```

## Backend Deployment

### Option 1: Railway.app (Recommended - Free Tier)

**Advantages:**
- ✅ Free tier with $5/month credit
- ✅ MongoDB integration available
- ✅ Easy GitHub deployment

**Steps:**

1. **Push backend to GitHub**
```bash
cd backend
git add .
git commit -m "Backend ready for deployment"
git push
```

2. **Deploy on Railway**
   - Visit https://railway.app
   - Sign up with GitHub
   - New Project → GitHub Repo
   - Select backend folder

3. **Add MongoDB**
   - In Railway dashboard: Add → Add MongoDB Plugin
   - Railway provides connection string automatically

4. **Set Environment Variables**
   - In Railway dashboard → Variables
   - Add:
     ```
     NODE_ENV=production
     PORT=5000
     MONGODB_URI=<from Railway MongoDB>
     CLIENT_URL=https://yourfrontend.vercel.app
     ```

5. **Get Backend URL**
   - Railway provides public URL
   - Update frontend: `REACT_APP_API_URL=https://your-railway-url/api`

### Option 2: Heroku (Limited Free Tier)

**Note:** Heroku removed free tier but still offers paid options

**Steps:**

1. **Install Heroku CLI**
```bash
# Windows, macOS, Linux
# Visit https://devcenter.heroku.com/articles/heroku-cli
```

2. **Login and Deploy**
```bash
heroku login
cd backend
heroku create your-app-name
git push heroku main
```

3. **Set Environment Variables**
```bash
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=mongodb+srv://...
```

### Option 3: DigitalOcean (Affordable)

**Advantages:**
- ✅ Affordable ($6-24/month)
- ✅ Full control
- ✅ Good for production

**Steps:**

1. **Create Droplet**
   - Visit digitalocean.com
   - Create Droplet → Ubuntu 22.04 LTS
   - Choose $6/month option

2. **SSH into Droplet**
```bash
ssh root@your-droplet-ip
```

3. **Install Dependencies**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y mongodb
```

4. **Upload Code**
```bash
# On your machine
scp -r backend/ root@your-droplet-ip:/app/
```

5. **Run Server**
```bash
cd /app/backend
npm install
npm start
```

6. **Set Reverse Proxy** (Nginx)
```bash
sudo apt-get install -y nginx
# Configure /etc/nginx/sites-available/default
```

### Option 4: AWS (Professional)

**Advantages:**
- ✅ Scalable
- ✅ Professional grade
- ✅ Free tier available

**Services needed:**
- EC2 for backend
- RDS or MongoDB Atlas for database
- Route 53 for DNS
- CloudFront for CDN

[See AWS documentation for detailed setup]

### Option 5: Self-Hosted VPS

**Budget option (~$3-5/month):**

1. **Get VPS** (Linode, Vultr, or similar)

2. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs mongodb
```

3. **Deploy Backend**
```bash
mkdir -p /var/www/backend
cd /var/www/backend
git clone your-repo .
npm install
npm start
```

4. **Use Process Manager** (PM2)
```bash
sudo npm install -g pm2
pm2 start server.js --name "portfolio"
pm2 startup
pm2 save
```

## Database Deployment

### MongoDB Atlas (Recommended - Free)

**Steps:**

1. **Create Account**
   - Visit https://www.mongodb.com/cloud/atlas
   - Sign up free

2. **Create Cluster**
   - New Cluster → Free Tier
   - Choose region closest to you
   - Click Create

3. **Get Connection String**
   - Cluster → Connect
   - Connect your application
   - Copy connection string
   - Replace `<password>` with your password

4. **Whitelist IP**
   - Network Access → Add IP Address
   - For development: 0.0.0.0/0 (allow anywhere)
   - For production: Add specific IPs

5. **Update Backend .env**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

### Self-Hosted MongoDB

**Not recommended for production but useful for learning:**

```bash
# Install
sudo apt-get install -y mongodb-server

# Start
sudo systemctl start mongodb
sudo systemctl enable mongodb

# Verify
mongo --version
```

## Full Deployment Flow

### Step 1: Prepare Production Build

**Frontend:**
```bash
cd frontend
npm run build
# Output: dist/
```

**Backend:**
```bash
cd backend
npm install  # Ensure all dependencies
# No build needed for Node.js
```

### Step 2: Configure Production URLs

**Frontend `.env`:**
```
REACT_APP_API_URL=https://your-backend-domain.com/api
```

**Backend `.env`:**
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
CLIENT_URL=https://your-frontend-domain.com
```

### Step 3: Deploy Frontend
- Push to GitHub/Vercel/Netlify

### Step 4: Deploy Backend
- Push to GitHub/Railway/Heroku/VPS

### Step 5: Configure Database
- Set up MongoDB Atlas
- Add connection string to backend

### Step 6: Configure Domain & DNS
- Point domain to frontend (Vercel, Netlify)
- Ensure backend URL is accessible

### Step 7: Test Thoroughly
- Visit website
- Test all pages load
- Test contact form submission
- Check MongoDB for stored messages
- Verify responsive design
- Check browser console for errors

## Post-Deployment Checklist

- [ ] Frontend loads at custom domain
- [ ] Backend API responds
- [ ] Contact form submits and saves to DB
- [ ] No console errors
- [ ] Performance acceptable (< 3s load time)
- [ ] Mobile responsive
- [ ] All links work
- [ ] SEO meta tags present
- [ ] HTTPS enabled
- [ ] Database backups configured

## Monitoring & Maintenance

### Setup Uptime Monitoring

**Free options:**
- https://uptimerobot.com - Monitor if site is live
- https://www.statuspage.io - Status page

### Setup Analytics

**Google Analytics:**
1. Create account at google.com/analytics
2. Add tracking ID to header
3. Monitor traffic and user behavior

### Configure Backups

**MongoDB Atlas:**
- Settings → Backup
- Enable automatic backups (default 7 days)

### Monitor Errors

**Sentry (Error Tracking):**
```bash
npm install @sentry/react @sentry/tracing
```

```jsx
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
})
```

## Common Deployment Issues

### "Cannot find module"
```bash
# Solution: Install dependencies
npm install
```

### "CORS Error"
```javascript
// Update CORS in backend
CLIENT_URL=https://your-frontend-domain.com
```

### "Database Connection Error"
```
// Check:
1. MongoDB URI is correct
2. IP is whitelisted in MongoDB Atlas
3. Username/password correct
4. Database exists
```

### "Frontend Still Points to localhost"
```
// Update REACT_APP_API_URL in production build
// Redeploy frontend
```

### "502 Bad Gateway"
```
// Backend server down or not responding
// Check server logs:
pm2 logs
# or
journalctl -u your-service
```

## Performance Optimization Pre-Deployment

### Frontend
```bash
# Check bundle size
npm run build
# Look at dist/ folder size
```

### Implement Compression
**Backend:**
```bash
npm install compression
```

```javascript
import compression from 'compression'
app.use(compression())
```

### Enable Caching

**Files that should be cached:**
- Images (long cache: 1 year)
- Fonts (long cache: 1 year)
- JavaScript (short cache: 1 month)
- CSS (short cache: 1 month)

## Scalability Preparation

### If traffic increases:

1. **Database**
   - MongoDB Atlas auto-scales
   - Or switch to dedicated server

2. **Backend**
   - Use load balancer
   - Deploy multiple instances
   - Use CDN for static files

3. **Frontend**
   - Already on CDN (Vercel/Netlify)
   - No action needed

## Custom Domain Setup

### Step 1: Buy Domain
- GoDaddy, Namecheap, Google Domains, etc.

### Step 2: Update DNS

**For Vercel Frontend:**
- Vercel dashboard → Settings → Domains
- Add your domain
- Update DNS records as instructed

**For Railway/Heroku Backend:**
- Add CNAME record pointing to their domain
- Or use subdomain: api.yourdomain.com

### Step 3: SSL Certificate
- Automatic for Vercel/Netlify
- Manual for self-hosted (use Let's Encrypt)

## SSL Certificate (Self-Hosted)

### Using Let's Encrypt (Free)

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot certonly --standalone -d yourdomain.com
# Certificates in /etc/letsencrypt/live/yourdomain.com/
```

## Security Checklist

- [ ] HTTPS enabled on all domains
- [ ] Environment variables not exposed
- [ ] Database credentials in .env only
- [ ] API endpoints validate inputs
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Regular backups automated
- [ ] Error logs monitored
- [ ] Dependencies kept updated
- [ ] SQL injection protection (using Mongoose)

---

*This guide covers most deployment scenarios. For specific platforms, refer to their documentation.*
