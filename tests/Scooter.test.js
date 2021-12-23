

const Scooter = require('./Scooter');

describe('Scooter Object Properties', () => {


	test('Scooter is an object, with a location', () => {
		const testScooter = new Scooter('Brooklyn');

		expect(typeof testScooter).toBe('object');
		expect(testScooter.location).toBe('Brooklyn');
	})	


    test('Scooter has a charged percentage', () => {
		
        const testScooter = new Scooter('Brooklyn');
       
		expect(testScooter.charged).not.toBeNull();
       

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


        test('Can Return Scooter', () => {
            
    
            const testScooter2 = new Scooter('Brooklyn', -1);
           
            testScooter2.returnedAt('Queens')

            expect(testScooter2.location).toBe("Queens")


            
    
        })



})


// `Battery is ${this.charged} %`