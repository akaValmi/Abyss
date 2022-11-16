const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correoEntrada")
const contraseña = document.getElementById("contraseñaEntrada")
const form = document.getElementById("formInicio")
const parrafo = document.getElementById("warnings")
const telefono = document.getElementById("telefonoEntrada")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""


    if (telefono.value.length < 8 || telefono.value.length > 8 || isNaN(telefono.value)) {
        window.alert("El telefono no es valido")
        entrar = true         
    }
           
    if (correo.value.length < 4) {
        window.alert("El correo no es valido")
        entrar = true
    }
    if(nombre.value.length <2){
        window.alert("El nombre no es valido")
        entrar = true
    }
    if(apellido.value.length <2){
        window.alert('El apellido no es valido')
        entrar = true
    }
    
    if(contraseña.value.length < 4){
        window.alert('La contraseña no es valida')
        entrar = true
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href = "principal.html";
    }
})