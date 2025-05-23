import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://35.222.98.86:8080/api")
      .then(res => res.json())
      
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
