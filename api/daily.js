// Sends the daily prompt
import Twilio from 'twilio';

export default async function (_, res) {
  const client = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

  await client.messages.create({
    to: process.env.MY_NUMBER,
    from: process.env.TWILIO_NUMBER,
    body: 'Did you complete your habit today? Reply DONE or SKIP.'
  });

  res.send('OK');
}
