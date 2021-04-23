const express = require('express');
const fetch = require('node-fetch');
const cf = require('./functions');
const bodyparser = require('body-parser');
const router = express.Router();
const db = require('./database');
const opnv = require('../Models/nvop');
const { sequelize } = require('../Models/nvop');
const { Sequelize } = require('./database');

db.authenticate()
    .then(() => console.log("Database connected."))
    .catch(err => console.log(err));

router.get('/getOP', async (req, res) => {

    // opnv.findOne({order:sequelize.random()})
    //     .then(encounter => {res.status(200).json({opening:encounter.name,move:encounter.moves})})
    //     .catch(err => console.log(err));
    let rand = Math.floor(Math.random()*4);
    console.log(rand);
    await opnv.findAll({order:sequelize.random(),limit:4})
        .then(async d =>{
            let stats = await fetch(`https://explorer.lichess.ovh/lichess?variant=standard&speeds[]=blitz&speeds[]=rapid&speeds[]=classical&ratings[]=2200&ratings[]=2500&fen=${d[0].fen}`)
                  .then(res => res.json());
            if(d == null)
                res.sendStatus(404);
            switch(rand){
                case 0:
                    res.status(200).json({question:`Given the ${d[0].name}. What is the Correct move order`,movesplayed:"",answer:d[0].moves,wrongans:d[1].moves + "|" + d[2].moves + "|" + d[3].moves,mpafterans:d[0].moves,ww:stats.white,bw:stats.black,dr:stats.draws,topgames:stats.topGames});
                    break;
                case 1:
                    let arr = new Array(3);
                    let count = 0;
                    while(count < arr.length){
                        var t = cf.getopeningmovewhite();
                        while(arr.includes(t) || t == d[0].moves.split(' ')[0]){
                            t = cf.getopeningmovewhite();
                        }
                        arr[count] = t;
                        count++;
                    }
                    res.status(200).json({question:`You want to play the ${d[0].name}. What is the first move?`,movesplayed:"",answer:d[0].moves.split(' ')[0],wrongans:arr[0] + "|" + arr[1] + "|" + arr[2],mpafterans:d[0].moves.split(' ')[0],ww:stats.white,bw:stats.black,dr:stats.draws,topgames:stats.topGames});
                    break;
                case 2:
                    res.status(200).json({question:`What is this opening?`,movesplayed:d[0].moves,answer:d[0].name,wrongans:d[1].name + "|" + d[2].name + "|" + d[3].name,mpafterans:"",ww:stats.white,bw:stats.black,dr:stats.draws,topgames:stats.topGames});
                    break;
                case 3:
                    res.status(200).json({question:d[0].description + "What opening is this description talking about?",movesplayed:"",answer:d[0].name,wrongans:d[1].name + "|" + d[2].name + "|" + d[3].name,mpafterans:d[0].moves,ww:stats.white,bw:stats.black,dr:stats.draws,topgames:stats.topGames});
                    break;
                }
        })
        .catch(err => res.status(400).send(err));


});

router.get('/stats/',(req,res) => {

    let fen = req.body.fen;
    console.log(fen);
    fetch(`https://explorer.lichess.ovh/lichess?variant=standard&speeds[]=blitz&speeds[]=rapid&speeds[]=classical&ratings[]=2200&ratings[]=2500&fen=${fen}`)
        .then(res => res.json())
        .then(txt => {
            
            console.log("Got data");
            res.status(200).send(txt);

        })
        .catch(err => res.sendStatus(400));

});

router.get('/getgame/:id', (req,res) => {

    let id = req.params.id;
    fetch(`https://explorer.lichess.ovh/master/pgn/${id}`)
        .then(res => res.text())
        .then(body => {res.status(200).send(body)})
        .catch(err => res.sendStatus(400));

});

router.get('/opening/:name', async (req,res) => {

    let id = req.params.name;
    opnv.findOne({where: {name: id}})
    .then(async o => {
        if(o != null)
            res.status(200).send(o);
        else
            res.sendStatus(404);
    })
    .catch(err => res.sendStatus(400));

});

module.exports = router;
