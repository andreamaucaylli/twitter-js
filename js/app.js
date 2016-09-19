window.addEventListener("load", function() {
    var boton = document.getElementById("publicar");
    boton.addEventListener("click", function(){
    	var texto = document.getElementById("texto").value;
    	var contenedorMensaje = document.createElement("div");
		contenedorMensaje.innerHTML = texto;
    	var mensaje = document.getElementById("mensaje");
    	mensaje.insertBefore(contenedorMensaje, mensaje.childNodes[0]);
		document.getElementById("texto").value = "";
	});
});