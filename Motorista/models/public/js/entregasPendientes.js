function generarEntregasPendientes() {
    let n = 0;
    motoristas[0].entregasPend.forEach (function name (ent) {
        document.getElementById('entregas-pendientes').innerHTML +=
        `
        <div>
            <div class="entregas-header"><p class="mx-2 mt-3">Entrega #${ent.ordenNum}</p></div>
            <div class="mx-2 mt-2">
                <p id="descripcion${n}">Descripción:</p>
                <p>Dirección: ${ent.direcc}</p>
            </div>
            <div class="centrar">
                <button class="btn-pendientes mx-2"><i class="fa-regular fa-square-plus mr-3"></i>Tomar orden</button>
                <button class="btn-pendientes mx-2" onclick="generarProductosPend(${n})" data-toggle="modal" data-target="#modalDetalles"><i class="fa-solid fa-circle-info mr-4"></i>Detalles</button>
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

generarEntregasPendientes();

function generarProductosPend(n) {
    document.getElementById('modal-header').innerHTML =
    `
    <h5 style="text-align: center">Detalles - Entrega #${motoristas[0].entregasPend[n].ordenNum}</h5>
    <button data-dismiss="modal">x</button>
    `

    document.getElementById('productos').innerHTML = '';
    motoristas[0].entregasPend[n].productos.forEach (function name (prod) {
        document.getElementById('productos').innerHTML +=
        `
        <li>${prod.nombre} - ${prod.nombreEmp} - L.${prod.precio}</li>
        `
    })

    document.getElementById('prodInfo').innerHTML =
    `
    <div>
        <p>Dirección: ${motoristas[0].entregasPend[n].direcc}</p>
        <p>Nombre del cliente: ${motoristas[0].entregasPend[n].Clientnombre}</p>
        <p>Teléfono: +504 ${motoristas[0].entregasPend[n].telfClient}</p>
    </div>
    `
}