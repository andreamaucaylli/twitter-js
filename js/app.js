window.addEventListener("load", function() {
    var boton = document.getElementById("publicar");
    var texto = document.getElementById("texto");
	contador.innerHTML = 140;
 	boton.disabled = true;

    boton.addEventListener("click", function (e){
    	e.preventDefault();
    	var contenedorMensaje = document.createElement("div");
    	publicar(texto.value, contenedorMensaje);
    	hora(contenedorMensaje);
 		texto.value = "";
 		contador.innerHTML = 140;
	});

	function publicar (texto, contenedorMensaje) {
 		contenedorMensaje.classList.add("formatoMensaje");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensaje.childNodes[0]);
	}

	function hora (contenedorMensaje) {
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		if(hora < 10) {
			hora = '0' + hora;
		}
  		if(minuto < 10) { 
  			minuto = '0' + minuto;
  		}
		var horaMensaje = hora + " : " + minuto + " ";
		var hora = document.createElement("span");
		hora.innerHTML = horaMensaje;
		contenedorMensaje.insertBefore(hora, contenedorMensaje.childNodes[0]);
	}

    texto.addEventListener("keyup", function (){
	boton.disabled = false;
	var limite = 140;
	caracteres(limite, texto);
	//heightTextArea(texto);
	});

	/*function heightTextArea (texto) {
    	var enters  = texto.value.match(/\n/g);
    	var sinEntersEspacios = texto.value.trim().length;
    	var numeroEnters = enters.length;

    	if (enters > 4 && texto.value.length > 0) {
    		texto.setAttribute('rows', enters);
			boton.disabled = false;
		} else {
    		boton.disabled = true;
    	}
 	}*/

	function caracteres (limite,texto) {
		var cantidadCaracteres = texto.value.length;
		var contador = document.getElementById("contador");
		contador.innerHTML = limite - cantidadCaracteres;

		if( texto.value == null || texto.length == 0 || /^\s+$/.test(texto.value) ) {
			boton.disabled = true;
		}
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


