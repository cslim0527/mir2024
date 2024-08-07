import firebaseApp from "./firebase";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default db;
