const numeros = [1, 2, 3, 4, 5]

// function dobroindice(numeros) {                   //loop pra entrar em cada indice do array(numeros)
//     let resultadodobra = []                            //multiplicar por dois e add no outro array(resultadodobra)    
//     for (var i = 0; i < numeros.length; i++) {
//         resultadodobra.push(numeros[i] * 2)
//     }
//     return resultadodobra
// }


// function triploindice(numeros) {                   //loop pra entrar em cada indice do array(numeros)
//     let resultadotriplo = []                            //multiplicar por três e add no outro array(resultadodobra)    
//     for (var i = 0; i < numeros.length; i++) {
//         resultadotriplo.push(numeros[i] * 3)
//     }
//     return resultadotriplo
// }

//             DEU ERRADO O ACIMA POIS tentei juntar todas 
//             rep(loop) e ESTAVA USANDO O RETURN E TAVA PARANDO A PORRA DA FUNÇÃO

function somamultidetudo(numeros) {
    let resultadodobra = []
    for (var i = 0; i < numeros.length; i++) {
        resultadodobra.push(numeros[i] * 2)
    }

    let resultadotriplo = []
    for (var i = 0; i < numeros.length; i++) {
        resultadotriplo.push(numeros[i] * 3)
    }                                              // REESCRITA REFATORADA RETORNANDO TUDO DE UMA VEZ ESSA PORRA
                                                   // já tava há exatos 39m tentando descobrir o problema e 
    let somadobra = 0                            //pedi ajuda aos universitarios, meus amigos  
    for (var i = 0; i < resultadodobra.length; i++) {
        somadobra += resultadodobra[i]
    }

    let somatriplo = 0                         
    for (var i = 0; i < resultadotriplo.length; i++) {
        somatriplo += resultadotriplo[i]
    }

    return {
        resultadodobra,
        resultadotriplo,
        somadobra,
        somatriplo
    };
}

console.log(somamultidetudo(numeros))


