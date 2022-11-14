import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io.connect(process.env.REACT_APP_SERVER_URL);

function App() {
  const [messagee, setMessagee] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, messagee]);
    socket.emit('client:sentmessage', messagee);
    setMessagee('');
  };

  useEffect(() => {
    socket.on('server:sendmessage', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  return (
    <div className='App'>
      <header>
        <h1>Hellooo</h1>
        <p>Please enter your message</p>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Hola mundo'
            value={messagee}
            onChange={(e) => setMessagee(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      </header>
      <main>
        <ul>
          {messages.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
