export default async function (req, res) {
  const body = await req.body;                 // Vercel gives you raw parsed body
  const text = (body.Body || '').trim().toUpperCase();
  let msg = '';

  if (text === 'DONE')        msg = '🔥 Streak +1!';
  else if (text === 'SKIP')   msg = 'No worries—tomorrow counts double 💪';
  else                        msg = 'Reply DONE or SKIP';

  res.setHeader('Content-Type', 'text/xml');
  res.send(`<Response><Message>${msg}</Message></Response>`);
}
