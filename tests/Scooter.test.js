
const ChargingStation = require("../scr/ChargingStation");
const Scooter = require("../scr/Scooter");

describe('Scooter Object Properties', () => {


    test('Scooter is an instance of ChargingStation class', () => {
		const testScooter = new Scooter('Bed-Stuy');

		expect(testScooter instanceof ChargingStation).toBeTruthy();
		
	})

	test('Scooter is an object, with a location', () => {
		const testScooter = new Scooter('Brooklyn');

        
		expect(typeof testScooter).toBe('object');
		expect(testScooter.location).toBe('Brooklyn');
	})	


    test('Scooter has a charged percentage', () => {
		
        const testScooter = new Scooter('Brooklyn');
       
		expect(testScooter.charged).not.toBeNull();
       

	})

    test("Has an all array", () => {
        expect(Scooter.all.length).toBe(3)
    })

})


describe('Scooter Object Methods', () => {

    test('Scooter can check percentage', () => {
            
        const testScooter = new Scooter('Brooklyn');
            
         expect(testScooter.checkBattery()).toBe(`Battery is ${testScooter.charged} %`);
        
        })

    test('Scooter charged percentage cannot be lower than 0 or greater than 100', () => {
            
        const testScooter2 = new Scooter('Brooklyn', -1);
        const testScooter3 = new Scooter('Brooklyn', 101);

        expect(testScooter2.charged).toBeGreaterThanOrEqual(0);
        expect(testScooter3.charged).toBeLessThanOrEqual(100);
    
    })


   


})


// `Battery is ${this.charged} %`