const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("correoEntrada")
const contraseña = document.getElementById("contraseñaEntrada")
const form = document.getElementById("formInicio")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""


    if (email.value.length < 4) {
        warnings += `El correo no es valido <br>`
        entrar = true
    }
    if(nombre.value.length <2){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <2){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    
    if(contraseña.value.length < 4){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href = "inicio.html";


    }
})