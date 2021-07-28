let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [ ]

//função para validar número
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){ //n é o prarmetro que está vindo da função adicionar
        return true
    } else {
        return false
    }
}
//função para validar a lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //se o valor de n não for encontrado retorn true
        return true
    } else {
        return false
    }
}

function adicionar( ) {
    if(isNumero(num.value) && !inLista(num.value, valores)) {//chamando as 2 funções de cima 
        valores.push(Number(num.value))
         let item = document.createElement('option') //criando um elemento option para o select
         item.text = `Valor ${num.value} adicionado.`//item recebendo valor do tipo text
         lista.appendChild(item) //adicionando um filho de item dentro da lista
         res.innerHTML = ' '
    }else{
        window.alert('O valor é invalido ou já encontrado na lista')
    } 
    num.value = ' ' //para limpar 
    num.focus( ) //para focar o mouse no input fnum 
}

function finalizar( ) {
    if (valores.length == 0){
        window.alert('Adicione valores entes de finalizar! ')
    } else {
        let total = valores.length
        let maior = valores[0] //primeiro elemento q sera visto
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total

        res.innerHTML = ' '
        res.innerHTML += `<p>Total de cadastros ${total}.</p>`
        res.innerHTML += `<p>O maior valor: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor: ${menor}.</p>`
        res.innerHTML += `<p>Soma de todos os valores: ${soma}.</p>`
        res.innerHTML += `<p>Média: ${media}</p>`
    }
}
    