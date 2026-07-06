import { useState } from 'react';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    
    if (!videoUrl.trim()) {
      alert('Please paste a video link');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>hooked.</h1>
      <p>Diagnose why your short-form video underperforms</p>

      <form onSubmit={handleAnalyze}>
        <input
          type="text"
          placeholder="Paste a YouTube Shorts, TikTok, or Instagram Reels link"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Video'}
        </button>
      </form>

      {result && (
        <div className="result">
          <div className="analysis-output">
            {result.analysis.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;