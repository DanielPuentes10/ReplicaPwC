
/*
document.getElementById("login"),addEventListener("click", function() {
    if(validacion()){
        this.window.location.href ="https://www.google.com/";
    }

});

*/
  

function validateCredentials(username, password) {

    var nombre = document.getElementById('nombre');
    var clave = document.getElementById('clave');


    

    // Ejemplo de datos de usuario almacenados en el servidor
    const users = [
      { username: "Daniel", password: "desarrollador" }
      
    ]
    
    // Buscar en la lista de usuarios
    const user = users.find(u => u.username === username && u.password === password);
    
    // Devolver verdadero si se encontró un usuario coincidente
    return user !== undefined;

    
  }
  
  // Uso de la función

  
  



function validacion(){

var  nombre = document.getElementById('nombre');
var clave = document.getElementById('clave');

var error = document.getElementById('error');


var mensajesError = [];    
error.style.color = 'chocolate';
    if(nombre.value ==='' || nombre.value === null ){
        mensajesError.push("the name field is empty");
        
    }
    if(clave.value ===''|| clave.value === null){
        mensajesError.push("the password field is empty");
        
    }
    
   
    
    if (validateCredentials(nombre.value, clave.value)) {
        //console.log("Credenciales válidas");
        //mensajesError.push(nombre.value,clave.value);
        this.window.location.href ="https://danielpuentes10.github.io/";
      } else {
        mensajesError.push("invalid data");
        //mensajesError.push(nombre.value,clave.value);
      }

    error.innerHTML = mensajesError.join(',');
    return false;
    
}
 
function validacion2(){

    var nombre2 = document.getElementById('nombre2');
    var clave2 = document.getElementById('clave2');
    var clave3 = document.getElementById('clave3');
    var email = document.getElementById('email');
    var organizacion = document.getElementById('organizacion');
    var titulo = document.getElementById('titulo');
    var error2 = document.getElementById('error2');
    
    
    var mensajesError = [];    
    error2.style.color = 'chocolate';
        if(nombre2.value ==='' || nombre2.value === null ){
            mensajesError.push("the name field is empty");
            
        }
        if(clave2.value ===''|| clave2.value === null){
            mensajesError.push("the password field is empty");
            
        }
        if(email.value ===''|| email.value === null){
            mensajesError.push("the email field is empty");
            
        }
        if(organizacion.value ===''|| organizacion.value === null){
            mensajesError.push("the organization field is empty");
            
        }
        if(titulo.value ===''|| titulo.value === null){
            mensajesError.push("the job title field is empty");
            
        }
        if(clave2.value.length < 8 ){
            mensajesError.push("password must be at least 8 characters");
    
        }

        if(clave2.value != clave3.value){
            mensajesError.push("passwords must match");
        }
        

        error2.innerHTML = mensajesError.join(',');
        return false;
    }



const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    // mostrar y esconder icono de la clave - cambiarlo
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
 
    // validacion form login

    const enviar = document.getElementById("enviar");

enviar.addEventListener("click", validar);

function validar(e) {
  e.preventDefault();

  const campoNombre = document.getElementById("nombre");
  let valido = true;

  if (!campoNombre.value) {
    const nombreError = document.getElementById("nombreError");
    nombreError.classList.add("visible");
    campoNombre.classList.add("invalido");
    nombreError.setAttribute("aria-hidden", false);
    nombreError.setAttribute("aria-invalid", true);
  }
  return valido;
}
/*
(function() {

    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
    .forEach(function(form){
        form.addEventListener('submit',function (event) {
            if(!form.checkValidity()){
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        },false)
      })
})()        

*/


const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});