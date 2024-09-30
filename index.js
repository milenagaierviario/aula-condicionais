let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite outro número:"))

function comparar(num1, num2) {
  if (num1 === num2) {
    console.log("São iguais!")
  } else if (num1 > num2) {
    console.log("num1 é maior que num2!")
  } else {
    console.log("num1 é maior que num2!")
  }
}

comparar(a, b)

let pokemon = prompt("Escolha um pokemon inicial:")

switch (pokemon) {
  case 'Bulbasauro' :
    console.log('Planta e veneno')
    break
    case 'Charmander' :
      console.log('Fogo')
      break
      case 'Squirtle' :
        console.log('Agua')
        break
        default : 
        console.log('pokemon não encontrado')
}
 
let ensino = prompt("Concluiu o ensino médio?")
let idade = Number(prompt("Quantos anos possui?"))
let aluno = prompt("Possui outra faculdade em andamento?")

function ingressoFaculdade(info1, info2, info3) {
  if (info1 === 'Sim' && info2 >= 18 && info3 === 'Não') {
     console.log("Pode ingressar")
  } else {
    console.log("Não pode estudar")
  }
}
ingressoFaculdade(ensino, idade, aluno)