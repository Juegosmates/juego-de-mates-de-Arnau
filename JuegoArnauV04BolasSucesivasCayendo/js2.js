var canvas;
var ctx;
var FPS = 50;
var anchoF = 60;
var altoF = 60;



//Creacion del objeto item

function item(x,y,v){
	this.x = x;
	this.y = y;
	this.v = v;
	this.dibuja = function(){
		this.y -= -1*this.v;
		ctx.fillStyle = "red";
	  ctx.fillRect(this.x,this.y,anchoF,altoF);
	  ctx.fill();
	}
	this.compruebaColision = function(){
		if(this.y==250){
			console.log("colisión!!!")
			bola[2]=new item(200,0,4)
			}
	}
}



function inicializa(){
  canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
  setInterval(function(){
  		principal();
	  },1000/FPS);
}


function borraCanvas(){
  canvas.width=750;
  canvas.height=500;
}



var bola = []
bola[1] = new item(50,0,5)
function creaBola(){
	bola[1].dibuja()
	bola[1].compruebaColision()
	bola[2].dibuja()
}


function principal(){
  borraCanvas();
	creaBola()
}
