const contenedor = document.querySelector("#contenedor");

document.querySelector("#button-menu").addEventListener('click', () =>{
    // Cuando se de click quitarle al contenedor la clase "active"
    //Si no lo tiene se lo pone, si lo tiene se lo quita
    contenedor.classList.toggle('active');
});

function comprobarAncho(){
    if(window.innerWidth <= 768){ //Tamaño interno de la ventana
        contenedor.classList.remove('active');
    }else{
        contenedor.classList.add('active');
    }
}

comprobarAncho();

// Agregar un evento cuando la pantalla cambie de tamaño
window.addEventListener('resize', () =>{
    comprobarAncho();
});