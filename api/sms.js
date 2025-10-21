export default function (req, res) {
  const body = (req.body.Body || '').trim().toUpperCase();
  let msg = '';

  if (body === 'DONE')        msg = '🔥 Streak +1!';
  else if (body === 'SKIP')   msg = 'No worries—tomorrow counts double 💪';
  else                        msg = 'Reply DONE or SKIP';

  res.setHeader('Content-Type', 'text/xml');
  res.send(`<Response><Message>${msg}</Message></Response>`);
}
