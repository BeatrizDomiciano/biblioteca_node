const books = require('./database')
const readline = require('readline-sync')



const buscar = readline.question('Deseja buscar livro? s/n ')




if(buscar =="n"){
    console.table(books)
} if(buscar == "s"){
    const buscaPorAut= readline.question('Qual a autoria? ')
    result = books.filter((pesq) => pesq.autor == buscaPorAut)  

console.table(result)

} else{
    console.log("!!!VALOR INSERIDO NÃO ENCONTRADO!!!")
}


