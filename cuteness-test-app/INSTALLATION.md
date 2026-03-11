# 🚀 Quick Start Guide - Cuteness Test App

## Prerequisites

Before you begin, ensure you have:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation Steps

### Step 1: Check Node.js Installation

Open your terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers. If not, install Node.js first.

### Step 2: Navigate to Project Directory

```bash
cd c:\Users\abhis\OneDrive\Suprith\cuteness-test-app
```

### Step 3: Install Dependencies

Run one of these commands:

**Using npm:**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

This will install:
- Next.js
- React
- Framer Motion
- Tailwind CSS
- All other dependencies

### Step 4: Start Development Server

**Using npm:**
```bash
npm run dev
```

**Using yarn:**
```bash
yarn dev
```

### Step 5: Open in Browser

Once the server starts, open your browser and go to:

```
http://localhost:3000
```

You should see the Cuteness Test app! 🎉

## 🎨 Using VSCode Live Server (Alternative)

**Note:** This app requires Node.js and cannot run with just Live Server because it uses Next.js.

You must use `npm run dev` to run the application.

## 🛠️ Troubleshooting

### Issue: "npm is not recognized"

**Solution:** Install Node.js from https://nodejs.org/

### Issue: Port 3000 is already in use

**Solution:** Either:
1. Stop the other application using port 3000
2. Or run on a different port:
```bash
npm run dev -- -p 3001
```

### Issue: Module not found errors

**Solution:** Delete node_modules and reinstall:
```bash
rmdir /s /q node_modules
npm install
```

### Issue: Animations not working

**Solution:** 
1. Clear browser cache
2. Hard refresh (Ctrl + Shift + R)
3. Check browser console for errors

## 📱 Testing on Mobile

### Option 1: Local Network
1. Find your computer's IP address:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`
2. On your mobile device, visit: `http://YOUR_IP:3000`

### Option 2: Deploy Online
Deploy to Vercel for free:
```bash
npm install -g vercel
vercel
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📂 Project Structure Overview

```
cuteness-test-app/
├── components/          # React components for each screen
├── pages/              # Next.js pages
├── styles/             # Global CSS and Tailwind
├── public/             # Static assets
├── package.json        # Dependencies
└── README.md          # Documentation
```

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'cute-pink': '#YOUR_COLOR',
}
```

### Modify Score Range
Edit `components/MeasuringScreen.jsx`:
```javascript
const targetScore = Math.floor(Math.random() * (98 - 75 + 1)) + 75;
// Change 75 and 98 to your preferred range
```

### Add More Screens
1. Create new component in `/components`
2. Add to screens array in `pages/index.jsx`

## 🌟 Features to Explore

1. **Welcome Screen** - Floating hearts animation
2. **Interaction Screen** - Playful questions
3. **Measuring Screen** - Animated progress bar
4. **Result Screen** - Share your score

## 💡 Tips

- Use Chrome DevTools mobile view to test responsiveness
- Press F12 to open developer tools
- Check console for any errors
- Animations work best on modern browsers

## 🎉 You're Ready!

Enjoy building and customizing your Cuteness Test app! 💖

For issues or questions, check the main README.md file.
