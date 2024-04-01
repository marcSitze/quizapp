import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebase';
const COLLECTION_NAME = 'emails';

const dbInstance = collection(database, COLLECTION_NAME);

export const saveEmail = async (email) => {
  const response = await addDoc(dbInstance, { email });
  console.log('response: ', response);
  return response;
};
