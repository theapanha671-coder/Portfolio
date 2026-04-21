# Backend Setup & Configuration

## Installation

```bash
cd backend
npm install
```

## Environment Variables

Create `.env` file in the backend directory:

```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
CLIENT_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Available Scripts

### Development Mode (with auto-reload)
```bash
npm run dev
```
Requires `nodemon` (included in devDependencies)

### Production Mode
```bash
npm start
```

## Project Structure

- `server.js` - Express server setup
- `models/` - Mongoose schemas
  - `Contact.js` - Contact message schema
- `routes/` - API routes
  - `contact.js` - Contact routes
- `middleware/` - Express middleware
  - `validation.js` - Input validation and error handling
- `package.json` - Dependencies and scripts

## Database Setup

### Local MongoDB
```bash
# Install MongoDB Community Edition
# macOS (Homebrew)
brew services start mongodb-community

# Windows (make sure MongoDB is installed)
# Run MongoDB from Services or command line
mongod
```

### MongoDB Atlas (Cloud)
1. Visit https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create new cluster
4. Get connection string
5. Update `MONGODB_URI` in `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

## API Endpoints

### 1. Health Check
```
GET /api/health
```
Response:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### 2. Submit Contact Message
```
POST /api/contact
```
Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in your services..."
}
```
Response:
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 3. Get All Contact Messages
```
GET /api/contact
```
Response:
```json
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

### 4. Get Single Contact
```
GET /api/contact/:id
```

### 5. Mark as Read
```
PATCH /api/contact/:id/read
```

### 6. Delete Contact
```
DELETE /api/contact/:id
```

## Validation Rules

Contact form validation (backend):

- **name**: Required, 2-100 characters
- **email**: Required, valid email format
- **subject**: Required, 3-200 characters
- **message**: Required, 10-5000 characters

Validation errors return 400 status with error details.

## Middleware

### CORS
Configured to allow requests from frontend (default: http://localhost:3000)
Update in `middleware/validation.js`:
```javascript
corsOptions: {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
}
```

### Input Validation
Uses `express-validator` for sanitization and validation.

### Error Handler
Global error handler catches and formats all errors.

## Database Schema

### Contact Model
```javascript
{
  name: String (required, max 100)
  email: String (required, unique)
  subject: String (required, max 200)
  message: String (required, max 5000)
  isRead: Boolean (default: false)
  ip: String
  userAgent: String
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

## Development Workflow

1. Start MongoDB service
2. Run backend: `npm run dev`
3. Check health: http://localhost:5000/api/health
4. Test endpoints with Postman or similar
5. Check MongoDB collections

## Email Notifications (Optional)

To add email notifications on new contact:

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Send email on contact submission
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `New Contact: ${subject}`,
  text: message,
});
```

## Cloudinary Credentials

If you plan to use signed Cloudinary uploads from the backend, add these to `backend/.env` or your Render backend service:

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Keep these on the server only. Do not expose `API_SECRET` in the frontend.

## Production Deployment

### Deployment Platforms

**Heroku**
```bash
# Install Heroku CLI
heroku login
heroku create your-app-name
git push heroku main
```

**Railway**
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

**DigitalOcean / AWS**
1. Deploy Node.js app
2. Set environment variables
3. Configure MongoDB connection

## Security Best Practices

- ✅ Validate and sanitize all inputs
- ✅ Use environment variables for secrets
- ✅ Enable CORS for specific domains only
- ✅ Implement rate limiting
- ✅ Use HTTPS in production
- ✅ Add authentication for admin routes
- ✅ Monitor for suspicious activity

## Monitoring & Logging

Add logging for debugging:
```javascript
console.log('API request:', req.method, req.path);
console.error('Database error:', error);
```

For production, use services like:
- Winston (logging)
- Sentry (error tracking)
- DataDog (monitoring)

## Troubleshooting

**MongoDB Connection Error**
```
// Check MongoDB is running
// Verify connection string
// Check username/password for Atlas
```

**CORS Errors**
```
// Update CLIENT_URL in .env
// Restart server after changes
```

**Port 5000 already in use**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

**Validation Errors**
```
// Check request body matches schema
// Review validation rules in middleware
```

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Express Validator](https://express-validator.github.io/docs/)
