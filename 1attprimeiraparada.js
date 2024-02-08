const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

//preciso nem comentar facil demais
//por garantia... map entra no array duplica conserva o orig
//function pega cada elemento e returna multiplicando
let dobroindice = array.map(function(element){
    return element * 2
})

console.log(dobroindice)