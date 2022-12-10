const email = document.getElementById("correoEntrada")
const contraseña = document.getElementById("contraseñaEntrada")
const form = document.getElementById("formInicio")
const parrafo = document.getElementById("warnings")

function ingresar() {
    console.log(document.getElementById('email').value);

    validarEmail('email')
    validarCampoVacio('password');
    window.location.replace('main-menu.html')
}

function validarCampoVacio(id) {
    let campo = document.getElementById(id);
    if (campo.value == '') {
        campo.classList.remove('input-success');
        campo.classList.add('input-error');
    } else {
        campo.classList.remove('input-error');
        campo.classList.add('input-success');
    }
}

function validarEmail(id) {
    let campo = document.getElementById(id);
    const regex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if (regex.test(campo.value)) {
        campo.classList.add('input-success');
        campo.classList.remove('input-error');
    } else {
        campo.classList.add('input-error');
        campo.classList.remove('input-success');
        document.getElementById('error-msj').innerHTML =
        `
        <p>Ingrese un correo electrónico válido</p>
        `
    }
}

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    parrafo.innerHTML = ""
    
    if(regexEmail.test(document.getElementById('correoEntrada').value)){
        window.location.href = "main-menu.html";
    } else {
        document.getElementById('error-msj').innerHTML =
        `
        <p>Ingrese un correo electrónico válido</p>
        `
    }
})