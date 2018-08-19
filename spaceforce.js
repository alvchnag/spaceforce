var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var ship = new Image();
ship.src = "/Users/alvin/Documents/Projects/spaceforce/img/blueship1.png";
var soundtrack = new Audio("/Users/alvin/Documents/Projects/spaceforce/audio/soundtrack.mp3");
soundtrack.play();

for(i=0; i<100; i++){
	ctx.arc(Math.floor(Math.random()* canvas.width),Math.floor(Math.random()* canvas.height),10,0,2*Math.PI);
	ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fill();
}

var player = {
	x: canvas.width/2-ship.width/2,
	y: canvas.height/2-ship.height/2, 
	health: 100,
}

function game(){
	ctx.drawImage(ship,player.x,player.y);
	window.addEventListener("keydown",onkeydown,false);
	requestAnimationFrame(game);
}

function onkeydown(key){
	if(key == 37){
		player.x -= 10;
	}
}

game();