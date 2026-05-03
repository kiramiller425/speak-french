import React, { useState } from 'react';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { getFrenchIPA } from '../utils/ipaMapping';
import './FrenchSpeaker.css';

/**
 * FrenchSpeaker Component
 * Main component for speaking French text with IPA display
 */
const FrenchSpeaker = () => {
  const [inputText, setInputText] = useState('');
  const {
    voices,
    selectedVoiceIndex,
    setSelectedVoiceIndex,
    isSpeaking,
    error,
    speak,
    stop,
  } = useSpeechSynthesis();

  const ipaText = getFrenchIPA(inputText);

  const handleSpeak = () => {
    speak(inputText);
  };

  const handleStop = () => {
    stop();
  };

  const handleClear = () => {
    setInputText('');
    stop();
  };

  return (
    <div className="french-speaker-container">
      <div className="input-section">
        {/* Voice Selection */}
        <div className="control-group">
          <label htmlFor="voice-select">Voice:</label>
          <select
            id="voice-select"
            value={selectedVoiceIndex}
            onChange={(e) => setSelectedVoiceIndex(Number(e.target.value))}
            disabled={isSpeaking}
            className="voice-select"
          >
            {voices.map((voice, index) => (
              <option key={index} value={index}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>

        {/* Text Input */}
        <div className="control-group">
          <label htmlFor="french-input">Enter French text:</label>
          <textarea
            id="french-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isSpeaking}
            className="text-input"
            placeholder="Type French words or phrases here..."
            rows={4}
          />
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button
            onClick={handleSpeak}
            disabled={!inputText.trim() || isSpeaking}
            className="btn btn-primary"
            aria-label="Speak the French text"
          >
            {isSpeaking ? '🔊 Speaking...' : '🔊 Speak'}
          </button>

          {isSpeaking && (
            <button
              onClick={handleStop}
              className="btn btn-secondary"
              aria-label="Stop speaking"
            >
              ⏹️ Stop
            </button>
          )}

          <button
            onClick={handleClear}
            disabled={!inputText.trim() && !isSpeaking}
            className="btn btn-tertiary"
            aria-label="Clear all text"
          >
            🗑️ Clear
          </button>
        </div>

        {/* Error Display */}
        {error && <div className="error-message">{error}</div>}
      </div>

      {/* IPA Display */}
      {inputText.trim() && (
        <div className="ipa-section">
          <h2>Pronunciation (IPA)</h2>
          <div className="ipa-display">{ipaText}</div>
          <p className="ipa-note">
            The IPA notation shows how to pronounce the words. Common French
            words are included in our dictionary.
          </p>
        </div>
      )}

      {/* Empty State */}
      {!inputText.trim() && (
        <div className="empty-state">
          <p>Enter some French text above to get started!</p>
          <p className="hint">Try words like: "bonjour", "merci", "au revoir"</p>
        </div>
      )}
    </div>
  );
};

export default FrenchSpeaker;
