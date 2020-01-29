class UserTemplate {
    
    constructor (name,password,age) {
        this.name = name
        this.password = password
        this.age = age
        this.connected = false
    }

    login() {
        this.connected = true
        console.log(' your login status :', this.connected)
    }

    logout() {
        if (this.connected == false) {
            this.connected = true
        } else {
            this.connected = false
        }
    }

    CheckStatus() {
        console.log(' your login status :', this.connected)
    }

    user1 = new UserTemplate('Andy','aaa',25)
    user2 = new UserTemplate('Boby','bbb',35)

   
}