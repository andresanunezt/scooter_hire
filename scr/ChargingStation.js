class ChargingStation {

static all = []
    

constructor(location)  {

    
    this.location = location,
    this.scooters = []
    
 

   
}




sayLocation (){

    return `This charging station is located in ${this.location}`;
    
}





}

module.exports = ChargingStation