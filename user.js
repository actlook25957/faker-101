import { fakerTH, faker } from "@faker-js/faker";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const thaiId = require("thaiid");
const fs = require("fs");

// const firstRandom = faker.person.sex();
// const fullNameEN = faker.person.fullName({ sex: firstRandom });
// const fullNameTH = fakerTH.person.fullName({ sex: firstRandom });

// Generate an array of fake users
const users = Array.from({ length: 20 }, () => (
  {
  // fullNameEN: faker.person.fullName(),
  fullNameTH: fakerTH.person.fullName(),
  sex: fakerTH.person.sex(),
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past(),
  address: fakerTH.location.streetAddress(),
  phone: fakerTH.phone.number(),
  thaiId: thaiId.random(),
}));

console.log(users);

var obj = {
  users: users,
};

var json = JSON.stringify(obj);

fs.writeFile('test.json', json, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// fs.readFile("myjsonfile.json", "utf8", function readFileCallback(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({ id: 2, square: 3 }); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile("myjsonfile.json", json, "utf8", callback); // write it back
//   }
// });
