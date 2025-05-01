import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  const allContacts = await getAllContacts();
  console.log(allContacts);
};
main();
