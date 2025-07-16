


class Newuser{
    static gerarCodigo(){

        let id = Math.floor(Math.random()  * 50000)
        if(db.some(res => res.passcode == id)){
            return Newuser.gerarCodigo()
        }
            return id

    }

    constructor(nickname,password,name){
        this.nickname = nickname
        this.name = name
        this.password = password
        this.passcode = Newuser.gerarCodigo()        
    }

    setNewpassword(new_password){
        this.password = new_password
        this.passcode = Newuser.gerarCodigo()
    }
}


db.push(new Newuser("marlon123","233fdweq","marlon"))
db.push(new Newuser("marlon123","233fdweq","marlon"))

let pessoa1 = new Newuser("MARLON","marlonis","123das")
localStorage.setItem("pessoa",pessoa1)