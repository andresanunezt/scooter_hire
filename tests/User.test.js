const { TestWatcher } = require("jest");

const User = require("../scr/User")
const Scooter = require("../scr/Scooter");

describe ('User Object Properties', () => {

    const user1 = new User("name")
    const user2 = new User("name")

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
    const testScooter = new Scooter(1 ,'Brooklyn', 100);

    user2.rentScooter(testScooter)

    expect(testScooter.rented).toBeTruthy()

    })

    test("Takes Scooter out of Scooter array", () => {

        
        console.log(Scooter.all)

        expect(Scooter.all).toHaveLength(0)
    
        })


    test('Can Return Scooter', () => {

        const testUser = new User("Margaret","thatcher_m")   
        const testScooter2 = new Scooter(2 ,'Brooklyn', 100);
        testUser.rentScooter(testScooter2)
        
        testUser.returnScooter(testScooter2, "Queens")
        
        expect(testScooter2.location).toBe("Queens")
        expect(testScooter2.rented).toBeFalsy()
     })

     test('Return method adds Scooter to Array', () => {

        
       
        console.log(User.all)
        console.log(Scooter.all)

        expect(Scooter.all.length).toBe(1)
     })

     test('Can only rent fully charged scooter', () => {

        const testUser4 = new User("Rodrigo","rudy")   
        const testScooter4 = new Scooter(3,'Brooklyn', 100);
        const testScooter5 = new Scooter(4, 'Brooklyn', 66);
        
        console.log(testUser4.rentScooter(testScooter4))
        console.log(testUser4.rentScooter(testScooter5))
        
        expect(testUser4.rentScooter(testScooter5)).toBe("Can't rent")
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

