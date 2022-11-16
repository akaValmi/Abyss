var motoristas = [
    {
        nombre: "Camilo",
        apellido: "Sesto",
        codigo: 4615966,
        correo: "navidadsinti@icloud.com",
        telef: "3241-1866",
        ciudad: "Tegucigalpa",
        entregasPend: [
            {
                ordenNum: 123,
                productos: [
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                ],
                direcc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit consectetur, tincidunt quam in, iaculis velit.",
                Clientnombre: "Poco Alexy",
                telfClient: "3596-4585",
            },
            {
                ordenNum: 125,
                productos: [
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                ],
                direcc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit consectetur, tincidunt quam in, iaculis velit.",
                Clientnombre: "Poco Alexy",
                telfClient: "3596-4585",
            },
            {
                ordenNum: 127,
                productos: [
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                ],
                direcc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit consectetur, tincidunt quam in, iaculis velit.",
                Clientnombre: "Poco Alexy",
                telfClient: "3596-4585",
            },
            {
                ordenNum: 129,
                productos: [
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                ],
                direcc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit consectetur, tincidunt quam in, iaculis velit.",
                Clientnombre: "Poco Alexy",
                telfClient: "3596-4585",
            },
        ],
        entregasTomad: [
            {
                ordenNum: 115,
                productos: [
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                ],
                direcc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit consectetur, tincidunt quam in, iaculis velit.",
                Clientnombre: "Poco Alexy",
                telfClient: "3596-4585",
            },
            {
                ordenNum: 119,
                productos: [
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                ],
                direcc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit consectetur, tincidunt quam in, iaculis velit.",
                Clientnombre: "Poco Alexy",
                telfClient: "3596-4585",
            },
        ],
        entregasRealizad: [
            {
                ordenNum: 107,
                productos: [
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                ],
                direcc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit consectetur, tincidunt quam in, iaculis velit.",
                Clientnombre: "Poco Alexy",
                telfClient: "3596-4585",
            },
            {
                ordenNum: 108,
                productos: [
                    {
                        nombre: "Pollo",
                        nombreEmp: "Crazy Chicken",
                        precio: 265
                    },
                    {
                        nombre: "Manzanas",
                        nombreEmp: "Crazy apple",
                        precio: 265
                    },
                ],
                direcc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit consectetur, tincidunt quam in, iaculis velit.",
                Clientnombre: "Poco Alexy",
                telfClient: "3596-4585",
            },
        ]
    },
]

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

function generarEntregasPendientes() {
    let n = 0;
    motoristas[0].entregasPend.forEach (function name (ent) {
        document.getElementById('entregas-pendientes').innerHTML +=
        `
        <div>
            <div class="entregas-header"><p class="mx-2 mt-3">Entrega #${ent.ordenNum}</p></div>
            <div class="mx-2 mt-2">
                <p>Descripción: ${ent.descrip}</p>
                <p>Dirección: ${ent.direcc}</p>
            </div>
            <div class="centrar">
                <button class="btn-pendientes mx-2"><i class="fa-regular fa-square-plus mr-2" ></i>Tomar orden</button>
                <button class="btn-pendientes mx-2" onclick="generarProductosPend(${n})" data-toggle="modal" data-target="#modalDetalles"><i class="fa-solid fa-circle-info mr-2"></i></i>Detalles</button>
            </div>
        </div><br><br>
        `
        n++
    })
}

generarEntregasPendientes();

function generarEntregasRealizadas() {
    let n = 0;
    motoristas[0].entregasRealizad.forEach (function name (ent) {
        document.getElementById('entregas-realizadas').innerHTML +=
        `
        <div>
            <div class="entregas-header"><p class="mx-2 mt-3">Entrega #${ent.ordenNum}</p></div>
            <div class="mx-2 mt-2">
                <p>Descripción: ${ent.descrip}</p>
                <p>Dirección: ${ent.direcc}</p>
            </div>
            <div class="centrar">
                <button class="btn-pendientes mx-2" onclick="generarProductosRealizad(${n})" data-toggle="modal" data-target="#modalDetalles"><i class="fa-solid fa-circle-info mr-2"></i></i>Detalles</button>
            </div>
        </div><br><br>
        `
        n++
    })
}

generarEntregasRealizadas();



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

function generarProductosRealizad(n) {
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