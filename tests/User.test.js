

const User = require("../scr/User")
const Scooter = require("../scr/Scooter");
const ChargingStation = require("../scr/ChargingStation");


describe ('User Object Properties', () => {

    const user1 = new User("name","name1", 33)
    const user2 = new User("name1", "name2", 22)

    test("User is an object", () => {
        expect(typeof user1).toBe('object')
    })

    test("Has an all array", () => {
        expect(User.all.length).toBe(2)
    })

    test("User has a name", () => {
        expect(user1).toHaveProperty('name')
    })

    test("User has a username", () => {
        expect(user1).toHaveProperty('username')
    })

})


describe("User Object Methods", () => {
   
    
    test("Can Rent a scooter if older than 18 years old", () => {

    const user2 = new User("Bob","billytothebob", 40)
    const user17Years = new User("baby", "babyscooter", 17)
    const chargingStationTest = new ChargingStation("Brooklyn")
    
    const testScooter = new Scooter('Brooklyn', 100);
    const testScooter444 = new Scooter('Brooklyn', 88);
    const testScooter17 = new Scooter('Brooklyn', 100);
   

    user2.rentScooter(testScooter, chargingStationTest)
    
    
    expect(chargingStationTest.scooters.length).toBe(2)
    expect(testScooter.rented).toBeTruthy()
    expect(user2.rentScooter(testScooter444, chargingStationTest)).toBe("Can't rent")
    expect(user17Years.rentScooter(testScooter17, chargingStationTest)).toBe("Can't rent")
    expect(testScooter444.rented).toBeFalsy()

    console.log(chargingStationTest.scooters)

    })

 

    test('Can Return Scooter', () => {

        const testUser = new User("Margaret","thatcher_m",80) 
        testUser.addMoney(80)  
        const testScooter2 = new Scooter('Williamsburg', 100);
        
        const chargingStation3 = new ChargingStation("Queens")
        const chargingStation2 = new ChargingStation("Williamsburg")

        testUser.rentScooter(testScooter2, chargingStation2)
        
        testUser.returnScooter(testScooter2, chargingStation3 )
        
        expect(testScooter2.location).toBe("Queens")
        expect(testScooter2.rented).toBeFalsy()
        expect(testUser.accountBalance).toBe(60)
     })

     test('Return method adds Scooter to Array', () => {

        const returnUser = new User("Jen", "jenny", 19);
        const chargingStationReturnTest = new ChargingStation("Bushwick")
        const testScooterReturn2 = new Scooter('Bushwick', 100);
        const testScooterReturn = new Scooter('Bushwick', 100);

      
        
        returnUser.rentScooter(testScooterReturn, chargingStationReturnTest)
        returnUser.rentScooter(testScooterReturn2, chargingStationReturnTest)

        returnUser.returnScooter(testScooterReturn, chargingStationReturnTest)
        returnUser.returnScooter(testScooterReturn2, chargingStationReturnTest)
        
        
        console.log(User.all)
        console.log(Scooter.all)

        expect(chargingStationReturnTest.scooters.length).toBe(2)
        
        
     })


     test('Can only rent fully charged scooter', () => {

        const testUser4 = new User("Rodrigo","rudy", 55)   
        const testScooter4 = new Scooter("Bedford-Stuyvesant", 100);
        const testScooter5 = new Scooter('Bedford-Stuyvesant', 66);
        const chargingStation1 = new ChargingStation("Bedford-Stuyvesant")
        
        console.log(testUser4.rentScooter(testScooter4, chargingStation1))
        

        
        expect(testUser4.rentScooter(testScooter5, chargingStation1)).toBe("Can't rent")
        expect(testScooter4.rented).toBeTruthy()
        expect(testScooter5.rented).toBeFalsy()
     })

     test('Can add money to account', () => {

        const testUser33 = new User("John","johnnie333", 20)   
        
        console.log(testUser33.addMoney(40))
        console.log(User.all)
        


        expect(testUser33.accountBalance).toBe(40)
     
        
     })

})

