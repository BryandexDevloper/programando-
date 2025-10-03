
const mysql2 = require('mysql2')


class Database{
    constructor(){
        this.host = 'localhost'
        this.user = 'root'
        this.password = ''
        this.database = 'codeponto'

        this.Conection = mysql2.createConnection({
            host:this.host,
            user:this.user,
            password:this.password,
            database:this.database
        })

        this.Conection.connect(error =>{
            if(error){
                return console.error('Não foi possivel conectar ao banco de dados',error.message)
            }else{
                console.log('Conectado ao banco de dados')
            }
        })

    }


    query(sql,params=[]){
        return new Promise((resolv,reject)=>{
            this.Conection.query(sql,params,(err,result)=>{
                if(err) return reject(err)
                    resolv(result)
            })
        })
    }

    close(){
        this.Conection.end(err =>{
            if(err){
                console.log('Erro ao fechar a conexão',err)
            }else{
                console.log('Conexão encerrada')
            }

            
        })
    }
}

const dataBase = new Database()

module.exports = dataBase