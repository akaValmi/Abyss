function generarInfoMotorista() {
    document.getElementById('info-motorista').innerHTML =
        `
        <div class="container-info">
            <div class="mx-3 p-2"><p>Nombre</p></div>
            <div class="mx-3 p-2"><p>${motoristas[0].nombre}</p></div>
        </div>
        <div class="container-info">
            <div class="mx-3 p-2"><p>Apellido</p></div>
            <div class="mx-3 p-2"><p>${motoristas[0].apellido}</p></div>
        </div>
        <div class="container-info">
            <div class="mx-3 p-2"><p>Código de Empleado</p></div>
            <div class="mx-3 p-2"><p>${motoristas[0].codigo}</p></div>
        </div>
        <div class="container-info">
            <div class="mx-3 p-2"><p>Correo</p></div>
            <div class="mx-3 p-2"><p>${motoristas[0].correo}</p></div>
        </div>
        <div class="container-info">
            <div class="mx-3 p-2"><p>Teléfono</p></div>
            <div class="mx-3 p-2"><p>${motoristas[0].telef}</p></div>
        </div>
        <div class="container-info">
            <div class="mx-3 p-2"><p>Ciudad</p></div>
            <div class="mx-3 p-2"><p>${motoristas[0].ciudad}</p></div>
        </div>
        `
}

generarInfoMotorista();