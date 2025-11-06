# Flexy Beast - iOS Installation Guide

## ✅ What's Been Updated

1. **Apple-specific meta tags** added to `index.html`
2. **manifest.json** updated with proper icon references
3. **Service worker** improved for iOS compatibility

## 📱 Next Steps to Install on iPhone

### 1. Create App Icons

You need to create the following icon files in PNG format:
- `icon-180.png` (180x180) - Required for iOS
- `icon-152.png` (152x152) - iPad
- `icon-120.png` (120x120) - iPhone
- `icon-76.png` (76x76) - iPad mini
- `icon-192.png` (192x192) - Android/Web
- `icon-512.png` (512x512) - Android/Web
- `icon-32.png` (32x32) - Favicon

**Quick way to create icons:**
1. Create one 512x512 PNG image with your app logo/icon
2. Use an online tool like https://www.pwabuilder.com/imageGenerator or https://realfavicongenerator.net/ to generate all sizes
3. Save all the generated files in the `flexy-beast` folder

### 2. Deploy to GitHub Pages (or your hosting)

Make sure all files including the icons are in your GitHub repository.

### 3. Install on iPhone

1. Open Safari on your iPhone
2. Navigate to your GitHub Pages URL (e.g., `https://yourusername.github.io/flexy-beast/`)
3. Tap the **Share** button (square with arrow)
4. Scroll down and tap **"Add to Home Screen"**
5. Customize the name if needed (it should show "Flexy Beast")
6. Tap **"Add"**

The app will now appear on your home screen and work like a native app!

## 🔧 Technical Details

- **iOS Support**: iOS 11.3+ (Service Workers)
- **Display Mode**: Standalone (no browser UI)
- **Status Bar**: Default style (can be changed to "black" or "black-translucent")
- **Offline Support**: Yes, via Service Worker

## 🐛 Troubleshooting

If the "Add to Home Screen" option doesn't appear:
- Make sure you're using Safari (not Chrome or other browsers)
- Check that all icon files exist and are accessible
- Clear Safari cache and try again
- Make sure the site is served over HTTPS (GitHub Pages uses HTTPS)

