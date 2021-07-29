console.log('EXERCICIO  01 :')
function parimpar(n) {
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
console.log(parimpar(4))
//-----------------------------------------------------------

console.log('EXERCICIO  02 :')
function soma(n1=0, n2=0) { //Se não passar n1 ou n2 ele vai receber 0, invez de NaN
    return n1 + n2 
} 
console.log(soma(2))
//-----------------------------------------------------------

console.log('EXERCICIO  03 :')
let v = function(x) {
    return x*2
}
console.log(v(2))

//-----------------------------------------------------------
console.log('EXERCICIO  04 :')
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) { //recebe n e vai perdendo até chegar no c > 1
        fat *= c  //fatorial * c
    }
    return fat
}
//5! = 5 x 4 x 3 x 2 x 1 = 120
console.log(fatorial(5))

//-----------------------------------------------------------
console.log('EXERCICIO  05 :')
    //Forma recursiva 
    function fatorial(n) {
        if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
        //5! = 5 x 4 x 3 x 2 x 1 = 120 normal
        //5! = 5 x 4!   Fatorial que chama fatorial (Recursividade)
    }
}
console.log(fatorial(5))

//------------------------------------------------
console.log('EXEMPLO OBJETO: ')
let amigo = {
    nome: 'José', 
    sexo: 'M', 
    pesoAtual: 85.4, 
    engordar(p=0){
        let pesava = amigo.pesoAtual
        console.log('Engordou')
        this.pesoAtual += p
        console.log(`${amigo.nome} pesava: ${pesava}Kg`)
    }}
    amigo.engordar(2)
    
    console.log(`${amigo.nome} pesa atualmente: ${amigo.pesoAtual}Kg`)