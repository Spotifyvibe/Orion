export default async function (req, res) {
  const buf = [];
  for await (const chunk of req) buf.push(chunk);
  const body = Buffer.concat(buf).toString();      // raw POST body
  const params = new URLSearchParams(body);
  const text = (params.get('Body') || '').trim().toUpperCase();

  let msg = '';
  if (text === 'DONE')        msg = '🔥 Streak +1!';
  else if (text === 'SKIP')   msg = 'No worries—tomorrow counts double 💪';
  else                        msg = 'Reply DONE or SKIP';

  res.setHeader('Content-Type', 'text/xml');
  res.send(`<Response><Message>${msg}</Message></Response>`);
}
