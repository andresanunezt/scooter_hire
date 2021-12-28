
class User {

    constructor(name, username){

        this.name = name,
        this.username = username
        this.accountBalance = 0


    }


    rentScooter(scooter){
        
        if (scooter.charged === 100) { 
            scooter.rented = true
            return `rented scooter at ${scooter.location} station `
        }  else if(scooter.charged < 100){
            
            return "Can't rent"
        }

    }

    returnScooter(scooter ,location){




        scooter.location = location
        scooter.rented = false
    
        return   `Returned scooter at ${scooter.location} charging station`
    
    
     }


     addMoney(number){

        this.accountBalance = this.accountBalance + number
    
        return   `Added ${number} dollars to ${this.username}'s account. Account balance is now ${this.accountBalance}.`
    
    
     }


}

module.exports = User