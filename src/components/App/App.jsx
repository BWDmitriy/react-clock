import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return (

  <div className="hero">
      <div className="box">
        <style></style>
        <div className="clock">
          <span id="hrs">{hours}</span>
          <span>:</span>
           <span id="min">{formattedMinutes}</span>
            <span>:</span>
            <span id="sec">{formattedSeconds}</span>
        </div>
      </div>
    </div>
  );
}

export default App;