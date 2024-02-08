const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]
//facil
let filtro3letras = palavras.filter(function(element){
    if(element.length > 3){
        console.log(element)
    }
})

