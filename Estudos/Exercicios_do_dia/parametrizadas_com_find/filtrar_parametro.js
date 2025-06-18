    const prompt = require('prompt-sync')();



    const livros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
    { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881 },
    { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 },
    { titulo: "Brida", autor: "Paulo Coelho", ano: 1990 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 },
    ];



    let propiedade = prompt(" Digite a propiedade desejada:  [titulo] [autor] [ano] ")

    while(!["titulo","autor","ano"].includes(propiedade)){
            propiedade = prompt(" Digite a propiedade desejada:  [titulo] [autor] [ano] ")
    }

    const valor = prompt(" Digite o titulo do livreo o autor ou ano de laçamento: ")


    const procurar_livros=(array,propiedades,valor)=>{

        const resultado = array.filter((res)=>{
            return res[propiedades] == valor
        })

        if(resultado){
            console.log(" Encontrado ")
            console.log(resultado)
        }else{
            console.log("Não encontrado")
        }

    }

    procurar_livros(livros,propiedade,valor)