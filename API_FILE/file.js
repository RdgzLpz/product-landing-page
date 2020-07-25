let cajaDatos;
function iniciar() {
    cajaDatos  = document.getElementById("caja-datos");
    let archivos = document.getElementById("archivos");
    archivos.addEventListener("change", procesar); 
}

function procesar(e) {
    cajaDatos.innerHTML = "";
    let archivos = e.target.files;
    let archivo = archivos[0];

    let lector = new FileReader();
    lector.addEventListener("loadstart", comenzar);
    lector.addEventListener("progress", estado);
    lector.addEventListener("loadend", () => mostrar(archivo));

    lector.readAsBinaryString(archivo);
}

function comenzar(e) {
    cajaDatos.innerHTML = '<progress value="0" max="100">0%</progress>'
}
function estado(e) {
    let porcentaje = parseInt(e.loaded / e.total * 100);
    cajaDatos.innerHTML = ' <progress value=" ' + porcentaje + '" max="100" >' + porcentaje + '%</progress> ';
}

function mostrar(archivo) {
    let resultado = e.target.result;
    cajaDatos.innerHTML = 'Nombre:  ' + archivo.name + '<br>';
    cajaDatos.innerHTML += 'Tipo:  ' + archivo.type + '<br>';
    cajaDatos.innerHTML += 'Tamaño: ' + archivo.size + ' bytes<br>';
}

window.addEventListener("load", iniciar);