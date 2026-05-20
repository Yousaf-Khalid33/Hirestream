# HireStream Deployment Guide

## Database Configuration

**NeonDB Connection String:**
```
postgresql://neondb_owner:npg_8BzKWoRlNvx7@ep-aged-scene-aqpz1ddy.c-8.us-east-1.aws.neon.tech/neondb?sslmode=verify-full
```

---

## Backend Deployment (Vercel)

### Environment Variables Required:
Set these in Vercel Dashboard → Backend Project → Settings → Environment Variables:

| Key | Value |
|-----|-------|
| `PORT` | `5000` |
| `DATABASE_URL` | `postgresql://neondb_owner:npg_8BzKWoRlNvx7@ep-aged-scene-aqpz1ddy.c-8.us-east-1.aws.neon.tech/neondb?sslmode=verify-full` |
| `JWT_SECRET` | `9491312d93e15c7344346e239d06842bc51a53f9ed524dcdf2ac60bde103f3a5d0fe7c17d9449d861f5c8298937bbb47f8908fdf4b2334f1342b95b3b99aabe6` |
| `JWT_REFRESH_SECRET` | `407a0cc5f94dd60335ecbf8c4581ab20999bfdc5f19deab7d1a32580360a77c09a15c28506de88390a33d8eeec78ffbc6635fd27fc75011507d529837358f3c9` |
| `NODE_ENV` | `production` |

### Deployment Steps:
1. Push code to GitHub
2. Import project in Vercel: https://vercel.com/import
3. Select the repository
4. Framework Preset: **Other**
5. Build Command: Leave empty
6. Output Directory: Leave empty
7. Click **Deploy**

---

## Frontend Deployment (Vercel)

### Environment Variables Required:
| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://your-backend-project.vercel.app` |

### Update Configuration:
Before deploying, edit `frontend/vercel.json` and replace `your-backend-url.vercel.app` with your actual backend URL.

### Deployment Steps:
1. Push code to GitHub
2. Import project in Vercel: https://vercel.com/import
3. Select the repository
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add environment variable `VITE_API_URL` pointing to your backend
8. Click **Deploy**

---

## Project Structure

```
hirestream/
├── backend/
│   ├── vercel.json    # Backend Vercel config
│   ├── server.js      # Express entry point
│   ├── .env           # Local environment variables
│   └── ...
├── frontend/
│   ├── vercel.json    # Frontend Vercel config
│   ├── vite.config.js
│   └── ...
├── deployment.md      # This file
└── package.json       # Root package (not needed for deployment)
```

---

## Running Locally After Deployment

Update frontend `.env` to point to production backend:
```
VITE_API_URL=https://your-backend.vercel.app
```

---

## Troubleshooting

- **CORS Issues**: Ensure backend has `cors()` middleware configured for production domain
- **Database Connection**: Verify NeonDB credentials and SSL settings
- **API Routes**: Check that all routes are prefixed with `/api/` in Vercel routing