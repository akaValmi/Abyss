const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correoEntrada")
const contraseña = document.getElementById("contraseñaEntrada")
const form = document.getElementById("formInicio")
const parrafo = document.getElementById("warnings")
const año = document.getElementById("tarjetaAño")
const mes = document.getElementById("tarjetaMes")
const numero = document.getElementById("tarjeta")
const cvv = document.getElementById("tarjetaCVV")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""




    if (año.value.length < 4 || año.value.length > 4 || isNaN(año.value) || año.value < 2022) {
        window.alert("El año no es valido")
    entrar = true
    } 
    if (numero.value.length < 16 || numero.value.length > 16 || isNaN(numero.value)) {
        window.alert("El número no es valido")
    entrar = true
    } 

    if (cvv.value.length < 3 || cvv.value.length > 3 || isNaN(cvv.value)) {
        window.alert("El cvv no es valido")
        entrar = true         
    }
    if (mes.value.length < 2 || mes.value.length > 2 || isNaN(mes.value)) {
        window.alert("El mes no es valido")
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