// Requiring module
const express = require('express');
 
// Creating express object
const app = express();

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
});
 
// Port Number
const PORT = process.env.PORT ||8080;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));