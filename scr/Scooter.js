class Scooter {

    static all = []

constructor(location, charged = 100)  {

    this.location = location,
    this.charged = charged,
    this.rented = false

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