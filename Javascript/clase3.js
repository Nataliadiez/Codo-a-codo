let elemento = document.querySelector("#elemento")

const sumar = () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let resultado = parseInt(num1) + parseInt(num2)
    elemento.innerHTML += `<p>El resultado de la suma de ${num1} y ${num2} es: ${resultado}</p>`
}

const restar = () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let resultado = parseInt(num1) - parseInt(num2)
    elemento.innerHTML += `<p>El resultado de la resta de ${num1} y ${num2} es: ${resultado}</p>`
}

const multiplicar = () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let resultado = parseInt(num1) * parseInt(num2)
    elemento.innerHTML += `<p>El resultado de la multiplicación de ${num1} y ${num2} es: ${resultado}</p>`
}

const dividir = () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let resultado = parseInt(num1) / parseInt(num2)
    if (parseInt(num2) !== 0) {
        elemento.innerHTML += `<p>El resultado de la división de ${num1} y ${num2} es: ${resultado}</p>`
    } else if (parseInt(num2) === 0) {
        elemento.innerHTML += `<p>Error matemático. No se puede dividir un número por cero</p>`
    }
    
}

const limpiar = () => {
    elemento.innerHTML = ""
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")

    num1.value = ""
    num2.value = ""
    
}