let moedas = 3
let total = 0
let quantidade = 0

while (total < 12){
    quantidade++
    total += moedas
    console.log(`passo ${quantidade}: total = ${total} reais`)
}
console.log(`total final: ${total} reais com ${quantidade}`)