// const { faker } = require('@faker-js/faker');
import { fakerTH,faker } from '@faker-js/faker';

// Generate a random date
console.log('Random date:', faker.date.anytime());

// Generate a random date between '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z'
const dateBetween = faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' })
console.log('Random date between:', dateBetween); 

// Generate a random month
console.log('Random month:', faker.date.month()); 

// Generate a random abbreviated month
console.log('Random abbreviated month:', faker.date.month({ abbreviated: true })); 

// Generate a random month Thai
console.log('Random Thai month:', fakerTH.date.month())

