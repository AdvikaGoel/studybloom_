import React, { useState } from 'react';
import './Generator.css';

export default function Generator() {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [format, setFormat] = useState('notes');

  const mockStudyMaterials = {
    math: {
      algebra: `## Algebra Fundamentals

### Key Concepts:
1. **Variables & Expressions**
   - Variables represent unknown quantities
   - Expressions combine variables and numbers

2. **Equations**
   - Linear equations: ax + b = c
   - Quadratic equations: ax² + bx + c = 0

3. **Solving Equations**
   - Isolate the variable
   - Perform same operation on both sides

### Practice Problems:
- Solve: 2x + 5 = 13 → x = 4
- Solve: x² - 4 = 0 → x = ±2

### Tips for Success:
✨ Always check your work by substituting back
✨ Practice different types regularly`,

      geometry: `## Geometry Essentials

### Shapes & Properties:
- **Triangle**: 3 sides, angles sum to 180°
- **Square**: 4 equal sides, angles 90°
- **Circle**: Radius, diameter, circumference

### Key Formulas:
- Area of triangle = 1/2 × base × height
- Area of circle = πr²
- Perimeter = sum of all sides

### Theorems:
- Pythagorean Theorem: a² + b² = c²
- Similar triangles have proportional sides`
    },
    science: {
      biology: `## Biology Basics

### Cell Structure:
- **Nucleus**: Contains DNA, controls cell
- **Mitochondria**: Powerhouse, produces energy
- **Chloroplasts**: (plants only) Photosynthesis
- **Cell Membrane**: Controls what enters/exits

### Photosynthesis:
- Formula: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂
- Takes place in chloroplasts
- Produces glucose and oxygen

### DNA & Genetics:
- DNA structure: Double helix
- Carries genetic information
- Inherited from parents`,

      physics: `## Physics Fundamentals

### Forces & Motion:
- **Newton's 1st Law**: Objects at rest stay at rest
- **Newton's 2nd Law**: F = ma
- **Newton's 3rd Law**: Action = Reaction

### Energy:
- **Kinetic Energy**: KE = 1/2 × m × v²
- **Potential Energy**: PE = mgh
- Energy is conserved in isolated systems

### Waves:
- Speed = Frequency × Wavelength
- Types: Mechanical, Electromagnetic
- Properties: Amplitude, frequency, wavelength`
    },
    history: {
      ancient: `## Ancient Civilizations

### Mesopotamia (3500-539 BCE):
- Located between Tigris and Euphrates
- Invented writing system (cuneiform)
- Hammurabi's Code: Early legal system

### Ancient Egypt (3100-30 BCE):
- Unified by Pharaohs
- Built pyramids as tombs
- Developed advanced irrigation

### Classical Greece (800-146 BCE):
- Democracy in Athens
- Olympic Games
- Philosophy: Socrates, Plato, Aristotle`,

      medieval: `## Medieval Period (500-1500 CE)

### Key Events:
- Fall of Roman Empire (476 CE)
- Rise of Islamic Empire
- European feudalism system
- Crusades (1096-1291)

### Society Structure:
- King → Nobles → Knights → Peasants
- Feudalism: Land for loyalty
- Church was powerful institution

### Notable Figures:
- Charlemagne: Holy Roman Emperor
- Joan of Arc: Military leader
- Gutenberg: Invented printing press`
    }
  };

  const handleGenerate = async () => {
    if (!subject || !topic) {
      alert('Please select both subject and topic!');
      return;
    }

    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const material = mockStudyMaterials[subject]?.[topic];
      if (material) {
        let content = material;
        
        if (format === 'quiz') {
          content = `## Quick Quiz\n\n1. What is...?\n2. Define...\n3. Explain...`;
        } else if (format === 'summary') {
          content = `## Summary\n\n${material.split('\n').slice(0, 10).join('\n')}\n\n...and more!`;
        }
        
        setGeneratedContent(content);
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="generator">
      <div className="generator-header">
        <h2>✨ Study Material Generator</h2>
        <p>Let AI help you create perfect study materials!</p>
      </div>

      <div className="generator-grid">
        {/* Input Panel */}
        <div className="generator-panel input-panel">
          <h3>📚 Customize Your Content</h3>

          <div className="form-group">
            <label>Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">Select Subject</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="english">English</option>
            </select>
          </div>

          <div className="form-group">
            <label>Topic</label>
            <select 
              value={topic} 
              onChange={(e) => setTopic(e.target.value)}
              disabled={!subject}
            >
              <option value="">Select Topic</option>
              {subject === 'math' && (
                <>
                  <option value="algebra">Algebra</option>
                  <option value="geometry">Geometry</option>
                </>
              )}
              {subject === 'science' && (
                <>
                  <option value="biology">Biology</option>
                  <option value="physics">Physics</option>
                </>
              )}
              {subject === 'history' && (
                <>
                  <option value="ancient">Ancient Civilizations</option>
                  <option value="medieval">Medieval Period</option>
                </>
              )}
            </select>
          </div>

          <div className="form-group">
            <label>Difficulty Level</label>
            <div className="difficulty-buttons">
              {['easy', 'medium', 'hard'].map(level => (
                <button
                  key={level}
                  className={`difficulty-btn ${difficulty === level ? 'active' : ''}`}
                  onClick={() => setDifficulty(level)}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Format</label>
            <div className="format-buttons">
              {['notes', 'quiz', 'summary'].map(fmt => (
                <button
                  key={fmt}
                  className={`format-btn ${format === fmt ? 'active' : ''}`}
                  onClick={() => setFormat(fmt)}
                >
                  {fmt.charAt(0).toUpperCase() + fmt.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="generate-btn"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span> Generating...
              </>
            ) : (
              '🚀 Generate Content'
            )}
          </button>
        </div>

        {/* Output Panel */}
        <div className="generator-panel output-panel">
          <h3>📖 Your Study Material</h3>
          {generatedContent ? (
            <div className="content-output">
              <div className="markdown-content">
                {generatedContent.split('\n').map((line, i) => (
                  <div key={i}>
                    {line.startsWith('##') && <h4>{line.replace('##', '').trim()}</h4>}
                    {line.startsWith('###') && <h5>{line.replace('###', '').trim()}</h5>}
                    {line.startsWith('-') && <li>{line.replace('-', '').trim()}</li>}
                    {!line.startsWith('#') && line !== '' && <p>{line}</p>}
                  </div>
                ))}
              </div>
              <div className="output-actions">
                <button className="action-btn">📋 Copy</button>
                <button className="action-btn">💾 Save</button>
                <button className="action-btn">🖨️ Print</button>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-emoji">📝</div>
              <p>Your generated study material will appear here!</p>
              <small>Choose a subject and topic, then click generate</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}