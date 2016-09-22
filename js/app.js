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
		if (hora < 10) {
			hora = '0' + hora;
		}
  		if (minuto < 10) { 
  			minuto = '0' + minuto;
  		}
		var horaMensaje = hora + " : " + minuto + " ";
		var hora = document.createElement("span");
		hora.innerHTML = horaMensaje;
		contenedorMensaje.insertBefore(hora, contenedorMensaje.childNodes[0]);
	}

    texto.addEventListener("keydown", function (){
		boton.disabled = false;
		var limite = 140;
		tweetVacio (texto);
		caracteres (limite, texto);
	});

	function caracteres (limite, texto) {
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

	function tweetVacio (texto) {
		var cantidadCaracteres = texto.value.length;

		if (texto.value == null || texto.length == 0 || texto.value === "" || /^\s+$/.test(texto.value)) {
			boton.disabled = true;
		}
	}

	texto.addEventListener("keyup", function (e) {
		var tecla = e.keyCode;
		heightTextArea(tecla);
	});

	function heightTextArea (tecla) {
        if (tecla == 13) {
            texto.rows++;
        } else if (tecla == 8) {
            texto.rows--;
        }
        if (texto.rows < 4) {
            texto.rows = 4;    
        }
    }

});


