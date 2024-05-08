import { fakerTH,faker } from '@faker-js/faker';

// Generate a random int
console.log('Random int:', faker.number.int()); 

// Generate a random int max 100
console.log('Random max 100:', faker.number.int(100)); 

// Generate a random int max 100 and min 10
console.log('Random max 100 and min 10:', faker.number.int({ min: 10, max: 100 })); 
