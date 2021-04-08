function getopeningmovewhite(){

    var letter = ['a','b','c','d','e','f','g','h'];
    var rand = Math.floor(Math.random()*7);
    var temp = letter[rand];
    return `${temp}2` + temp + Math.floor(Math.random()*2 + 3);

}

module.exports.getopeningmovewhite = getopeningmovewhite;