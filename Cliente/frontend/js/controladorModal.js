const form = document.getElementById("formInicio")
const parrafo = document.getElementById("warnings")

const cantidad = document.getElementById("cantidad")
const numero = document.getElementById("tarjeta")
const direccion = document.getElementById("direccion")



form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (numero.value.length < 16 || numero.value.length > 16 || isNaN(numero.value)) {
        window.alert("El número no es valido")
    entrar = true
    } 
    if (direccion.value.length < 10) {
        window.alert("La dirección no es valida")
        entrar = true
    }
    if (cantidad.value.length < 1) {
        window.alert("La cantidad no es valida")
        entrar = true
    }
        
    
    


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href = "principal.html";
    }
})