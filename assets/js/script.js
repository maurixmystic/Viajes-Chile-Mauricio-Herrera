// Declaracion de constantes
//SVG Logo
const planeta = document.getElementById("planeta");

//Quienes Somos Cards (h5)
const qshPlane = document.getElementById("qsh-plane");
const qshMountain = document.getElementById("qsh-mountain");
const qshRoute = document.getElementById("qsh-route");

//Quienes Somos Cards (p)
const qspPlane = document.getElementById("qsp-plane");
const qspMountain = document.getElementById("qsp-mountain");
const qspRoute = document.getElementById("qsp-route");


// El avion rotara
planeta.addEventListener("click",function () {
    planeta.classList.toggle('que-vuele'); 
});

// Oculta o Muestra P de Quienes Somos Card 2
qshMountain.addEventListener("click",function () {
    qspMountain.classList.toggle('d-none'); 
});

// Hace girar el P de Quienes Somos Card 3
qshRoute.addEventListener("click",function () {
    qspRoute.classList.toggle('que-vuele'); 
});
