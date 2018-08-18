var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var ship = new Image();
ship.src = "/Users/alvin/Documents/Projects/spaceforce/img/blueship1.png";
var soundtrack = new Audio("/Users/alvin/Documents/Projects/spaceforce/audio/soundtrack.mp3");
soundtrack.play();

function game(){
	ctx.drawImage(ship,canvas.width/2-ship.width/2,canvas.height/2-ship.height/2);
	requestAnimationFrame(game);
}

game();