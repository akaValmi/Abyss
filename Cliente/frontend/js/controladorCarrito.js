const form = document.getElementById("formInicio")
const parrafo = document.getElementById("warnings")
const cantidad = document.getElementById("cantidad")




form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

   
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