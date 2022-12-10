function generarEntregasTomadas() {
    let n = 0;
    motoristas[0].entregasTomad.forEach (function name (ent) {
        document.getElementById('entregas-tomadas').innerHTML +=
        `
        <div>
            <div class="entregas-header"><p class="mx-2 mt-3">Entrega #${ent.ordenNum}</p></div>
            <div class="mx-2 mt-2">
                <p id="descripcion${n}">Descripción:</p>
                <p>Dirección: ${ent.direcc}</p>
            </div>
            <div class="centrar">
                <button class="btn-pendientes mx-2" onclick="generarFactura(${n})" data-toggle="modal" data-target="#modalFactura"><i class="fa-solid fa-circle-check mr-2" ></i>En Destino</button>
                <button class="btn-pendientes mx-2" onclick="generarProductosTomad(${n})" data-toggle="modal" data-target="#modalDetalles"><i class="fa-solid fa-circle-info mr-2"></i></i>Detalles</button>
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

generarEntregasTomadas();

function generarProductosTomad(n) {
    document.getElementById('modal-header').innerHTML =
    `
    <h5 style="text-align: center">Detalles - Entrega #${motoristas[0].entregasTomad[n].ordenNum}</h5>
    <button data-dismiss="modal">x</button>
    `

    document.getElementById('productos').innerHTML = '';
    motoristas[0].entregasTomad[n].productos.forEach (function name (prod) {
        document.getElementById('productos').innerHTML +=
        `
        <li>${prod.nombre} - ${prod.nombreEmp} - L.${prod.precio}</li>
        `
    })

    document.getElementById('prodInfo').innerHTML =
    `
    <div>
        <p>Dirección: ${motoristas[0].entregasTomad[n].direcc}</p>
        <p>Nombre del cliente: ${motoristas[0].entregasTomad[n].Clientnombre}</p>
        <p>Teléfono: +504 ${motoristas[0].entregasTomad[n].telfClient}</p>
    </div>
    `
}

function generarFactura(n) {
    document.getElementById('modal-header-factura').innerHTML =
    `
    <h5 style="text-align: center">Factura - Entrega #${motoristas[0].entregasTomad[n].ordenNum}</h5>
    <button data-dismiss="modal">x</button>
    `

    document.getElementById('productos-factura').innerHTML = '';
    motoristas[0].entregasTomad[n].productos.forEach (function name (prod) {
        document.getElementById('productos-factura').innerHTML +=
        `
        <li>${prod.nombre} - ${prod.nombreEmp} - L.${prod.precio}</li>
        `
    })

    document.getElementById('prodInfo-factura').innerHTML =
    `
    <div>
        <p>Dirección: ${motoristas[0].entregasTomad[n].direcc}</p>
        <p>Nombre del cliente: ${motoristas[0].entregasTomad[n].Clientnombre}</p>
        <p>Teléfono: +504 ${motoristas[0].entregasTomad[n].telfClient}</p>
    </div>
    
    <hr>
    <div>
        <div class="total">
            <b>Total</b>
            <b>L. ${calcularTotal(n)}</b>
        </div>
        <div class="total">
            <b>Comisión</b>
            <b>L. ${calcularComision(calcularTotal(n))}</b>
        </div>
    </div>
    <br>
    <div class="centrar">
        <button class="btn-pendientes mx-2"><i class="fa-solid fa-circle-check mr-2"></i>Entregada</button>
    </div>
    `
}

function calcularTotal(n) {
    let k = 0;
    for (let i=0; i<motoristas[0].entregasTomad[n].productos.length; i++) {
        k += motoristas[0].entregasTomad[n].productos[i].precio;
    }
    return k;
}

function calcularComision(n) {
    return n*0.10;
}