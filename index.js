const path = require('path');
const app = require("express")();
const PORT = process.env.PORT || 3001;

// for the Node to use the files of React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/Back-End",  (req, res) => {res.json({message:"This is ChessDebut 1.0 - Server!"});});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.listen(PORT, () => {console.log('App up at port ${PORT}');});
