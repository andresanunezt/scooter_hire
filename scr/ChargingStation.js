class ChargingStation {

    static all = []

    constructor(location)  {

    this.location = location,
    this.scooters = []
    ChargingStation.all.push(this)

   
    }

        sayLocation () {

            return `This charging station is located in ${this.location}`;
    
        }

        addScooter(scooter) {

            if(this.location === scooter.location){
                this.scooters.push(scooter)
            }
        }

}

module.exports = ChargingStation