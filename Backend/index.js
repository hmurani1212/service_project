const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require("cors");
const nodemailerRoutes = require("./Nodemailer/mailer"); 

const app = express();
const port = 5040;
  
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', nodemailerRoutes);

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
