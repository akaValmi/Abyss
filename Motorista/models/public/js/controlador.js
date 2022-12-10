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
                    {
                        nombre: "Baterias AA",
                        nombreEmp: "Raid",
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





function generarNav() {
    document.getElementById('navGeneral').innerHTML = 
    `
    <div class="container-fluid">
      <button class="navbar-toggler"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style="border: 0px">
        <i class="fa-solid fa-bars"></i>
      </button>
      <a class="navbar-brand" href="main-menu.html"><img id="imagenNavbar1" src="img/LogoSINLETRAS.png"><img id="imagenNavbar2" src="img/Logo2LETRAS.png"></a>
      <button class="navbar-toggler" onclick="location.href='main-menu.html'" style="border: 0px">
        <i class="fa-solid fa-house"></i>
    </button>      
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">  
           <a class="navbar-brand" href="main-menu.html"><img id="imagenOffcanvas1" src="img/logo.png"></a>
          <button type="button" class="btn-close cerrar" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>
        <hr size="4px" color="white"/>
        
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

           
            <div id="menuItmens">
                <li class="nav-item">
                    <a class="nav-link" href="perfil.html"><i class="fa-solid fa-user"></i>&emsp;Perfil</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="main-menu.html"><i class="fa-solid fa-house"></i>&emsp;Inicio</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="entregas-pendientes.html"><i class="fa-sharp fa-solid fa-circle-exclamation"></i>&emsp;Entregas Pendientes</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="entregas-tomadas.html"><i class="fa-solid fa-pen-to-square"></i>&emsp;Entregas Tomadas</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="entregas-realizadas.html"><i class="fa-solid fa-calendar-check"></i>&emsp;Entregas Realizadas</a>
                </li>
                <br><br>
                <li class="nav-item">
                    <a class="nav-link" href="index.html"><i class="fa-solid fa-door-open"></i>&emsp;Salir</a>
                </li>

                
            </div>
           
          </ul>
          
        </div>
      </div>
    </div>
    `
}

generarNav();