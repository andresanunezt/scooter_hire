const ChargingStation = require("../scr/ChargingStation");
const Scooter = require("../scr/Scooter");

describe('Charging Station Object Properties', () => {


	test('Charging Station is an object', () => {
		const chargingStation = new ChargingStation('Brooklyn');


		expect(typeof chargingStation).toBe('object');
	})	

	test("Charging Station has a location", () => {
		const chargingStation = new ChargingStation('Brooklyn');
        expect(chargingStation).toHaveProperty('location')
    })


   
})


describe('Charging Station Object Methods', () => {

    test('Charging Station can let you know location', () => {
            
        
        chargingStationTest = new ChargingStation('Williamsburg')
        expect(chargingStationTest.sayLocation()).toBe(`This charging station is located in ${chargingStationTest.location}`);
        
        })


        test('Can add scooter to array', () => {
            

        
        testScooter =  new Scooter("Williamsburg")

        chargingStationTest.addScooter(testScooter)
            expect(chargingStationTest.scooters.length).toBeGreaterThan(0);
            
            })

        

   


})