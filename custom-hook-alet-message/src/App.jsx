import { useState } from 'react';
import { useAlert } from './hooks/useAlert';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');

  const isVisible = useAlert({ message, duration: 3000 });

  return (
    <div>
      <h1>Custom hook: useAlert</h1>
      <button onClick={() => setMessage('This is an alert message')}>
        Show message
      </button>
      {isVisible && <div className="alert">{message}</div>}
    </div>
  );
};

export default App;
