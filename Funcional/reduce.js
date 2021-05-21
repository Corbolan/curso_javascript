const numbers = [1, 2, 3, 4, 5, 6]
const sum = (total, el) => total + el // processamento em cima de numbers

const total = numbers.reduce(sum) // o segundo parametro é o valor inicial
console.log(total)

// Desafio - Calcular a média
const avg = (acc, el, i, array) => {
    if(i === array.length - 1){
        return (acc+el)/array.length
    }else{
        return acc + el
    }
}

const result = numbers.reduce(avg)
console.log(result)