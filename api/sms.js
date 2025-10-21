module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.send('<Response><Message>Bot alive</Message></Response>');
};
