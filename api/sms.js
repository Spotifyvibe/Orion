// Receives Twilio webhook → replies DONE / SKIP
export default function (req, res) {
  const { Body, From } = req.body;
  const today = new Date().toISOString().slice(0, 10);

  // VERY small in-memory store (resets if server sleeps – good enough for 1 user)
  if (!global.streak) { global.streak = 0; global.last = null; }

  const cmd = (Body || '').trim().toUpperCase();
  let msg = '';

  if (cmd === 'DONE') {
    if (global.last !== today) global.streak++;
    global.last = today;
    msg = `🔥 Streak: ${global.streak} day${global.streak > 1 ? 's' : ''}!`;
  } else if (cmd === 'SKIP') {
    msg = 'No worries—tomorrow counts double 💪';
  } else {
    msg = 'Reply DONE or SKIP';
  }

  res.setHeader('Content-Type', 'text/xml');
  res.send(`<Response><Message>${msg}</Message></Response>`);
}
