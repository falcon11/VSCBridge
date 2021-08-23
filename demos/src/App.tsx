import React, { useState, useEffect } from 'react';
import bridge from '@vscbridge/webview';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [echoText, setEchoText] = useState('');
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const data = await bridge.callHandler('echo', text);
    setEchoText(String(data));
  };
  useEffect(() => {
    bridge.registerHandler('echo', (data, callback) => {
      callback(data);
    });
  }, []);
  
  return (
    <div className="App">
      <form>
        <label>1212:</label>
        <input onChange={e => setText(e.target.value)}/>
        <br/>
        <button onClick={handleClick}>
          call extension echo method
        </button>
        <br/>
        <label>echoText:</label>
        <p>{echoText}</p>
      </form>
    </div>
  );
}

export default App;
