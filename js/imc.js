//Calculadora de Indice de Masa Corporal e Indicador de grado //

//Contenedor Tabla IMC
const btncalcular = document.getElementById('calcular')

//Funcion para calcular el IMC por peso en kg y altura en cm
btncalcular.addEventListener('click', () => {

  let altura = document.getElementById("altura").value / 100;
    let peso = document.getElementById("peso").value;
  
    let imc = peso / altura ** 2;
      Swal.fire('Su IMC ES:' + Math.round(imc), '', 'info')// Alerta que muestra IMC redondeado por Math
    let text="" //Condicional que muestra mensaje segun el IMC de la persona
    if (imc < 18.5) {
      text="Usted está con IMC magro"
    } else if (imc < 24.9) {
      text="Usted está con un IMC normal"
    } else if (imc < 29.9) {
      text="Usted tiene un IMC con sobrepeso"
    } else if (imc < 39.9) {
      text="Usted tiene un IMC con obesidad"
    } else if (imc > 39.9) {
      text="Usted tiene un IMC con obesidad mórbida"
    }
    document.getElementById("text_area").innerText=text // muestra Mensaje a traves de etiqueta html Dinamica
  
   
})



