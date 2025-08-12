import React, { useState, useCallback, useEffect } from 'react';
import './App.css'; // We're using external CSS for styling

const App = () => {
  const [randomString, setRandomString] = useState('');

  const generateRandomString = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomString(result);
  }, []);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div className="container">
      <div className="box">
        <h1>Random String Generator</h1>
        <p className="random-string">{randomString}</p>
        <button onClick={generateRandomString}>Generate New String</button>
      </div>
    </div>
  );
};

export default App;
