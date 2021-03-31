const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

// for the Node to use the files of React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));
//express-static middleware
app.use(express.static("public"))

app.get("/Back-End",  (req, res) => {res.json({message:"This is ChessDebut 1.0 - Server!"});});
app.get("/", function (req,res) {
  res.send("<h1> Chess Debuts are here! </h1>")
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../ChessDebuts/client/build', 'index.html'));
});
app.listen(PORT, () => {console.log('App up at port ${PORT}');});
