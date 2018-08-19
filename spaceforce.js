var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var ship = new Image();
ship.src = "/Users/alvin/Documents/Projects/spaceforce/img/blueship1.png";
var soundtrack = new Audio("/Users/alvin/Documents/Projects/spaceforce/audio/soundtrack.mp3");
soundtrack.play();
soundtrack.loop = true;
document.addEventListener("keydown",onkeydown,false);
document.addEventListener("keyup",onkeyup,false);
var keystate = {};
stars = [];

function star(){
	this.x = Math.floor(Math.random()* canvas.width);
	this.y = Math.floor(Math.random()* canvas.height);
}

for(i=0; i<500; i++){
	var s = new star();
	stars.push(s);
}

var player = {
	x: canvas.width/2+ship.width/2,
	y: canvas.height/2+ship.height/2,
	vx: 0,
	vy: 0,
	health: 100,
}

function game(){
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	checkkeys();
	ctx.drawImage(ship,player.x += player.vx, player.y += player.vy);
	for(i=0; i<500; i++){
		ctx.beginPath();
		ctx.arc(stars[i].x,stars[i].y,1,0,2*Math.PI);
		ctx.fillStyle = "#FFFFFF";
    	ctx.fill();
	}
	requestAnimationFrame(game);
}

function onkeydown(key){
	if(key.keyCode == "37"){
		keystate[key.keyCode] = true;
	}
	if(key.keyCode == "39"){
		keystate[key.keyCode] = true;
	}
}

function onkeyup(key){
	for(key in keystate){
		keystate[key] = false;
	}
}

function checkkeys(){
	if(keystate["37"] && player.x > 0){
		player.vx = -15;
	}
	else if(keystate["39"] && player.x + ship.width < canvas.width){
		player.vx = 15;
	}
	else{
		player.vx = 0;
	}
}

game();