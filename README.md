# Steam Reviews Sentiment Extension

A Chrome extension that analyzes player sentiment for Steam games. When you visit any Steam game page, instantly see how players feel about that game based on their reviews.

## Features

- **Automatic Detection**: Identifies the current Steam game from URL
- **Sentiment Analysis**: Processes thousands of reviews to determine overall sentiment
- **Instant Display**: Shows results in a beautiful 800×600px popup without scrolling
- **Detailed Statistics**: Total reviews, sentiment type, accuracy, and confidence level
- **Real-time Updates**: Fetches fresh data when you navigate to different games
- **Modern UI**: Built with Tailwind CSS and DaisyUI for a professional look

## How It Works

1. Navigate to any Steam game page (e.g., `store.steampowered.com/app/[game-id]/[game-name]`)
2. Click the extension icon in your Chrome toolbar
3. View instant sentiment analysis including:
   - Overall player sentiment (Positive/Negative/Mixed)
   - Total number of reviews analyzed
   - Confidence and accuracy metrics
4. Use this information to make informed gaming decisions

## Prerequisites

- Chrome 88+ (Manifest V3 support)
- Active internet connection for API calls
- Access to Steam website for game detection

## Installation for Development

1. Clone this repository
```bash
git clone https://github.com/your-username/steam-reviews-extension.git
cd steam-reviews-extension
```

2. Install dependencies
```bash
npm install
```

3. Build the CSS
```bash
npm run build-css
```

4. Load the extension in Chrome
- Open Chrome Extensions page (`chrome://extensions/`)
- Enable "Developer mode"
- Click "Load unpacked" and select this directory

## Installation for Users

### From Chrome Web Store

1. Open the [Steam Reviews Sentiment Extension](https://chromewebstore.google.com/your-extension-link) page
2. Click "Add to Chrome"
3. Grant necessary permissions
4. The extension will be available in your toolbar

# Usage

1. **Visit a Steam game page**
   - Go to any Steam store game page
   - The extension icon will become active

2. **Open the extension**
   - Click the extension icon in your Chrome toolbar
   - A popup window will open instantly

3. **Read the analysis**
   - Game title and total reviews at the top
   - Complete review summary in the middle
   - Detailed statistics at the bottom

## Development

### Build Scripts

```bash
# Generate CSS with Tailwind
npm run build-css

# Generate minified CSS for production
npm run build-css:min

# Watch for changes during development
npm run watch-css
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines

- Follow Chrome Extension best practices
- Maintain Manifest V3 compliance
- Test across different Chrome versions
- Keep UI responsive and accessible

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Author**: Daniel Flores
- **GitHub**: https://github.com/your-username/steam-reviews-extension
- **Issues**: https://github.com/your-username/steam-reviews-extension/issues

## 🔒 Privacy Policy

This extension:
- Only accesses Steam game pages when explicitly activated
- Makes API calls to analyze review sentiment
- Does not store personal data or browsing history
- Uses minimal permissions required for functionality