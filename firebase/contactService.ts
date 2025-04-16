import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const submitContactForm = async (formData: {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  address: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), formData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
