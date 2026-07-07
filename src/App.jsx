import { useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // This is the call to your serverless function
      const response = await fetch('/api/analyze');
      
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      
      // The pop-up you want to see
      alert(data.message);
      
    } catch (error) {
      console.error('Fetch error:', error);
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
        <input type="text" placeholder="Paste YouTube link here..." />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Video'}
        </button>
      </form>
    </div>
  );
}

export default App;