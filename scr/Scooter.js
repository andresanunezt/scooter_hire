const ChargingStation = require("./ChargingStation")

class Scooter extends ChargingStation {

    static all = []

constructor(location, charged = 100)  {

    super(location)
    this.id = Math.random(),
    this.charged = charged,
    this.rented = false,
    Scooter.all.push(this)

    this.accurateBattery()
}


accurateBattery (){

    if (this.charged > 100){
        this.charged = 100
    } else if (this.charged < 0) {
        this.charged = 0
    }
}

checkBattery (){

    return `Battery is ${this.charged} %`;
    
}





}

module.exports = Scooter