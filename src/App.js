import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Generator from './components/Generator';
import Timer from './components/Timer';
import Tasks from './components/Tasks';
import Notes from './components/Notes';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-emoji">🌸</span>
          <h1>StudyBloom</h1>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`nav-btn ${activeTab === 'generator' ? 'active' : ''}`}
            onClick={() => setActiveTab('generator')}
          >
            ✨ Generate
          </button>
          <button 
            className={`nav-btn ${activeTab === 'timer' ? 'active' : ''}`}
            onClick={() => setActiveTab('timer')}
          >
            🍅 Timer
          </button>
          <button 
            className={`nav-btn ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            ✅ Tasks
          </button>
          <button 
            className={`nav-btn ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            📝 Notes
          </button>
        </div>
      </nav>

      <div className="main-content">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'generator' && <Generator />}
        {activeTab === 'timer' && <Timer />}
        {activeTab === 'tasks' && <Tasks />}
        {activeTab === 'notes' && <Notes />}
      </div>

      <div className="mascot">
        <div className="mascot-emoji">🌸</div>
        <div className="mascot-speech" id="mascot-speech">Keep studying! You're amazing! ✨</div>
      </div>
    </div>
  );
}

export default App;