
const dato = document.querySelector("#datos");
const main = document.querySelector("main");
let counter = 0;


agregar.addEventListener("click", (e) => {
    e.preventDefault()
    task(dato.value)
})

function task(id) {
    counter ++;
    main.innerHTML += `
    <div class="task-container">
    <label>
    ${id}
    <input type="checkbox"  id="${counter} ">
<button type="submit" id="eliminar">eliminar</button>
</label>
</div>
`
dato.value ="";
updateState();
}
main.addEventListener("click", (event)=>{
let e = event.srcElement.nodeName;
if (e == "BUTTON") {
    removeChildNode(main)
}
if(e == "INPUT"){
updateState()
}
})
function removeChildNode(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
let updateState =()=>{
let contenedor = main.querySelectorAll("div")
let completado = main.querySelectorAll('input[type="checkbox"]:checked')
stats.innerHTML = `las tareas a realizar son ${contenedor.length} y se completaron ${completado.length} de ellas`

}





/*video de ayuda en youtube   https://www.youtube.com/watch?v=BqJUh7HrPUE*/
