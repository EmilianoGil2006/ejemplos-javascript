//alert("hola mundo")//

function mostrar() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    let resultado = document.getElementById(resultado);
    resultado = numero1 + numero2;

    let objResultado = document.getElementById("resultado");
    objResultado.innerHTML = resultado;

}