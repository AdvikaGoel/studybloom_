import React, { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('study'); // 'study' or 'break'
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer complete
          setIsRunning(false);
          if (mode === 'study') {
            setSessions(sessions + 1);
            setMode('break');
            setMinutes(5);
          } else {
            setMode('study');
            setMinutes(25);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, mode, sessions]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
    setMode('study');
  };

  return (
    <div className="timer-container">
      <div className="timer-card">
        <h2>🍅 Pomodoro Timer</h2>
        
        <div className="timer-display">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>

        <div className="timer-mode">
          <p>{mode === 'study' ? '📚 Study Time' : '☕ Break Time'}</p>
        </div>

        <div className="timer-buttons">
          <button className="timer-btn start-btn" onClick={toggleTimer}>
            {isRunning ? '⏸ Pause' : '▶ Start'}
          </button>
          <button className="timer-btn reset-btn" onClick={resetTimer}>
            🔄 Reset
          </button>
        </div>

        <div className="sessions-info">
          <p>Sessions completed today: <span>{sessions}</span></p>
        </div>

        <div className="progress-ring">
          <svg width="200" height="200">
            <circle cx="100" cy="100" r="90" className="progress-ring-circle"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}