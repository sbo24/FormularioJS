window.addEventListener("load", function () {
    //Capturamos los elementos del formulario
    const formulario = document.querySelector("#formulario");
    const usuario = document.querySelector("#user");
    const passwd = document.querySelector("#passwd");
    const newPasswd = document.querySelector("#newpasswd");
    const fechaNac = document.querySelector("#fechaNac");
    const condiciones = document.querySelector("#condiciones");


    //función de validación del formulario asociada al evento submit
    formulario.addEventListener("submit", evento => {
        // lo primero es prevenir el comportamiento por defecto del submit
        evento.preventDefault();
        evento.stopPropagation();

        //la variable valido comienza valiendo true. si encontramos un fallo cambiamos a false
        let valido = true;

        if (!validaUser(usuario)) {
            valido = false;
        }
        if (!validaPass(passwd)) {
            valido = false;
        }
        if (!validaPass2(newPasswd, passwd)) {
            valido = false;
        }
        if (!validaFecha(fechaNac)) {
            valido = false;
        }
        if (!validaCheck(condiciones)) {
            valido = false;
        }

        //si no hemos encontrado ningún campo incorrecto forzamos ahora sí el envío del formulario
        if (valido) {
            formulario.submit();
        }
    });

    ///////////////////////////////////////////////////////////////
    // a partir de aquí pondremos funciones de validación
    ///////////////////////////////////////////////////////////////

    //valida que el user es correcto. devolverá true si correcto y false si no
    //la función recibe el elemento input usuario, no su valor!!!!!
    function validaUser(inputUsuario) {
        //sino tiene nada escribe un mensaje
        if (inputUsuario.value === "") {
            inputUsuario.parentNode.querySelector("p").textContent = "El usuario no contiene nada "
            return false;
        } else {
            inputUsuario.parentNode.querySelector("p").textContent = "";
            return true;
        }
    }




    function validaPass(el) {
        if (el.value.length < 8) {
            marcaError(el, "El password debe tener al menos 7 caracteres")
            return false;
        } else {
            marcaValido(el);
            return true;
        }
    }

    function validaPass2(newPass, oldPass) {
        if (newPass.value === oldPass.value) {
            newPass.parentNode.querySelector(".error-feedback").textContent = "";
            return true;
        } else {
            newPass.parentNode.querySelector(".error-feedback").textContent = "El password debe coincidir";
            return false;
        }
    }

    function validaFecha(el) {
        if (el.value) {
            el.parentNode.querySelector(".error-feedback").textContent = "";
            return true;
        } else {
            el.parentNode.querySelector(".error-feedback").textContent = "Tiene que seleccionar una fecha";
            return false;
        }
    }


    function validaCheck(el) {
        if (el.checked) {
            el.parentNode.querySelector(".error-feedback").textContent = "";
            return true;
        } else {
            el.parentNode.querySelector(".error-feedback").textContent = "Tiene que marcar la casilla";
            return false;
        }
    }
    ///////////////////////////////////////////////////////////////
    // funciones de utilidad:
    ///////////////////////////////////////////////////////////////

    //pone un mensaje pasado al parrafo de error asociado al elemento pasado 
    //y pone la clase de error al padre
    function marcaError(elemento, mensaje) {
        elemento.parentNode.querySelector(".error-feedback").textContent = mensaje;
        elemento.parentNode.classList.add("error");
    }
    //quita el mensaje de error al .error-feedback del elemento pasado 
    //y quita la clase de error al padre 
    function marcaValido(elemento) {
        elemento.parentNode.querySelector(".error-feedback").textContent = "";
        elemento.parentNode.classList.add("remove");
    }


    function marcaError(el, mensaje) {
        el.parentNode.querySelector(".error-feedback").textContent = mensaje;
        el.parentNode.classList.add("error");
    }
    function marcaValido
        (el) {
        el.parentNode.querySelector(".error-feedback").textContent = "";
        el.parentNode.classList.add("valido");
    }



});