import { faker } from "@faker-js/faker";
import data from "../data.json";
import Column from "../types/column";
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
    name: faker.person.firstName(),
    "last name": faker.person.lastName(),
    age: faker.number.int(78),
    accepted: faker.datatype.boolean(),
    email: faker.internet.email(),
  };
};

export function makeData(len: number) {
  return range(len).map(() => {
    return {
      ...newPerson(),
    };
  });
}
const columns: Column[] = data.columns.map((column) => ({
  id: crypto.randomUUID(),
  ...column,
}));
export { columns };
