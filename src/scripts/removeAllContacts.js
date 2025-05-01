import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await readContacts();
    const updatedContacts = [];
    await writeContacts(updatedContacts);
    console.log('Всі контакти були видалені');
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
