var canvas;
var ctx;
var FPS = 50;
var anchoF = 60;
var altoF = 105;


//Creacion del objeto item

function item(x,y,v){

	this.x = x;
	this.y = y;
	this.v = v;
	this.color = "red";
	this.number = Math.floor(Math.random() * 9) + 1;

	this.dibuja = function(){
		this.y -= -1*this.v;
		ctx.fillStyle = "red";
	    ctx.fillRect(this.x,this.y,anchoF,altoF);
	    ctx.font = "90px Helvetica";
	    ctx.fillStyle = "black";
	    ctx.fillText(this.number, this.x+8,this.y + 85);
	    ctx.fill();
	}

	window.addEventListener("click", function(event){
		var mouse = {
			x: innerWidth,
			y: innerHeight
		};
		mouse.x = event.clientX;
		mouse.y = event.clientY;
		console.log("esto es la X del click "+ mouse.x);
		console.log("esto es la Y del click "+ mouse.y);
		this.x = x;
		this.y = y+200;
		console.log(x);
		console.log(y);
	});
}

function inicializa(){
  canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

 //CREAMOS LOS BLOQUES

  setInterval(function(){
  		principal();
		var clicked = false;

  },1000/FPS);
}


function borraCanvas(){
  canvas.width=750;
  canvas.height=500;
}

var number = []
function creaNumber(){
	for (var i = 0; i<3; i++){
		var x = i * Math.floor(Math.random() * 350) + 30
		var y = 0
		var v = Math.random()*5 + 0.5
		number.push(new item(x,y,v))
		number[i].dibuja()
	}
}

function principal(){
  borraCanvas();
  creaNumber()
  }
