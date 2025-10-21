export default async function (req, res) {
  const params = new URLSearchParams(await req.text());
  const body   = params.get('Body') || '';
  const text   = body.trim().toUpperCase();

  let msg = '';
  if (text === 'DONE')        msg = '🔥 Streak +1!';
  else if (text === 'SKIP')   msg = 'No worries—tomorrow counts double 💪';
  else                        msg = 'Reply DONE or SKIP';

  res.setHeader('Content-Type', 'text/xml');
  res.send(`<Response><Message>${msg}</Message></Response>`);
}
