import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebase';
const COLLECTION_NAME = 'users';

const dbInstance = collection(database, COLLECTION_NAME);

export const saveEmail = async (form) => {
  const response = await addDoc(dbInstance, { form });
  console.log('response: ', response);
  return response;
};
