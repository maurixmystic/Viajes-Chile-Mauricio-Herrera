//Mensaje de Bienvenida
window.onload = function() {
    alert('¡Bienvenido a mi sitio web!');
};

//Mensaje de Bienvenida al pulsar el logo del avion:

// Primero, debes seleccionar el elemento con el id 'qsh-plane'
let qshPlane = document.getElementById('qsh-plane');

// Luego, debes definir la variable 'jetLag'
let Bienvenido = false;

// Finalmente, puedes agregar el event listener a 'qshPlane'
qshPlane.addEventListener("click", function () {
    Bienvenido = !Bienvenido;
    console.log(Bienvenido);
    if (Bienvenido === true) {
        alert('Bienvenido!');    
    } else {
        alert('Listo para Viajar!');        
    }
});



// Oculta o muestra el Parrafo de Quienes Somos Card n2:

// Primero, debes seleccionar el elemento con el id 'qsh-mountain'
let qshMountain = document.getElementById('qsh-mountain');

// Luego, debes seleccionar el elemento con el id 'qsp-mountain'
let qspMountain = document.getElementById('qsp-mountain');

// Finalmente, puedes agregar el event listener a 'qshMountain'
qshMountain.addEventListener("click", function () {
    qspMountain.classList.toggle('d-none'); 
});


// Hacer Girar el Parrafo de la tarjeta Quienes Somos Card n3:

// Primero, seleccionas el elemento con el id 'qsh-route'
let qshRoute = document.getElementById('qsh-route');

// Luego, seleccionas el elemento con el id 'qsp-route'
let qspRoute = document.getElementById('qsp-route');

// Finalmente, agregas el event listener a 'qshRoute'
qshRoute.addEventListener("click", function () {
    // Si 'qspRoute' tiene la clase 'que-vuele', la elimina. Si no la tiene, la agrega.
    qspRoute.classList.toggle('que-vuele'); 

    // Aquí puedes agregar la lógica para detener el giro del texto
    // Por ejemplo, si tienes una clase 'stop-rotate' que detiene el giro, puedes hacer lo siguiente:
    qspRoute.classList.toggle('stop-rotate');
});


//Agregar Brillo a las imagenes al hacer click sobre ellas:

// Primero, seleccionas todas las imágenes dentro de los divs con la clase 'card'
let imagenes = document.querySelectorAll('.card img');

// Luego, recorres todas las imágenes y les agregas el event listener
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function () {
        // Cuando haces clic en una imagen, se agrega o se quita la clase 'brillo'
        this.classList.toggle('brillo');
    });
}
