const form = document.getElementById("formInicio")
const parrafo = document.getElementById("warnings")
const nombre = document.getElementById("nombreCat")
const cantidad = document.getElementById("cantidad")
const descripcion = document.getElementById("descripcionCat")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (nombre.value.length < 3) {
        window.alert("El nombre no es valido")
        entrar = true
    }
    if (descripcion.value.length < 2) {
        window.alert("La descripción no es valida")
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