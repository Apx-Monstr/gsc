import { getStorage } from "firebase/storage";
import fbApp from "./config";

const storage = getStorage(fbApp);

export default storage;