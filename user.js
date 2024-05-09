import { fakerTH, faker } from "@faker-js/faker";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const thaiId = require('thaiid')

// Generate an array of fake users
const users = Array.from({ length: 1 }, () => ({
  fullNameEN: faker.person.fullName(),
  fullNameTH: fakerTH.person.fullName(),
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past(),
  address: faker.location.streetAddress(),
  phone: fakerTH.phone.number(),
  thaiId: thaiId.random()
}));

console.log(users);