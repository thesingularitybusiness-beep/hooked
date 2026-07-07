export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

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

  res.status(200).json({
    success: true,
    analysis: mockAnalysis
  });
}