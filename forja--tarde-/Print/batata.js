function Resultado(){
    var nome = document.getElementById("nome").value
    var idade = parseFloat(document.getElementById("idade").value)

    console.log(typeof nome, typeof idade)

    var a = document.getElementById("printNome")
    var b = document.getElementById("printIdade")

    a.textContent = nome
    a.style.color = "green"

    b.textContent = idade
    b.style.color = "red"

}