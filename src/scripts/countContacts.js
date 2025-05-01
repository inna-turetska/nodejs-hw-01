import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  const contacts = await countContacts();
  console.log(`Кількість контактів ${contacts}`);
};
main();
