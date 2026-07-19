import React, { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState({
    studyTime: 0,
    tasksDone: 0,
    streak: 0,
  });

  useEffect(() => {
    // Load stats from localStorage
    const saved = localStorage.getItem('studyStats');
    if (saved) {
      setStats(JSON.parse(saved));
    }
  }, []);

  const motivationalQuotes = [
    "You are capable of amazing things! 💪",
    "Every study session brings you closer to success! 🌟",
    "Your future self will thank you! 🎉",
    "Progress over perfection! 🌸",
    "You've got this! Keep going! 🚀",
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="greeting-card">
          <div className="greeting-emoji">😊</div>
          <h2>Welcome to StudyBloom!</h2>
          <p>Your Japanese-inspired study companion</p>
          <p className="quote">{randomQuote}</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <h3>Study Time</h3>
            <p className="stat-value">{stats.studyTime}h</p>
            <small>this month</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Tasks Done</h3>
            <p className="stat-value">{stats.tasksDone}</p>
            <small>completed</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <h3>Study Streak</h3>
            <p className="stat-value">{stats.streak}</p>
            <small>days in a row</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <h3>Focus Level</h3>
            <p className="stat-value">95%</p>
            <small>keep it up!</small>
          </div>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>✨ AI Study Generator</h3>
          <p>Generate custom study materials, quiz questions, and summaries instantly</p>
        </div>

        <div className="feature-card">
          <h3>🍅 Pomodoro Timer</h3>
          <p>Stay focused with timed study sessions and breaks</p>
        </div>

        <div className="feature-card">
          <h3>✅ Task Manager</h3>
          <p>Organize your study tasks and track progress</p>
        </div>

        <div className="feature-card">
          <h3>📝 Smart Notes</h3>
          <p>Take and organize notes with AI-powered suggestions</p>
        </div>
      </div>
    </div>
  );
}