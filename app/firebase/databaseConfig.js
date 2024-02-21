import { getDatabase } from "firebase/database";
import fbApp from "./config";

const database = getDatabase(fbApp)

export default database