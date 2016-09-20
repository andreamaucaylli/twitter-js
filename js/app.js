window.addEventListener("load", function() {
    var boton = document.getElementById("publicar");
    boton.disabled = true;
    boton.addEventListener("click", function (e){
    	e.preventDefault();
    	var texto = document.getElementById("texto");
    	mensajes(texto.value);
 		texto.value = "";
 		boton.disabled = true;
	});

	function mensajes (texto) {
    	var contenedorMensaje = document.createElement("div");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensaje.childNodes[0]);
	}

    var texto = document.getElementById("texto");
	texto.addEventListener("keyup", function (){
		boton.disabled = false;
		var limite = 140;
		caracteres(limite);
		heightTextArea();
	}) 

	function heightTextArea () {
    	var texto = document.getElementById('texto');
    	var enters  = texto.value.match(/\n/g);
    	var numeroEnters = enters.length;

    	if (numeroEnters > 0 && texto.value.length > 0) {
    		texto.setAttribute('rows', numeroEnters);
			boton.disabled = false;
		} else if (numeroEnters > 0) {
    		texto.setAttribute('rows', numeroEnters);
			boton.disabled = true;
		} else {
    		texto.setAttribute('rows', 10);
    	}
 	}

	function caracteres (limite) {
		var texto = document.getElementById("texto");
		var cantidadCaracteres = texto.value.length;
		var contador = document.getElementById("contador");
		contador.innerHTML = limite - cantidadCaracteres;

		if (cantidadCaracteres > limite) {
			contador.style.color = "red";
			boton.disabled = true;
		} else if (cantidadCaracteres > 130 && cantidadCaracteres <= limite) {
			contador.style.color = "white";
		} else if (cantidadCaracteres > 120 && cantidadCaracteres < 130) {
			contador.style.color = "yellow";
		}
	}

});


