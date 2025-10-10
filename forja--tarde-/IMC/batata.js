function calcIMC(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resposta = document.getElementById("res")

   if(isNaN(peso) || isNaN(altura)){
    resposta.textContent = "Digite apenas numeros"
    document.getElementById("msg").textContent = "Calculos usam apemas numeros"
   }
   var imc = (peso / (altura * altura)).toFixed(2)
   resposta.textContent = imc

   imc = parseFloat(imc)
   
   if(imc > 40){
       document.getElementById("msg").textContent = "obesidade grau 3"
       document.getElementById("msg").style = "red"
   }else if(imc > 35 && imc <= 39.9){
       document.getElementById("msg").textContent = "obesidade grau 2"
       document.getElementById("msg").style = "purple"
   }else if(imc >= 30 && imc <= 34.9){
       document.getElementById("msg").textContent = "obesidaDE grau 1"
       document.getElementById("msg").style = "orange"
   }else if(imc >= 25 && imc <= 29.9){
       document.getElementById("msg").textContent = "sobrepeso"
       document.getElementById("msg").style = "chocolate"
   }else {
       document.getElementById("msg").textContent = "peso adequado"
       document.getElementById("msg").style = "green"

   }
}