# 🚀 Deployment Documentation

## 📋 Overview

This MERN stack application is deployed using:
- **Backend:** Render (Express.js + MongoDB)
- **Frontend:** Vercel (React + Vite)
- **Database:** MongoDB Atlas
- **CI/CD:** GitHub Actions

## 🌐 Live URLs

- **Backend API:** `https://week-7-devops-deployment-assignment-5d8u.onrender.com`
- **Frontend:** [Your Vercel URL]
- **Health Check:** `https://week-7-devops-deployment-assignment-5d8u.onrender.com/health`

## 🔧 Environment Setup

### Backend (Render)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_jwt_secret_here
NODE_ENV=production
```

### Frontend (Vercel)
```env
VITE_API_URL=https://week-7-devops-deployment-assignment-5d8u.onrender.com
```

## 📦 Build Commands

### Backend
```bash
cd server
npm install
npm start
```

### Frontend
```bash
cd client/vite-project
npm install
npm run build
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows
1. **ci-cd.yml** - Main CI/CD pipeline
2. **health-check.yml** - Automated health checks
3. **rollback.yml** - Emergency rollback

### Deployment Flow
1. Push to `main` branch
2. GitHub Actions run tests and builds
3. Render auto-deploys backend
4. Vercel auto-deploys frontend

## 🛠️ Manual Deployment

### Backend (Render)
1. Go to Render dashboard
2. Select your web service
3. Click "Manual Deploy"
4. Choose "Clear build cache & deploy"

### Frontend (Vercel)
1. Go to Vercel dashboard
2. Select your project
3. Click "Redeploy"

## 🔍 Monitoring

### Health Endpoints
- `/health` - Basic health check
- `/health/detailed` - Detailed system status

### Performance Monitoring
- Check Render logs for performance metrics
- Monitor API response times
- Watch for slow requests

## 🚨 Troubleshooting

### Common Issues

#### Backend Won't Start
1. Check environment variables in Render
2. Verify MongoDB connection
3. Check Render logs for errors

#### Frontend Build Fails
1. Check Vercel build logs
2. Verify environment variables
3. Test build locally first

#### Database Connection Issues
1. Check MongoDB Atlas IP whitelist
2. Verify connection string
3. Check database user permissions

### Emergency Procedures
1. Use GitHub Actions rollback workflow
2. Check recent deployments
3. Review application logs
4. Contact platform support if needed

## 📊 Performance Metrics

### Targets
- **API Response Time:** < 500ms
- **Frontend Load Time:** < 3s
- **Uptime:** > 99.9%

### Monitoring Tools
- Render built-in monitoring
- Vercel analytics
- GitHub Actions status
- Custom health checks

## 🔐 Security

### SSL/TLS
- Render provides automatic SSL
- Vercel provides automatic SSL
- All traffic encrypted

### Environment Variables
- Never commit secrets to Git
- Use platform environment variables
- Rotate secrets regularly

## 📞 Support

- **Render:** https://render.com/docs/help
- **Vercel:** https://vercel.com/support
- **MongoDB Atlas:** https://docs.atlas.mongodb.com/support/
- **GitHub Actions:** https://docs.github.com/en/actions 