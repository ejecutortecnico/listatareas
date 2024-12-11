const tarea = document.getElementById("tarea")
const fecha = document.getElementById("fecha")
const tareas = document.getElementById("tareas")
let boton = document.getElementById("miBoton");
const caja = document.getElementById("contenedor")


caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "blue";
});

caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "red";
});

document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
    if(evento.key == "Enter"){
        guardarTarea()
    }
});
// Agregar un evento de clic
boton.addEventListener("click", guardarTarea);
let listaTareas = JSON.parse(localStorage.getItem('tareas'));
function guardarTarea(){
    let txtTarea = tarea.value
    let txtFecha = fecha.value    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = "<h1>" + txtTarea + "</h1><p>" + txtFecha + "</p>"
    tareas.appendChild(nuevaTarea)
    let tareaGuardar = {"tarea":txtTarea, "fecha":txtFecha}
    listaTareas.push(tareaGuardar)
    localStorage.setItem('tareas', JSON.stringify(listaTareas));
}

function cargarTareas(){
    let listaTareas = JSON.parse(localStorage.getItem('tareas'));
    
    for(let i=0; i<listaTareas.length;i++){
        const nuevaTarea = document.createElement('li');
        nuevaTarea.innerHTML = "<h1>" + listaTareas[i].tarea + "</h1><p>" + listaTareas[i].fecha + "</p>"
        tareas.appendChild(nuevaTarea)
    }
}