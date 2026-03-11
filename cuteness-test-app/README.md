# 💖 Cuteness Test App

A fully interactive viral-style web app that tests how cute you are! Built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Beautiful glassmorphism UI with gradient backgrounds
- 🎭 Smooth page transitions and animations
- 💫 Floating hearts and particle effects
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Interactive multi-screen flow
- 📊 Animated progress bar and percentage counter
- 🔄 Try again and share functionality
- 🌟 Viral Instagram/TikTok style design

## 🚀 Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Hooks** - State management

## 📦 Installation

### Prerequisites

Make sure you have Node.js installed (v16 or higher).

### Steps

1. Navigate to the project directory:
```bash
cd cuteness-test-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🎮 How It Works

### Screen Flow:

1. **Welcome Screen** - Animated introduction with floating hearts
2. **Interaction Screen** - Playful question with two button choices
3. **Measuring Screen** - Animated progress bar calculating cuteness
4. **Result Screen** - Final score with confetti and share options

## 📱 Responsive Design

The app is optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  'cute-pink': '#FF6B9D',
  'cute-purple': '#C44569',
  'cute-dark': '#1A0B2E',
}
```

### Animations

Modify animations in `styles/globals.css`:

```css
@keyframes float {
  /* Your custom animation */
}
```

### Score Range

Change the score range in `components/MeasuringScreen.jsx`:

```javascript
const targetScore = Math.floor(Math.random() * (98 - 75 + 1)) + 75;
```

## 📂 Project Structure

```
cuteness-test-app/
├── components/
│   ├── WelcomeScreen.jsx
│   ├── InteractionScreen.jsx
│   ├── MeasuringScreen.jsx
│   └── ResultScreen.jsx
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.jsx
├── styles/
│   └── globals.css
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 🎯 Features Breakdown

### Welcome Screen
- Floating hearts animation
- Animated emoji character
- Gradient text effects
- Smooth button hover effects

### Interaction Screen
- Particle background effects
- Two interactive buttons
- Decorative animated hearts
- Smooth transitions

### Measuring Screen
- Animated percentage counter (0 to final score)
- Progress bar with shimmer effect
- Floating heart particles
- Glowing effects
- Random score generation (75-98%)

### Result Screen
- Confetti animation
- Dynamic messages based on score
- Share functionality (Web Share API)
- Try again button
- Decorative floating elements

## 🌟 Animation Details

- **Page Transitions**: Slide and fade effects
- **Button Interactions**: Scale and glow on hover
- **Background**: Floating particles and hearts
- **Progress Bar**: Smooth fill animation with shimmer
- **Counter**: Incremental number animation
- **Confetti**: Falling celebration particles

## 📝 Notes

- The app uses client-side rendering for animations
- Score is randomly generated between 75-98%
- Share functionality uses native Web Share API (with clipboard fallback)
- All animations are GPU-accelerated for smooth performance

## 🎨 Design Inspiration

Inspired by viral Instagram and TikTok interactive reels with:
- Glassmorphism design
- Neon gradients
- Playful interactions
- Mobile-first approach

## 🚀 Deployment

Deploy to Vercel (recommended):

```bash
npm install -g vercel
vercel
```

Or deploy to any platform that supports Next.js.

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 💖 Enjoy!

Have fun testing your cuteness! 🥺✨
