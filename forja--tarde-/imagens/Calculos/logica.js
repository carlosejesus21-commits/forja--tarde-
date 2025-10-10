function soma(){
    var numero1  = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
//    console.log(numero1, numero2)
}

function sub(){
    var numero1 = document.getElementById("s1").valueAsNumber
    var numero2 = document.getElementById("s2").valueAsNumber
    var resposta = document.getElementById("respSub")

    resposta.textContent = numero1 - numero2
}

function multi(){
    var numero1  = parseFloat(document.getElementById("m1").value)
    var numero2  = parseFloat(document.getElementById("m2").value)
    document.getElementById("respMulti").textContent = numero1 * numero2
}

function Divi(){
    var numero1 = parseFloat(document.getElementById("d1").value)
    var numero2  = parseFloat(document.getElementById("d2").value)
    var resp = document.getElementById("respDivi")

    if(numero2 !== 0){
        resp.innerHTML = (numero1 / numero2).toFixed(2)
    }else{
        resp.innerHTML = "Não se divide por 0"
    }
}
