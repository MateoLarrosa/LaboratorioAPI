let array = [];

let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2');

let resultadoSumar = document.getElementById('resultadoSumar');
let resultadoMultiplicar = document.getElementById('resultadoMultiplicar');
let resultadoRestar = document.getElementById('resultadoRestar');
let mostrarArrayElement = document.getElementById('mostrarArray');

let botonSumar = document.getElementById('sumar');
let botonMultiplicar = document.getElementById('multiplicar');
let botonRestar = document.getElementById('restar');
let botonMostrarArray = document.getElementById('mostrarArrayBtn');

botonSumar.addEventListener('click', () => {
    let rta = sumar(num1.value, num2.value);
    resultadoSumar.innerHTML = rta;
});

botonMultiplicar.addEventListener('click', () => {
    let rta = multiplicar(num1.value, num2.value);
    resultadoMultiplicar.innerHTML = rta;
});

botonRestar.addEventListener('click', () => {
    let rta = restar(num1.value, num2.value);
    resultadoRestar.innerHTML = rta;
});

const sumar = (valor1, valor2) => {
  resultado = parseInt(valor1) + parseInt(valor2);
  array.push(resultado);

  return resultado;
};

botonMostrarArray.addEventListener('click', () => {
    mostrarArrayElement.innerHTML = array.join(', '); 
});


const multiplicar = (valor1, valor2) => {
    resultado = parseInt(valor1) * parseInt(valor2);
    array.push(resultado);
  
    return resultado;
  };

const restar = (valor1, valor2) => {
    resultado = parseInt(valor1) - parseInt(valor2);
    array.push(resultado);
  
    return resultado;
  }

mostrarArray = () => {

}