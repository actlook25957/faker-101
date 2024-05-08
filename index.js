import { fakerTH, faker } from "@faker-js/faker";

// Generate an array of fake users
const users = Array.from({ length: 3 }, () => ({
  name: faker.person.fullName(),
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past(),
  address: faker.location.streetAddress(),
}));

console.log(users);

// Faker contains a generator method faker.helpers.fake for combining faker API methods using a mustache string format.
console.log(
  faker.helpers.fake(
    "Hello {{person.prefix}} {{person.lastName}}, how are you today?"
  )
);

// If you want consistent results, you can set your own seed:
faker.seed(1);

const firstRandom = faker.number.int();

// Setting the seed again resets the sequence.
faker.seed(1);

const secondRandom = faker.number.int();

console.log("First random number = ", firstRandom);
console.log("Second random number = ", secondRandom);
console.log(firstRandom === secondRandom);
