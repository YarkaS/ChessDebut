const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("",  (req, res) => {res.send("This is ChessDebut 1.0");});
app.listen(PORT, () => {console.log('App up at port ${PORT}');});
