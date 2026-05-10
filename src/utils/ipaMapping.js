/**
 * IPA (International Phonetic Alphabet) utility for French words
 * Maps French words to their IPA representations
 */

// Dictionary of common French words with their IPA equivalents
const frenchToIPA = {
  // Common greetings
  'bonjour': 'bɔ̃ʒuʁ',
  'bonsoir': 'bɔ̃swaʁ',
  'salut': 'saly',
  'revoir': 'ʁəvwaʁ',
  'comment': 'kɔmɑ̃',
  
  // Common words
  'oui': 'wi',
  'non': 'nɔ̃',
  'merci': 'mɛʁsi',
  'rien': 'ʁjɛ̃',
  's\'il': 'sil',
  'plaît': 'plɛ',
  'excusez': 'ɛkskize',
  'pardon': 'paʁdɔ̃',
  'désolé': 'dezɔle',
  'au': 'o',
  'de': 'də',
  'je': 'ʒə',
  'ne': 'nə', 
  'pas': 'pa', 
  'te': 'tə',
  'tu': 'ty',
  'vous': 'vu',
  'ça': 'sa',
  'vas': 'va',
  'va': 'va',
  
  // Common phrases
  'allez': 'ale',
  'très': 'tʁɛ',
  'bien': 'bjɛ̃',
  'comprends': 'kɔ̃pʁɑ̃',
  'parlez': 'paʁle',
  'plus': 'ply',
  'lentement': 'lɑ̃təmɑ̃',
  
  // Numbers
  'zéro': 'zeʁo',
  'un': 'œ̃',
  'deux': 'dø',
  'trois': 'tʁwa',
  'quatre': 'katʁ',
  'cinq': 'sɛ̃k',
  'six': 'sis',
  'sept': 'sɛt',
  'huit': 'ɥit',
  'neuf': 'nœf',
  'dix': 'dis',

  // Days of week
  'lundi': 'lɛ̃di',
  'mardi': 'maʁdi',
  'mercredi': 'mɛʁkʁədi',
  'jeudi': 'ʒødi',
  'vendredi': 'vɑ̃dʁədi',
  'samedi': 'samdi',
  'dimanche': 'dimɑ̃ʃ',

  // Months
  'janvier': 'ʒɑ̃vje',
  'février': 'fevʁije',
  'mars': 'maʁs',
  'avril': 'avʁil',
  'mai': 'mɛ',
  'juin': 'ʒɥɛ̃',
  'juillet': 'ʒɥije',
  'août': 'ut',
  'septembre': 'sɛptɑ̃bʁ',
  'octobre': 'ɔktɔbʁ',
  'novembre': 'nɔvɑ̃bʁ',
  'décembre': 'desɑ̃bʁ',

  // Common verbs
  'être': 'ɛtʁ',
  'avoir': 'avwaʁ',
  'aller': 'ale',
  'faire': 'fɛʁ',
  'pouvoir': 'puvwaʁ',
  'vouloir': 'vulwaʁ',
  'devoir': 'dəvwaʁ',
  'savoir': 'savwaʁ',

  // Colors
  'rouge': 'ʁuʒ',
  'bleu': 'blø',
  'vert': 'vɛʁ',
  'jaune': 'ʒon',
  'noir': 'nwaʁ',
  'blanc': 'blɑ̃',
  'rose': 'ʁoz',
  'orange': 'ɔʁɑ̃ʒ',
};

/**
 * Get IPA representation for a French word
 * Falls back to the original text if not found in dictionary
 */
export const getFrenchIPA = (text) => {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let words = text
    .toLowerCase()
    .trim()
    .match(/[^\s-]+-?/g); // split on spaces and dashes

  return words.map((word) => {
    // Remove punctuation
    const cleanWord = word.replace(/[.,!?;:\-]/g, '');
      
    // Check if exact match exists
    if (frenchToIPA[cleanWord]) {
      return frenchToIPA[cleanWord];
    }

    return '';
  }).join(' ');
};

/**
 * Check if a word exists in the IPA dictionary
 */
export const isWordInDictionary = (word) => {
  return Boolean(frenchToIPA[word.toLowerCase().trim()]);
};

/**
 * Get all available dictionary words (useful for autocomplete)
 */
export const getDictionaryWords = () => {
  return Object.keys(frenchToIPA);
};
