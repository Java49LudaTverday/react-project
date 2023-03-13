import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { app } from '../config/firebase-config';
import { LoginData } from '../models/LoginData';
export class AuthServiceFirebase {
    private auth = getAuth(app);
    async login(loginData: LoginData): Promise<string> {
        // console.log(loginData.password);
        // await signInWithEmailAndPassword(this.auth, loginData.userName, loginData.password);

        if (loginData.userName == "GOOGLE") {
          const credentials =  await signInWithPopup(this.auth, new GoogleAuthProvider());
           return credentials.user.email || '';

        } else {
         const credentials =  await signInWithEmailAndPassword(this.auth, loginData.userName,
                loginData.password)
              return  credentials.user.email || '';
        }

    }
    async logout(): Promise<void> {
        await signOut(this.auth);
    }
}