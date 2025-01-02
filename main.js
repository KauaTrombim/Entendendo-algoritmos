// Ordenação

const formulario = document.getElementById('formulario')
const input = document.getElementById('numeros')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let inputRecebido = input.value
    let listagem = inputRecebido.split(",")
    let numeros = listagem.map(Number)
    console.log("Array: " + numeros)

    let menor = numeros[0]
    let indice_menor = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i]
            indice_menor = i
        }
    }

    alert("O menor numero digitado é: " + menor)
    alert("Ele se encontra no indice: " + indice_menor)
    console.log("O menor numero digitado é: " + menor)
    console.log("Ele se encontra no indice: " + indice_menor)
});