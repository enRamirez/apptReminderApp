require('dotenv').config();
const express = require('express');
const twilio = require('twilio');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

const twilioClient = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

app.post('/sendReminder', (req, res) => {
  const { to, body } = req.body;
  twilioClient.messages.create({
    body,
    to, // Text this number
    from: process.env.PHONE_NUMBER,
  })
  .then((message) => res.send({ message: `Message sent with SID: ${message.sid}` }))
  .catch((error) => res.status(500).send({ error: error.message }));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save user with hashedPassword
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Verify user and password
  const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
  res.json({ token });
});