const Scooter = require("./Scooter")



class User {





    static all = []

    constructor(name, username){

        this.name = name,
        this.username = username,
        this.accountBalance = 0,
        User.all.push(this)


    }

    

    rentScooter(scooter){
        
        // if (scooter.charged === 100 && scooter.location === this.location) { 
            if (scooter.charged === 100) {
            scooter.rented = true,

            Scooter.all.splice(Scooter.all.findIndex( s => s.id !== scooter.id),1);

            return `rented scooter at ${scooter.location} station`

        }  else {
            
            return "Can't rent"
        }

    }

    returnScooter(scooter ,location){




        scooter.location = location
        scooter.rented = false
        Scooter.all.push(scooter)
        return   `Returned scooter at ${scooter.location} charging station`
    
    
     }


     addMoney(number){

        this.accountBalance = this.accountBalance + number
    
        return   `Added ${number} dollars to ${this.username}'s account. Account balance is now ${this.accountBalance}.`
    
    
     }


}

module.exports = User