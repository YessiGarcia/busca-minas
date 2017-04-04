var numero = document.getElementsByClassName("numero");
for (var i = 0;i<numero.length; i++){
	numero[i].addEventListener ("click", cercania);
	}

var vacio = document.getElementsByClassName("vacio");
for (var i=0; i<vacio.length; i++){
	vacio[i].addEventListener("click", seguir);
	}

var bomba = document.getElementsByClassName("bomba");
	for (var i=0; i<bomba.length; i++){
		bomba[i].addEventListener("click", explotar);
	}

var reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", inicio);

function inicio (){
	location.reload();
}


function explotar (){
	var imagen = document.createElement("img");
	imagen.src = "bomba.png";
	imagen.style = "width: 40px ";
	this.appendChild(imagen);
}

function seguir (){
	this.style.backgroundColor = "red";
}

function cercania (){
	this.innerText = this.value;
} 

