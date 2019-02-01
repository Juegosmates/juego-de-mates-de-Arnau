var canvas;
var ctx;
var FPS = 50;
var anchoF = 60;
var altoF = 60;
var bola = []


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
		if(this.y==100){
			console.log("colisión!!!")

			x = Math.random()*650+50
			bola.push(new item(x,0,2))

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




bola[0] = new item(50,0,4)

function creaBola(){
	bola[0].dibuja()
	bola[0].compruebaColision()
	for (var i=1;i<20;i++){
		bola[i].dibuja()
		bola[i].compruebaColision()

	}
}


function principal(){
  borraCanvas();
	creaBola()
}
