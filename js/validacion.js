function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("regBtn");
    
let InputNombre = document.getElementById("nombre");
let InputApellido = document.getElementById("apellido");
let InputEmail = document.getElementById("email");
let InputPass1 = document.getElementById("password1");
let InputPass2 = document.getElementById("password2");
let Checkbox = document.getElementById("terminos");

    function validacion (){
        if (InputPass1.value != InputPass2.value) {
            return false;
        }else {
                return true;
        }   
    };

    function checkeos () {
        if (InputNombre.value.length>0 && InputApellido.value.length>0 && InputEmail.value.length>0 && InputPass1.value.length>0 && InputPass2.value.length>0 && InputPass1.value.length>=6 && Checkbox.checked){
            return true;
        } else {
            return false;
        }
    };

    function showAlerts () {
        if (checkeos () && validacion()){
            showAlertSuccess ();
            return true;
        
        } else{
            showAlertError ();
            return false;
        
        }
    };

    boton.addEventListener("click", showAlerts);
    
});

