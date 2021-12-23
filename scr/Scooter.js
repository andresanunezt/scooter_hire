class Scooter {

    static all = []

constructor(location, charged = 100)  {

    this.location = location,
    this.charged = charged

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

 returnedAt(location){

    this.location = location

    return   `Returned scooter at ${this.location} charging station`


 }



}

module.exports = Scooter