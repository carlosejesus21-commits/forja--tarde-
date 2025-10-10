function Resultado(){
    var nome = document.getElementById("nome").value
    var pet =  document.getElementById("pet").value
    var idade = parseFloat(document.getElementById("idade").value)
    var raca = document.getElementById("raca").value
    var nacionalidade = document.getElementById("nacionalidade").value


     var a = document.getElementById("printNome")
     var b = document.getElementById("printPet")
     var c = document.getElementById("printIdade")
     var d = document.getElementById("printRaca")
     var e = document.getElementById("printNacionalidade")

     a.textContent = nome
     b.textContent = pet
     c.textContent = idade
     d.textContent = raca
     e.textContent = nacionalidade
}