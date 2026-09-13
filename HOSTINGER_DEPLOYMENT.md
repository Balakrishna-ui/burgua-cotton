# Hostinger Production Deployment Guide — Burgula Cotton

This document details the configuration, prerequisites, and step-by-step procedure to deploy the **Burgula Cotton** Next.js 15 application to **Hostinger**.

---

## 1. Executive Summary & Compatibility

| Audit Metric | Status | Details |
| :--- | :--- | :--- |
| **Hostinger Compatibility** | **READY** | Project fully audited, built, and verified with zero errors |
| **Recommended Plan** | **Hostinger KVM VPS (KVM 1 or KVM 2)** | Full control over Node.js daemon, PM2, Nginx reverse proxy, and SSL |
| **Alternative Plan** | **Hostinger Business / Cloud Hosting** | Must have **Node.js Application Manager** enabled in hPanel |
| **Incompatible Plan** | **Hostinger Single / Premium Web Hosting** | PHP-only hosting without Node.js runtime cannot run Next.js App Router |
| **Node.js Version** | **Node.js 20.x LTS or 22.x LTS** | Minimum requirement: `>= 18.18.0` (enforced via `package.json` engines) |
| **Database** | **Neon PostgreSQL (Serverless)** | Outbound pooled connection over TLS (`sslmode=require`) |
| **Prisma Version** | **Prisma 6.4.1** | Auto-generates via `postinstall` script upon `npm install` |

---

## 2. Environment Variables

Configure these environment variables in your Hostinger environment (via hPanel Node.js environment fields or `.env` file on VPS):

| Variable Name | Required | Description | Example Value |
| :--- | :--- | :--- | :--- |
| `NODE_ENV` | **Yes** | Execution mode | `production` |
| `PORT` | **Yes** | Internal application port | `3000` (or assigned by Hostinger) |
| `NEXT_PUBLIC_APP_URL` | **Yes** | Canonical production domain | `https://yourdomain.com` |
| `APP_SECRET` | **Yes** | 32+ character random encryption string | `openssl rand -hex 32` |
| `DATABASE_URL` | **Yes** | Neon pooled PostgreSQL connection string | `postgresql://<user>:<password>@ep-<endpoint>-pooler.<region>.aws.neon.tech/neondb?sslmode=require` |
| `TRUSTED_PROXY` | Optional | Set to `true` behind Nginx/Passenger | `true` |

---

## 3. Production Commands

| Step | Command | Description |
| :--- | :--- | :--- |
| **Install Dependencies** | `npm install` | Automatically executes `npx prisma generate` via postinstall |
| **Generate Prisma** | `npx prisma generate` | Regenerates Prisma Client if schema changes |
| **Production Build** | `npm run build` | Compiles Next.js 15 pages and API routes |
| **Start Server (npm)** | `npm start` | Standard Next.js production server (`next start -p $PORT`) |
| **Start Server (Node)** | `node server.js` | Dedicated Hostinger entrypoint (hPanel / PM2) |
| **Start with PM2 (VPS)** | `pm2 start ecosystem.config.js` | Zero-downtime process manager with auto-restart |

---

## 4. Hostinger Deployment Options

### Method A: Hostinger KVM VPS Deployment (Recommended)

1. **Server Setup**:
   - OS: Ubuntu 22.04 or 24.04 LTS.
   - Install Node.js 20 & Git:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
     sudo apt-get install -y nodejs git nginx
     sudo npm install -g pm2
     ```
2. **Clone Repository**:
   ```bash
   cd /var/www
   git clone https://github.com/<your-account>/burgula-cotton.git
   cd burgula-cotton
   ```
3. **Environment Setup**:
   Create `/var/www/burgula-cotton/.env`:
   ```env
   NODE_ENV=production
   PORT=3000
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   APP_SECRET=your_secure_random_string_32_chars
   DATABASE_URL=postgresql://<user>:<password>@ep-...-pooler.aws.neon.tech/neondb?sslmode=require
   TRUSTED_PROXY=true
   ```
4. **Build the Application**:
   ```bash
   npm install
   npx prisma generate
   npm run build
   ```
5. **Start with PM2**:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```
6. **Nginx Reverse Proxy Configuration**:
   Create `/etc/nginx/sites-available/burgula-cotton`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```
   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/burgula-cotton /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```
7. **Free SSL with Certbot**:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

### Method B: Hostinger Cloud / Business Hosting (hPanel Node.js)

1. Open **hPanel > Websites > Manage > Node.js**.
2. Create Node.js application:
   - **Node.js version**: Select `20.x` or `18.x`.
   - **Application root**: `public_html` (or subfolder).
   - **Application startup file**: `server.js`.
   - **Application mode**: `Production`.
3. In **Environment Variables** within hPanel, enter:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_APP_URL`
   - `APP_SECRET`
   - `NODE_ENV=production`
4. Upload files (or use Git deployment in hPanel).
5. Open SSH / Terminal in hPanel and run:
   ```bash
   npm install
   npx prisma generate
   npm run build
   ```
6. Click **Restart** in the Node.js panel.
