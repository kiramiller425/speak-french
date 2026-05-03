# 🇫🇷 French Speaker - React Application

A React application that helps users learn French pronunciation through text-to-speech synthesis with IPA (International Phonetic Alphabet) display.

## Features

✨ **Key Features:**

- **Text-to-Speech**: Pronounce French words and phrases using the Web Speech API
- **Voice Selection**: Choose from available system voices (French voices prioritized)
- **IPA Display**: Shows International Phonetic Alphabet notation for a limited set of entered French text (this database is limited)
- **User-Friendly Interface**: Clean, responsive design with real-time feedback
- **Error Handling**: Comprehensive error messages for better user experience
- **Accessibility**: Proper ARIA labels and keyboard support

## Tech Stack

- **React**: Latest React version with hooks
- **Web Speech API**: Browser-native text-to-speech synthesis [Click here for more information](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- **CSS3**: Modern styling with gradients and animations
- **Responsive Design**: Mobile-friendly interface

## Project Structure

```
src/
├── components/
│   ├── FrenchSpeaker.js      # Main component with UI
│   └── FrenchSpeaker.css     # Component styles
├── hooks/
│   └── useSpeechSynthesis.js # Custom hook for speech synthesis
├── utils/
│   └── ipaMapping.js         # IPA mapping for French words
├── App.js                    # Root component
├── App.css                   # App styles
└── index.js                  # Entry point
```

## Installation & Setup

1. **Download or clone the repo:**

2. **Open a terminal in the project directory:**

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`

## Usage

1. **Enter French Text**: Type French words or phrases in the textbox
2. **Select Voice**: Choose a voice from the dropdown (French voices are recommended)
3. **Click Speak**: Press the "Speak" button to hear the pronunciation
4. **View IPA**: The IPA display shows phonetic notation for the entered text (if it exists in its database)
5. **Clear**: Use the Clear button to reset the text

### Supported Words

The application includes an IPA dictionary with common French words:
- Greetings: "bonjour", "bonsoir", "au revoir"
- Common phrases: "merci", "s'il vous plaît", "excusez"
- Numbers: "zéro" through "dix"
- Days and months: "lundi", "janvier", etc.
- And more!

For words not in the dictionary, the IPA will display the original text.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.
It bundles React in production mode and optimizes the build.
Currently not working yet.

### `npm test`
Launches the test runner in interactive watch mode. Currently there are no tests yet.

## Extending the Application

### Adding More IPA Mappings

Edit `src/utils/ipaMapping.js` and add entries to the `frenchToIPA` dictionary:

```javascript
frenchToIPA = {
  'your-word': 'jɔʁ wɔʁd',
  // ...
};
```

### Customizing Styles

Modify CSS files in:
- `src/App.css` - Main app styles
- `src/components/FrenchSpeaker.css` - Component styles

### Adding Features

Some ideas for enhancement:
- Integrate with a real IPA API (e.g., Wiktionary API)
- Add word suggestions/autocomplete
- Save favorite words
- Quiz mode for learning
- Audio recording and playback comparison
- Detailed pronunciation lessons

## Troubleshooting

**Issue**: No voice selected or audio not working
- **Solution**: Refresh the page. Voices load asynchronously.

**Issue**: IPA display shows original text
- **Solution**: The word may not be in our dictionary. 

**Issue**: Speech synthesis not working
- **Solution**: Check browser compatibility. Try a Chromium-based browser (Chrome, Edge).

## License

This project is open source and available under the Mozilla Public License Version 2.0.

---

**Happy Learning! 🎉** 

Bonne chance! (Good luck!)

