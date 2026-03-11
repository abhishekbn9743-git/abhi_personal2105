# 🚀 QUICK START GUIDE

## Prerequisites Check

Before starting, make sure you have Node.js installed:

1. Open Command Prompt (cmd)
2. Type: `node --version`
3. If you see a version number (like v16.x.x or higher), you're good!
4. If not, download from: https://nodejs.org/

## Installation (First Time Only)

### Option 1: Double-click `setup.bat`
This will automatically install everything.

### Option 2: Manual Installation
```bash
cd c:\Users\abhis\OneDrive\Suprith\cuteness-test-app
npm install
```

Wait for installation to complete (may take 2-5 minutes).

## Running the App

### Option 1: Double-click `start.bat`
This will start the server and open your browser automatically.

### Option 2: Manual Start
```bash
cd c:\Users\abhis\OneDrive\Suprith\cuteness-test-app
npm run dev
```

Then open your browser to: http://localhost:3000

## Troubleshooting

### Error: "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

### Error: "Port 3000 is already in use"
**Solution:** 
- Close any other apps using port 3000
- Or run on different port: `npm run dev -- -p 3001`

### Error: "Module not found"
**Solution:**
```bash
rmdir /s /q node_modules
npm install
```

### Animations not smooth
**Solution:**
- Use Chrome or Edge browser
- Clear browser cache (Ctrl + Shift + Delete)
- Hard refresh (Ctrl + Shift + R)

## Testing on Mobile

1. Make sure your phone and computer are on the same WiFi
2. Find your computer's IP address:
   - Open Command Prompt
   - Type: `ipconfig`
   - Look for "IPv4 Address" (e.g., 192.168.1.100)
3. On your phone's browser, go to: `http://YOUR_IP:3000`

## Building for Production

```bash
npm run build
npm start
```

## Stopping the Server

Press `Ctrl + C` in the terminal/command prompt.

## File Structure

```
cuteness-test-app/
├── components/        # React components (4 screens)
├── pages/            # Next.js pages
├── styles/           # CSS and Tailwind styles
├── public/           # Static files
├── package.json      # Dependencies
└── README.md         # Full documentation
```

## Need Help?

Check the full README.md or INSTALLATION.md for detailed instructions.

## 🎉 Enjoy!

Your Cuteness Test app is ready to use! 💖
