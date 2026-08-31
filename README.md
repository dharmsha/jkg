# 🛒 JGK Kirana Store - Next.js + Tailwind

Ek complete online kirana store website — categories, products, cart, checkout aur order management ke saath. **Next.js 15 + Tailwind CSS + shadcn/ui + MongoDB** mein bana hai.

![preview](https://img.shields.io/badge/Next.js-15.5-black) ![preview](https://img.shields.io/badge/Tailwind-3.4-cyan) ![preview](https://img.shields.io/badge/MongoDB-Ready-green)

---

## ✨ Features

- 🏠 **Hero banner** with monsoon sale
- 🛒 **12 Categories** (Dal, Rice, Aata, Oil, Masala, Dry Fruits, Tea, Snacks, Biscuits, Personal Care, Household, Baby Care)
- 🏷️ **60+ Products** with Hindi + English names, MRP/discount pricing
- 🔍 **Live search** (Hindi + English supported)
- 🛒 **Cart** with +/- quantity controls, persists in localStorage
- ✨ **Sliding cart drawer** with subtotal, savings, delivery calculation
- 💳 **Checkout dialog** with Cash on Delivery
- 📦 **Order management** — orders save to MongoDB
- 📱 **Fully responsive** (mobile + tablet + desktop)
- 🎨 **Beautiful green kirana theme**

---

## 🚀 VS Code Mein Kaise Run Kare (Setup Guide)

### 1️⃣ Prerequisites (Ek baar install karo)

Inhe apne computer par pehle install karna zaroori hai:

- **Node.js 18+** — Download: https://nodejs.org/en/download
- **Yarn** — Node install karne ke baad terminal mein:
  ```bash
  npm install --global yarn
  ```
- **MongoDB** (2 options):
  - **Option A (Recommended - Free Cloud):** MongoDB Atlas par free account banao → https://www.mongodb.com/cloud/atlas/register
  - **Option B (Local):** MongoDB Community Server install karo → https://www.mongodb.com/try/download/community
- **VS Code** — https://code.visualstudio.com/

### 2️⃣ Project Setup

**Step 1:** Zip extract karo aur VS Code mein open karo.

**Step 2:** VS Code mein terminal open karo (`Ctrl + \`` ya menu → Terminal → New Terminal).

**Step 3:** Dependencies install karo:

```bash
yarn install
```

> Yeh 1-2 minute lega. Sab packages `node_modules` mein install hoga.

**Step 4:** Environment file banao.

`.env.local.example` file ko copy karke `.env.local` ke naam se save karo:

```bash
# Windows (PowerShell)
copy .env.local.example .env.local

# Mac / Linux
cp .env.local.example .env.local
```

Ab `.env.local` file ko VS Code mein open karke apni MongoDB URL daalo:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=jgk_kirana
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Agar MongoDB Atlas use kar rahe ho:**
1. Atlas mein cluster banao (free tier M0)
2. Database Access mein user + password banao
3. Network Access mein `0.0.0.0/0` allow karo (development ke liye)
4. Connect → Drivers → connection string copy karo
5. `.env.local` mein daalo:
   ```env
   MONGO_URL=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net
   ```

**Step 5:** Server chalao!

```bash
yarn dev
```

Browser open karo → http://localhost:3000 → Website ready hai! 🎉

---

## 📁 Project Structure

```
jgk-kirana-store/
├── app/
│   ├── api/[[...path]]/route.js    # Backend API (orders)
│   ├── globals.css                 # Tailwind + theme colors
│   ├── layout.js                   # Root layout
│   └── page.js                     # Main homepage (edit yaha)
├── components/ui/                  # shadcn/ui components
├── lib/
│   ├── products.js                 # Products & categories data
│   └── utils.js                    # Tailwind helper
├── .env.local                      # Environment variables (tum banaoge)
├── package.json
├── tailwind.config.js
└── next.config.js
```

---

## ✏️ Kya Kya Edit Kar Sakte Ho

### Products / Categories badalne ke liye:
**File:** `lib/products.js`
- Naye products add karo `PRODUCTS` array mein
- Categories `CATEGORIES` array mein hain

### Design / Colors badalne ke liye:
**File:** `app/globals.css` — CSS variables (primary color etc.)
**File:** `app/page.js` — sab UI yahin hai

### Store name / branding:
**File:** `app/page.js` mein `JGK Kirana` search karke apna naam daal do.

### Delivery / pricing rules:
**File:** `app/page.js` mein `const delivery = ...` line dhundo.

---

## 🛠️ Available Commands

```bash
yarn dev      # Development server (hot reload)
yarn build    # Production build
yarn start    # Production server
```

---

## 💡 Troubleshooting

**Q: Yarn install error?**  
A: `node_modules` aur `yarn.lock` delete karke phir se `yarn install` chalao.

**Q: MongoDB connection error?**  
A: `.env.local` mein `MONGO_URL` sahi hai check karo. Atlas use kar rahe ho to Network Access mein IP whitelist kar do.

**Q: Port 3000 already in use?**  
A: `package.json` mein `"dev": "next dev -p 3001"` change kar do.

**Q: Cart save nahi ho raha checkout par?**  
A: MongoDB running hai check karo. Browser console mein error dekho.

---

## 📦 Deploy Karne Ke Liye (Optional)

**Vercel (Recommended - free):**
1. GitHub par code push karo
2. https://vercel.com par login karo
3. "Import Project" → GitHub repo select karo
4. Environment variables (`MONGO_URL`, `DB_NAME`) add karo
5. Deploy!

---

Made with ❤️ for JGK Kirana Store.
