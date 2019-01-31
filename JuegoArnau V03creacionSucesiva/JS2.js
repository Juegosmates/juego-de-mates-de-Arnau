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
	    if(this.y>100 && this.y<103){
	    	console.log("crear nuevo item")
	    	creaInst()
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


var inst = new item(50,50,2)
function creaInst(){
	console.log("llamada funcion creaInst")
	inst.dibuja()
}


function principal(){
  borraCanvas();
   creaInst()
  }
