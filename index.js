const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
    <style>
      /* Center the form horizontally */
      form {
        display: block;
        margin: 200 auto;
        text-align: center;

      }
      /* Center the form vertically */
      .form-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: aquamarine;

      }
    </style>
  </head>
  <body>
    <div class="form-container">
        <form action="/submit" method="post" style="color: blue;">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" required>
            <br><br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required>
            <br><br>
            <button type="submit">Submit</button>
          </form>
    </div>
  </body>
</html>

  `);
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Do something with the data, for example:
  console.log(`Name: ${name}, Email: ${email}`);

  res.send(`Thanks ${name} for submitting the form!
  Your email is : ${email}
  `);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
