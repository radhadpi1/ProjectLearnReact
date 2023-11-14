// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation.


let favSingers = ['mohit chauhan', 'RR', 'spb']
console.log(favSingers[0])

let favNumbers = [3,33,99,333]
let mixedArr =['hi', favNumbers, 123, true]
mixedArr.forEach(element => {
    console.log(element)
});

// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.
let car ={
    type: 'Mercedes',
    model: 'M234',
    color:'White'

}
car.type = 'Toyota'
car.wheels = 'Michelin'
console.log(car)