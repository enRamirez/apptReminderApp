require('dotenv').config();
const express = require('express');
const twilio = require('twilio');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

const twilioClient = twilio(process.env.REACT_APP_ACCOUNT_SID, process.env.REACT_APP_AUTH_TOKEN);

app.post('/sendReminder', (req, res) => {
  const { to, body } = req.body;
  twilioClient.messages.create({
    body,
    to, // Text this number
    from: process.env.REACT_APP_PHONE_NUMBER,
  })
  .then((message) => res.send({ message: `Message sent with SID: ${message.sid}` }))
  .catch((error) => res.status(500).send({ error: error.message }));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});