import { useCallback, useEffect, useState } from 'react';

/**
 * Custom hook for managing Web Speech API
 * Provides text-to-speech functionality with voice selection
 */
export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState(null);

  // Populate available voices
  useEffect(() => {
    const populateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      // Filter for French voices
      const frenchVoices = availableVoices.filter(
        (voice) => voice.lang.startsWith('fr')
      );
      setVoices(frenchVoices.length > 0 ? frenchVoices : availableVoices);
      
      if (frenchVoices.length === 0 && availableVoices.length > 0) {
        setSelectedVoiceIndex(0);
      }
    };

    // Voices might not be loaded yet
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    } else {
      populateVoices();
    }

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Speak text with selected voice
  const speak = useCallback(
    (text) => {
      if (!text.trim()) {
        setError('Please enter some text');
        return;
      }

      if (!('speechSynthesis' in window)) {
        setError('Speech synthesis not supported in your browser');
        return;
      }

      try {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        setError(null);

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voices[selectedVoiceIndex];
        utterance.lang = voices[selectedVoiceIndex].lang;
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = (event) => {
          setError(`Speech error: ${event.error}`);
          setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        setError(err.message);
        setIsSpeaking(false);
      }
    },
    [selectedVoiceIndex, voices]
  );

  // Stop speech
  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  return {
    voices,
    selectedVoiceIndex,
    setSelectedVoiceIndex,
    isSpeaking,
    error,
    speak,
    stop,
  };
};
