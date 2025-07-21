let reultado = false 

function promessas(){
    reultado = true
    return new Promise((resolv,reject)=>{
        if(reultado){
            resolv("Pronto")
        }else{
            reject("negado")
        }
    })
}



promessas().then((res)=>{
    console.log(res)
})


promessas().catch((res)=>{
    console.log(res)
})

