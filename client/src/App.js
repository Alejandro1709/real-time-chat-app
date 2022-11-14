import io from 'socket.io-client';
import './App.css';

const socket = io.connect('http://localhost:2000');

function App() {
  return (
    <div className='App'>
      <h1>Hellooo</h1>
    </div>
  );
}

export default App;
