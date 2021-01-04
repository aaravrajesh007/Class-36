var GS=0;
var pc;
var form,player,game;
var database;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
   }

function draw(){
    background("white");
   
    drawSprites();
}

