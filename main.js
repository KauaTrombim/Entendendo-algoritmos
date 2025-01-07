// Ordenação

const formulario = document.getElementById('formulario')
const input = document.getElementById('numeros')

const botoes = document.querySelectorAll("#formulario input.botao")

const BotaoMenor = document.getElementById("EncontrarMenor")
const botaoOrdenar = document.getElementById("OrdenarLista")

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function (evento) {
        evento.preventDefault();

        //Armazenamento e formatação do input
        let inputRecebido = input.value
        let listagem = inputRecebido.split(",")
        let numeros = listagem.map(Number) // Lista de numeros

        if (botoes[i].value == "Ordernar Lista") {
            let novaLista = []
            let tamanhoLista = numeros.length // variavel de apoio para a ordenação por seleção

            for (let i = 0; i < tamanhoLista; i++) {
                let menorNumero = encontrarMenor(numeros)

                novaLista.push(numeros[menorNumero])
                numeros.splice(menorNumero, 1)
            }

            console.log("Lista Ordenada: " + novaLista.toString())
        }

        else {
            let IndiceDoMenor = encontrarMenor(numeros)

            console.log("O menor numero é: " + numeros[IndiceDoMenor])
        }

        function encontrarMenor(lista) {
            let menor = lista[0]
            let indice_menor = 0

            for (let l = 0; l < lista.length; l++) {
                if (lista[l] < menor) {
                    menor = lista[l]
                    indice_menor = l
                }
            }
            return indice_menor
        }
    })
}



/*botaoOrdenar.addEventListener("click", function (evento) {
    evento.preventDefault();

    //Armazenamento e formatação do input
    let inputRecebido = input.value
    let listagem = inputRecebido.split(",")
    let numeros = listagem.map(Number) // Lista de numeros

    let novaLista = []
    let tamanhoLista = numeros.length // variavel de apoio para a ordenação por seleção

    for (let i = 0; i < tamanhoLista; i++) {
        let menorNumero = encontrarMenor(numeros)

        novaLista.push(numeros[menorNumero])
        numeros.splice(menorNumero, 1)
    }

    console.log("Lista Ordenada: " + novaLista.toString())
})*/


