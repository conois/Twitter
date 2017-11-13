
/*FUNCIONES */ 

/* validar el ingreso de texto */ 
function validarTexto(){
	var txtArea= document.getElementById("comment").value; 
	if (txtArea!=""){
			var btn=document.getElementById("btn"); 
			btn.setAttribute("onclick", "captMess()"); 
	}
}

/* funcion que capta el mensaje */ 

function captMess(){
	//tomo el valor del textArea y lo guardo en una variable 
	var comentario = document.getElementById("comment").value;  
	//limpiar el textArea
	if (comentario != ""){
		document.getElementById("comment").value=""; 
		//Variable con el elemento boton 
		var btn=document.getElementById("btn"); 
		//creando nodo de texto 
		var txtComment= document.createTextNode(comentario); 
		//creando div padre 
		var divMess=document.createElement("div");
		//Creando un parrafo para contener el texto 
		divMess.classList.add("newDiv");
		var txt=document.createElement("p");
		txt.setAttribute("class","parrafoComentario"); 	
		// llamo al div Dios ; 
		var cont=document.getElementById("cont"); 
		txt.appendChild(txtComment);
		divMess.appendChild(txt);
		mess.appendChild(divMess); 


		//agregando hora
		var momentoActual= new Date();
		var hora= momentoActual.getHours(); 
		var minutos= momentoActual.getMinutes(); 
		var horaImprimible= hora + ":" + minutos ; 
		txt.innerHTML+= "<br>" + horaImprimible;
	}
	
	var parNum=document.getElementById("parNum");
	parNum.innerHTML=140;

}

function contar(){ 
	var txtNum=document.getElementById("comment").value; 
	var largo= txtNum.length;
	var contador = 139; 
	contador= contador - largo;
	var parNum=document.getElementById("parNum"); 
	parNum.innerHTML= contador;


		if (largo >= 120){
			var contador=document.getElementById("parNum"); 
			contador.classList.add("colorDos");  
			contador.classList.remove("colorTres");
			var boton=document.getElementById("btn"); 
			boton.removeAttribute("disabled");
			if(largo >= 130){
				var contador=document.getElementById("parNum"); 
				contador.classList.remove("colorDos"); 
				contador.classList.add("colorTres"); 
				contador.classList.remove("colorUno");
				var boton=document.getElementById("btn"); 
				boton.removeAttribute("disabled");
					if(largo>=140){
						var contador=document.getElementById("parNum"); 
						contador.classList.remove("colorTres");
						contador.classList.add("colorUno");
						var boton=document.getElementById("btn"); 
						boton.setAttribute("disabled", "true"); 
						return false; 
					}
			}
		}
		
	contador=139;
	}

//ejecutar esta funcion si al presionar teclar enter se agrande en 10 px el textarea 
//editando el alto del textarea 
function enter(){
	var txtArea=document.getElementById("comment"); 
	contador=60
	comment.style.height= (contador) +"px"; 
	contador= contador + 10; 
}