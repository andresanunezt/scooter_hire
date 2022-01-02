const Scooter = require("./Scooter")



class User {





    static all = []

    constructor(name, username, age){

        
        this.name = name,
        this.username = username,
        this.age = age,
        this.accountBalance = 0,
        User.all.push(this)


    }

    

    rentScooter(scooter, chargingStation){
        
        if (scooter.charged === 100 && scooter.location === chargingStation.location && this.age >= 18) { 
            // if (scooter.charged === 100) {
            scooter.rented = true,

            // Scooter.all.splice(Scooter.all.findIndex( s => s.id !== scooter.id),1);

            chargingStation.scooters.splice(chargingStation.scooters.findIndex( s => s.id !== scooter.id),1);

            return `rented scooter at ${scooter.location} station`

        }  else {
            
            return "Can't rent"
        }

    }

    returnScooter(scooter ,chargingStation){




        scooter.location = chargingStation.location
        scooter.rented = false
        chargingStation.scooters.push(scooter)
        this.accountBalance = this.accountBalance - 20
        return   `Returned scooter at ${chargingStation.location} charging station`
        
    
     }


     addMoney(number){

        this.accountBalance = this.accountBalance + number
    
        return   `Added ${number} dollars to ${this.username}'s account. Account balance is now ${this.accountBalance}.`
    
    
     }


}

module.exports = User