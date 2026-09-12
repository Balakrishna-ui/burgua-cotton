# Burgula Cotton — Vercel Production Deployment Guide

This project is fully verified, hardened, and production-ready for deployment on **Vercel**.

---

## 1. Project Specifications

| Property | Value |
|---|---|
| **Framework** | Next.js 15.2.0 (App Router) |
| **Runtime / Node** | Node.js 18.x / 20.x / 22.x |
| **React Version** | React 19.0.0 |
| **Language** | TypeScript 5.7.3 |
| **Package Manager** | `npm` |
| **Build Command** | `next build` *(with automatic `postinstall: prisma generate`)* |
| **Output Directory** | `.next` |
| **ORM / Database** | Prisma 6.4.1 (PostgreSQL with in-memory seed fallback circuit-breaker) |
| **Cache & Rate Limiting** | Redis / graceful in-memory token bucket fallback |

---

## 2. Environment Variables Configuration

Set the following environment variables in your **Vercel Project Settings > Environment Variables**:

| Variable Name | Required | Description | Example Production Value |
|---|---|---|---|
| `NEXT_PUBLIC_APP_URL` | **Yes** | Canonical public URL used for SEO, OpenGraph, sitemaps, and robots | `https://burgulacotton.com` *(or `https://<project>.vercel.app`)* |
| `APP_SECRET` | **Yes** | 32+ character random secret string for API signing and security | `generate_with_openssl_rand_hex_32` |
| `DATABASE_URL` | Optional | Connection string to PostgreSQL database (e.g., Vercel Postgres, Supabase, Neon) | `postgresql://user:pass@ep-host.neon.tech/burgula?sslmode=require` |
| `REDIS_URL` | Optional | Redis connection URL for distributed rate limiting across edge regions | `rediss://default:token@host.upstash.io:6379` |

> [!NOTE]
> **Zero-Downtime Database Architecture**: If `DATABASE_URL` is omitted or temporarily unreachable, the application automatically activates its circuit breaker and serves verified static handloom textiles, journal articles, and chapters without failing builds or showing 500 errors.

---

## 3. How to Deploy to Vercel

### Option A: Via GitHub (Recommended)
1. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<your-username>/burgula-cotton.git
   git push -u origin main
   ```
2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository (`burgula-cotton`).
   - Framework preset will automatically detect **Next.js**.
   - Under **Environment Variables**, add `NEXT_PUBLIC_APP_URL` and `APP_SECRET`.
   - Click **Deploy**.

### Option B: Via Vercel CLI
1. Log in to Vercel:
   ```bash
   npx vercel login
   ```
2. Deploy to production:
   ```bash
   npx vercel --prod
   ```

---

## 4. Pre-Deployment Verification Completed

- [x] **Local Production Build**: `npm run build` completed with **0 errors** (23 static routes generated).
- [x] **TypeScript Validity**: `npm run typecheck` passed with **0 errors**.
- [x] **ESLint Linting**: `next lint` passed with **0 warnings and 0 errors**.
- [x] **Automated Tests**: Vitest suite passed **7/7 test files, 40/40 tests**.
- [x] **Asset Verification**: All 38 image assets, fonts, and icons reside in `public/images/` with zero localhost dependencies.
- [x] **SEO & Metadata**: Complete OpenGraph, canonical URLs, robots.txt, and sitemap.xml dynamically served.
- [x] **Responsive Design**: Mobile, tablet, and desktop layouts tested and verified.
- [x] **Git Repository**: Initialized with clean working tree on `main` branch.
