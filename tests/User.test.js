

const User = require("../scr/User")
const Scooter = require("../scr/Scooter");
const ChargingStation = require("../scr/ChargingStation");


describe ('User Object Properties', () => {

    const user1 = new User("name")
    const user2 = new User("name1")

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
    
    test("Can Rent a scooter", () => {

    const user2 = new User("Bob","billytothebob")
    
    const chargingStationTest = new ChargingStation("Brooklyn")
    
    const testScooter = new Scooter('Brooklyn', 100);
    const testScooter444 = new Scooter('Brooklyn', 88);
    user2.rentScooter(testScooter, chargingStationTest)

    expect(testScooter.rented).toBeTruthy()
    expect(user2.rentScooter(testScooter444)).toBe("Can't rent")
    expect(testScooter444.rented).toBeFalsy()

    })

    test("Takes Scooter out of Scooter array", () => {

        
        console.log(Scooter.all)

        expect(Scooter.all).toHaveLength(1)
    
        })


    test('Can Return Scooter', () => {

        const testUser = new User("Margaret","thatcher_m")   
        const testScooter2 = new Scooter('Brooklyn', 100);

        const chargingStation3 = new ChargingStation("Queens")
        const chargingStation2 = new ChargingStation("Brooklyn")

        testUser.rentScooter(testScooter2, chargingStation2)
        
        testUser.returnScooter(testScooter2, chargingStation3 )
        
        expect(testScooter2.location).toBe("Queens")
        expect(testScooter2.rented).toBeFalsy()
     })

     test('Return method adds Scooter to Array', () => {

        
       
        console.log(User.all)
        console.log(Scooter.all)

        expect(Scooter.all.length).toBe(2)
     })

     test('Can only rent fully charged scooter', () => {

        const testUser4 = new User("Rodrigo","rudy")   
        const testScooter4 = new Scooter('Brooklyn', 100);
        const testScooter5 = new Scooter('Brooklyn', 66);
        const chargingStation1 = new ChargingStation("Brooklyn")
        
        console.log(testUser4.rentScooter(testScooter4, chargingStation1))
        

        
        expect(testUser4.rentScooter(testScooter5, chargingStation1)).toBe("Can't rent")
        expect(testScooter4.rented).toBeTruthy()
        expect(testScooter5.rented).toBeFalsy()
     })

     test('Can add money to account', () => {

        const testUser33 = new User("John","johnnie333")   
        
        console.log(testUser33.addMoney(40))
        console.log(User.all)


        expect(testUser33.accountBalance).toBe(40)
     
        
     })

})

