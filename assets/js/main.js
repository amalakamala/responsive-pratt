var boton = document.getElementById("btn-submit");
boton.addEventListener("click", function(e){
  	e.preventDefault();
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var mensaje = document.getElementById("text-area");

	var nombreValido = document.getElementsByClassName("form-input")[0];
	var emailValido = document.getElementsByClassName("form-input")[1];
	var mensajeValido = document.getElementsByClassName("form-input")[2];

  	if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(name.value))){
		var respuestaNom = document.createElement("span");  
		respuestaNom.classList.add("el-span")
    	var textoNom = document.createTextNode("La primera letra debe ser en mayúscula");
    	respuestaNom.appendChild(textoNom);   
    	nombreValido.appendChild(respuestaNom);
  	}

  	if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email.value)) ) {
    	var respuestaEmail = document.createElement("span");  
		respuestaEmail.classList.add("el-span")
    	var textoEmail = document.createTextNode("Ingrese su correo correctamente");
    	respuestaEmail.appendChild(textoEmail);   
    	emailValido.appendChild(respuestaEmail);
    }

    if(mensaje.value == ""){
    	var respuestaMensaje = document.createElement("span");  
		respuestaMensaje.classList.add("el-span")
    	var textoMensaje = document.createTextNode("Ingrese su mensaje");
    	respuestaMensaje.appendChild(textoMensaje);   
    	mensajeValido.appendChild(respuestaMensaje);
    }
})
