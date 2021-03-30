const app = require("express")();
const PORT = process.env.PORT || 3001;

app.get("/Back-End",  (req, res) => {res.json({message:"This is ChessDebut 1.0"});});
app.listen(PORT, () => {console.log('App up at port ${PORT}');});
