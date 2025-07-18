# 🚀 MERN Stack Blog Application - DevOps Deployment

A full-stack MERN (MongoDB, Express.js, React, Node.js) blog application with complete DevOps deployment, CI/CD pipeline, and monitoring setup.

## 🌐 Live Application

- **Frontend (React):** https://week-7-devops-deployment-assignment-gdine-dine1.vercel.app
- **Backend API (Express):** https://week-7-devops-deployment-assignment-5d8u.onrender.com
- **Health Check:** https://week-7-devops-deployment-assignment-5d8u.onrender.com/health

## 📋 Features

### Frontend (React + Vite)
- ✅ User authentication (login/register)
- ✅ Create, read, update, delete blog posts
- ✅ Category management
- ✅ Responsive design with Tailwind CSS
- ✅ Code splitting for better performance
- ✅ Environment variable configuration

### Backend (Express.js)
- ✅ RESTful API endpoints
- ✅ JWT authentication
- ✅ MongoDB integration
- ✅ Error handling middleware
- ✅ Security headers (Helmet)
- ✅ Request logging (Morgan)
- ✅ Performance monitoring
- ✅ Health check endpoints

### DevOps & Deployment
- ✅ **Backend:** Deployed on Render with automatic SSL
- ✅ **Frontend:** Deployed on Vercel with automatic SSL
- ✅ **Database:** MongoDB Atlas cluster
- ✅ **CI/CD:** GitHub Actions pipeline
- ✅ **Monitoring:** Health checks and performance tracking
- ✅ **Documentation:** Complete deployment and maintenance guides

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security headers
- **Morgan** - Request logging

### DevOps
- **Render** - Backend hosting
- **Vercel** - Frontend hosting
- **MongoDB Atlas** - Database hosting
- **GitHub Actions** - CI/CD pipeline
- **GitHub** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Render account
- Vercel account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-7-devops-deployment-assignment-Gdine-dine1.git
   cd week-7-devops-deployment-assignment-Gdine-dine1
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Add your MongoDB URI and JWT secret to .env
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd client/vite-project
   npm install
   cp .env.example .env
   # Add your backend API URL to .env
   npm run dev
   ```

## 🔧 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

## 📊 CI/CD Pipeline

### GitHub Actions Workflows
- **ci-cd.yml** - Main CI/CD pipeline with testing and building
- **health-check.yml** - Automated health checks every 6 hours
- **rollback.yml** - Emergency rollback workflow

### Deployment Flow
1. Push to `main` branch
2. GitHub Actions run tests and builds
3. Render auto-deploys backend
4. Vercel auto-deploys frontend

## 🔍 Monitoring & Health Checks

### Health Endpoints
- `/health` - Basic application status
- `/health/detailed` - Detailed system information

### Performance Monitoring
- API response time tracking
- Slow request detection (>1 second)
- Memory usage monitoring
- Database connection status

## 📚 Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Complete deployment guide
- **[MAINTENANCE.md](MAINTENANCE.md)** - Maintenance procedures
- **[Week7-Assignment.md](Week7-Assignment.md)** - Original assignment requirements

## 🚨 Troubleshooting

### Common Issues
1. **Backend won't start** - Check environment variables in Render
2. **Frontend build fails** - Check Vercel build logs
3. **Database connection issues** - Verify MongoDB Atlas settings

### Emergency Procedures
1. Use GitHub Actions rollback workflow
2. Check recent deployments
3. Review application logs
4. Contact platform support if needed

## 📈 Performance Metrics

- **API Response Time:** < 500ms average
- **Frontend Load Time:** < 3 seconds
- **Uptime:** > 99.9%
- **Error Rate:** < 1%

## 🔐 Security Features

- JWT authentication
- Password hashing with bcrypt
- Security headers with Helmet
- CORS configuration
- Environment variable protection
- SSL/TLS encryption (automatic)

## 📞 Support

- **Render Support:** https://render.com/docs/help
- **Vercel Support:** https://vercel.com/support
- **MongoDB Atlas:** https://docs.atlas.mongodb.com/support/
- **GitHub Actions:** https://docs.github.com/en/actions

## 📝 License

This project is part of the PLP MERN Stack Development course assignment.

---

**🎉 Successfully deployed with full DevOps pipeline including CI/CD, monitoring, and comprehensive documentation!** 