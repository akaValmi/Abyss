function generarEntregasRealizadas() {
    let n = 0;
    motoristas[0].entregasRealizad.forEach (function name (ent) {
        document.getElementById('entregas-realizadas').innerHTML +=
        `
        <div>
            <div class="entregas-header"><p class="mx-2 mt-3">Entrega #${ent.ordenNum}</p></div>
            <div class="mx-2 mt-2">
                <p id="descripcion${n}">Descripción:</p>
                <p>Dirección: ${ent.direcc}</p>
            </div>
            <div class="centrar">
                <button class="btn-pendientes mx-2" onclick="generarProductosRealizad(${n})" data-toggle="modal" data-target="#modalDetalles"><i class="fa-solid fa-circle-info mr-2"></i></i>Detalles</button>
            </div>
        </div><br><br>
        `

        ent.productos.forEach (function name (prod) {
            document.getElementById('descripcion'+n).innerHTML +=
            `
                ${prod.nombre},
            `
        })

        n++
    })
}

generarEntregasRealizadas();

function generarProductosRealizad(n) {
    document.getElementById('modal-header').innerHTML =
    `
    <h5 style="text-align: center">Detalles - Entrega #${motoristas[0].entregasRealizad[n].ordenNum}</h5>
    <button data-dismiss="modal">x</button>
    `

    document.getElementById('productos').innerHTML = '';
    motoristas[0].entregasRealizad[n].productos.forEach (function name (prod) {
        document.getElementById('productos').innerHTML +=
        `
        <li>${prod.nombre} - ${prod.nombreEmp} - L.${prod.precio}</li>
        `
    })

    document.getElementById('prodInfo').innerHTML =
    `
    <div>
        <p>Dirección: ${motoristas[0].entregasRealizad[n].direcc}</p>
        <p>Nombre del cliente: ${motoristas[0].entregasRealizad[n].Clientnombre}</p>
        <p>Teléfono: +504 ${motoristas[0].entregasRealizad[n].telfClient}</p>
    </div>
    `
}