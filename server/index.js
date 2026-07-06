const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: 'Video URL is required' });
  }

  try {
    const mockAnalysis = `YOUR VIDEO SCORE: 6/10

HERE'S WHAT'S WRONG:

🔴 Your Hook Is Too Slow
Your first 3 seconds don't grab attention. People stop watching.
→ FIX: Start with something surprising or ask a question.

🟡 Low Retention in the Middle
You talk too much without showing visuals.
→ FIX: Add more visuals every 5-10 seconds.

🟢 Strong CTA
You tell people what to do at the end. Good!

WHAT HIGH-PERFORMING CREATORS DO DIFFERENTLY:
- Hook lands in 2 seconds (yours takes 8)
- Scene changes every 5-10 seconds
- More visuals, less talking

YOUR ACTION PLAN:
1. Re-do your hook
2. Add more visuals
3. Re-upload and re-analyze`;

    res.json({
      success: true,
      analysis: mockAnalysis
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});