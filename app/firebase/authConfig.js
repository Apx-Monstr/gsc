import fbApp from "./config";
import { getAuth } from "firebase/auth";
const auth = getAuth(fbApp);

export default auth;