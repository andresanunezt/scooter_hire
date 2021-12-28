
class User {

    constructor(name, username){

        this.name = name,
        this.username = username
        this.accountBalance = 0


    }


    rentScooter(scooter){

        scooter.rented = true

    }

    returnScooter(scooter ,location){

        scooter.location = location
        scooter.rented = false
    
        return   `Returned scooter at ${scooter.location} charging station`
    
    
     }


     addMoney(number){

        this.accountBalance = this.accountBalance + number
    
        return   `Added ${number} dollars to ${this.username}'s account. Account balance now ${this.accountBalance}.`
    
    
     }


}

module.exports = User