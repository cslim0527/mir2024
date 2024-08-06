import firebaseApp from "./firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default auth;
