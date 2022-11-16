
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
    
    
    
    if(contraseña.value.length < 4){
        warnings += `<br>La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href = "principal.html";


    }
})