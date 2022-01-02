const ChargingStation = require("./ChargingStation")

class Scooter  {

    static all = []

constructor(location, charged = 100)  {

    
    this.location = location,
    this.id = Math.random(),
    this.charged = charged,
    this.rented = false,
    Scooter.all.push(this)

    this.assignToChargingStation()
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

assignToChargingStation() {

    ChargingStation.all.forEach(chargingStation => chargingStation.addScooter(this))

}



}

module.exports = Scooter