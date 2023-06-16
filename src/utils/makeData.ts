import { faker } from "@faker-js/faker";
//GENERAL FUNCTIONS TO GENERATE FAKE DATA
const range = (len: any) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    id: crypto.randomUUID(),
    name: faker.name.firstName(),
    "last name": faker.name.lastName(),
    age: faker.datatype.number(40),
    accepted: faker.datatype.boolean(),
    email: faker.internet.email(),
  };
};

export function makeData(len: number) {
  return range(len).map((d) => {
    return {
      ...newPerson(),
    };
  });
}
