import {LoginData} from '../models/LoginData'
export class AuthService {
    private users: LoginData[] = [
        {username: "user@gmail.com", password: "user1234"},
        {username: "admin@gmail.com", password: "admin1234"}
    ];
    login(loginData: LoginData) {
        //TODO 
        //throws exception in the case mismatchin a given loginData
        //with array of users (field users)
    }

}