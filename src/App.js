import React from 'react';
import './App.css';
import FrenchSpeaker from './components/FrenchSpeaker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🇫🇷 French Speaker</h1>
        <p>Learn French pronunciation with IPA</p>
      </header>
      <main>
        <FrenchSpeaker />
      </main>
    </div>
  );
}

export default App;
