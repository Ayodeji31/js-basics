
let selectedColour = ["Blue", "Red", "Pink", "purple"]

selectedColour[4] = "Green"
selectedColour[5] = "White"
selectedColour.pop()
selectedColour.unshift("Grey")

console.log(selectedColour)

let x = 23;
let y = 10;
function add (){
    console.log(x += 5)
    console.log(y += 5)
}
add()

let points = 120;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type)

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;
console.log(a)
console.log(b)

let hour = 24;

if (hour >= 6 && hour < 12)
    console.log("Good morning!")
 else if(hour >= 12 && hour < 16 )
    console.log("Good afternoon")
 else if( hour >= 17 && hour < 19)
    console.log("Good evening")
 else 
 console.log("Good night")

 let role = 'moderate';

 switch (role) {
    case 'guest':
        console.log('Guest user')
        break;

    case 'moderate':
       console.log(`${Date.now()}`); 
        console.log('Moderator user')
        break;
 
    default:
        console.log('Unknown user');
 }

 for (let i = 0; i < 5; i++) {
    console.log(i, "I am the greatest, I can do all things through christ that strengthens me!")
 }

 let i = 0; 
 while(i <= 5) {
    if ( i % 2  !== 0 ) console.log(i);
    i++;
 }

 let person = {
    name : "Ayodeji",
    Age : 43
 };

 for ( let key in person )
    console.log(key, person[key]);


 const color = ['red', 'green', 'yellow', 'blue', 'brown'];

 for ( let index in color)
   console.log(index , color[index])

   const fruits = ['Banana', 'Apple', 'Grape', 'Orange', 'Nectarine']

 for ( let fruit of fruits)
   console.log(fruit)  


   let number = max( 4, 2)

   console.log(number);

   function max (a , b){

   return  (a, b) ? a : b;
    
   }



   console.log(isLandscape(200, 700 ));

   function isLandscape (width, height) {
    return (width > height );
   }

const output = fizzBuzz(150);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}

checkSpeed(174)
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('OK')
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12)
        console.log('License suspended');
    else console.log('Points', points);
}

showNumbers(10);

function showNumbers (limit) {
    for (let i = 0; i <= limit; i++) {
        // if ( i % 2 === 0 ) console.log(i, 'EVEN');
        // else console.log(i, 'ODD');

        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

const movie = {
    title: 'a',
    releaseYear: 2017,
    rating : 4.5,
    director: 'c'
}
showProperties(movie)
function showProperties (obj) {
    for ( let key in obj)
    if (typeof obj[key] === 'string')
    console.log(key, obj[key])
}

console.log(sum(20))

function sum (limit) {
    let sum = 0;
 for (let i = 0; i <= limit; i++)
 if (i % 3 === 0 || i % 5 === 0)
   sum += i;

   return sum
}

const numbers = [1 , -1, 3, 4, 2, -3, 5, -2, 8];

const filtered = numbers.filter(value => value >= 0)
.map(value => ({value : value}))
console.log(filtered);

const courses = [
    { id : 1, name: 'a'},
    { id : 2, name: 'b'},
    { id : 3, name: 'c'},
    { id : 4, name: 'd'},
];

const course = courses.find(course => {
  return course.id === 4;
})
console.log(course)

const game = [ 1, 2, 3, 4, 5, 6,];
const last = game.pop();
 console.log(game)
 console.log(last)
const first = game.shift();
console.log(game)
console.log(first)

const lastone = [7, 8, 9, 10,];

//const combine = game.concat(lastone);
const combine = [...game, 'a', ...lastone, 'b'];
const copy = [...combine]
console.log(copy)

const slice = combine.slice(1, 7); 
console.log(combine);
console.log(slice);

const ogidan = ["Book", "Glass", "Table", "Chair", "SideBar", "Grass", "Dinning"];

const ipele = ["Tade", "Grass", "Dog", "Lion", "Shed", "SideBar", "Glass", "Dinning"];

const sowanpo = [...ogidan, ...ipele];

sowanpo.map(value => value)

console.log(sowanpo)

const esi = ogidan.filter(value => value => ipele.includes(value1 => value1)).sort();
console.log(esi)

const sumNumber = arrayFromRanges = (1, 9);
console.log(sumNumber);
function arrayFromRanges(min, max){
    output = [];
    for (i = min; i <= max; i++)
        output.push(i)
        return output;
}
