import { fakerTH,faker } from '@faker-js/faker';

// Generate a random boolean
console.log('Random company boolean:', faker.datatype.boolean());

// Generate a random with probability
console.log('Random company boolean with probability:', faker.datatype.boolean(0.9));
console.log('Random company boolean with probability:', faker.datatype.boolean({ probability: 0.1 }));
