const express = require('express');
const router = express.Router();
const db = require('./database');
const opnv = require('../Models/nvop');
const { sequelize } = require('../Models/nvop');

db.authenticate()
    .then(() => console.log("Database connected."))
    .catch(err => console.log(err));

router.get('/', (req, res) => {

    //console.log("default route");
    res.status(200).send("This is route /");

});

router.get('/getOP', async (req, res) => {

    // opnv.findOne({order:sequelize.random()})
    //     .then(encounter => {res.status(200).json({opening:encounter.name,move:encounter.moves})})
    //     .catch(err => console.log(err));
    let rand = Math.floor(Math.random()*3);
    console.log(rand);
    await opnv.findOne({order:sequelize.random()})
        .then(async d =>{
            if(d == null)
                res.sendStatus(404);
            switch(rand){
                case 0:
                    res.status(200).json({question:`Given the ${d.name}. What is the Correct move order`,answer:d.moves});
                    break;
                case 1:
                    let move = d.moves.split(' ');
                    res.status(200).json({question:`Given that they are playing ${d.name}. What is the correct next move?`,answer:move[move.length-1]});
                    break;
                case 2:
                    res.status(200).json({question:`You want to play the ${d.name}. What is the first move?`,answer:d.moves.split(' ')[1]});
                    break;
            }
            }
        )
        .catch(err => res.status(400).send(err));


});

module.exports = router;
