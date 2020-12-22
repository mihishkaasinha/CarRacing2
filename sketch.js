var database
var gameState = 0
var form, player, game;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
}

function draw()
{
    drawSprites();
}