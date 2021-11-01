// Variables
// palabra reservada nombre de la variable
var nombre_variable; // el valor que tiene por defecto es Undefinied, porque no se le asignó uno.
// palabra reservada nombre de la variable = asignamos el valor
let otra_variable = "hola"; // tipo String
const PI = 3.1416; // tipo Number Float
let numero2 = 18; // tipo Number Entero
let hay_clases = true // booleano
let terminoLaClase = false;

// Tipo: undefinied, numero, string, booleano, objeto, funcion, array, chart
console.log(PI * numero2);

console.log(numero2 + 36 + "" + otra_variable) // el signo + es para sumar y concatenar

// Condicionales

/* if (num2 > PI) {

} else {

}

if (hay_clases === true && terminoLaClase !== true){

}
 */
// elemento.innerhtml es para poder modificar lo de adentro
let elemento = document.querySelector(".elemento")
/* elemento.innerHTML = "esta es una variable no definida"
elemento.innerHTML += '<p>' + otra_variable + '</p>'
document.write("<h3>Bienvenido</h3>") */


// El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante Javascript para cambiar dinámicamente los contenidos y aspecto de la página

//let mensaje = prompt("Introduce tu mensaje:")
//elemento.innerHTML += "<h3>" + mensaje + "</h3>"; // concatenando con +
//elemento.innerHTML += `<h3>${mensaje}</h3>`; // template string

let succes_alert = document.querySelector(".alert")
//succes_alert.innerHTML += `<h3>${mensaje}</h3>`; // template string

//let menu = prompt("Selecciona el pedido: \n1) Milanesa con fritas \n2)Milanesa napolitana \n3)Fideos con tuco");
/* if (menu === '1') { // valor y el tipo tiene que ser igual
    succes_alert.innerHTML = "Usted ha elegido Milanesa con fritas"
} else if (menu === '2') {s
    succes_alert.innerHTML = "Usted ha elegido Milanesa napolitana"
} else if (menu === '3') {
    succes_alert.innerHTML = "Usted ha elegido Fideos con tuco"
} else {
    alert("Por favor ingrese una opción correcta.")
    
} */

// El switch es diferente que el if en que se concentra en casos no en condiciones, el switch evalúa solamente valores mientras que el if evalúa condiciones

/* switch (menu) {
    case "1":
        succes_alert.innerHTML = "Usted ha elegido Milanesa con fritas"
        break;
    
    case "2":
        succes_alert.innerHTML = "Usted ha elegido Milanesa napolitana"
        break;

    case "3":
        succes_alert.innerHTML = "Usted ha elegido Fideos con tuco"
        break;

    default:
        break;
} */

let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número")); 

let resultado = `El resultado de la suma de ${num1} + ${num2} es = ${(num1 + num2).toFixed(2)}` 
succes_alert.innerHTML = resultado

// Un callback es 