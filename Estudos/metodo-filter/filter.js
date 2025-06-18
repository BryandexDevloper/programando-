
const filtrar_maior=(idades)=>{
    if(idades >= 18)
        return idades
}


const idades = [21,54,12,18,45,23,87,67]
const maior = idades.filter((res)=>{
    return res >= 18
})


const maiorr = idades.filter((res)=>{
    return res < 18
})

console.log(maiorr)
console.log(maior)