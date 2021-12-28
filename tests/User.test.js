const { TestWatcher } = require("jest");

const User = require("../scr/User")
const Scooter = require("../scr/Scooter");

describe ('User Object Properties', () => {

    const user1 = new User("name")

    test("User is an object", () => {
        expect(typeof user1).toBe('object')
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
    const testScooter = new Scooter('Brooklyn', 100);

    user2.rentScooter(testScooter)

    expect(testScooter.rented).toBeTruthy()

    })


    test('Can Return Scooter', () => {

        const testUser = new User("Margaret","thatcher_m")   
        const testScooter2 = new Scooter('Brooklyn', 100);
        
        testUser.returnScooter(testScooter2, "Queens")
        
        expect(testScooter2.location).toBe("Queens")
        expect(testScooter2.rented).toBeFalsy()
     })

     test('Can add money to account', () => {

        const testUser = new User("John","johnnie333")   
        
        console.log(testUser.addMoney(40))
        


        expect(testUser.accountBalance).toBe(40)
     
        
     })

})

// `added ${number} dollars to ${this.username}'s account. Account balance now ${this.accountBalance}`



