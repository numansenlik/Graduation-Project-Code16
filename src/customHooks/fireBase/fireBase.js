import { toast } from 'react-toastify';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,
  authDomain: import.meta.env.VITE_FIRE_BASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRE_BASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRE_BASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    toast.success("Registration successful")
  } catch (error) {
    toast.error("There's been an issue.");
  }

}
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    toast.success("You have successfully logged in.");
    return user;
  } catch (error) {
    toast.error("Login failed. Please check your email and password.");
  }
};
export const logOut = async () => {
  try {
    await signOut(auth)
    toast.success("Logged out successfully")
    return true
  } catch (error) {
    toast.error("Logout failed")
  }

}



export default app