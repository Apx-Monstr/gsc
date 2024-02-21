import fbApp from "./config";
import { getAuth, browserSessionPersistence, setPersistence } from "firebase/auth";
const auth = getAuth(fbApp);
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Now, authentication state will persist across page reloads during the same session.
  })
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });
export default auth;