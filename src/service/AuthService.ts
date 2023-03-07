import {LoginData} from '../models/LoginData'
export class AuthService {
    private users: LoginData[] = [
        {username: "user@gmail.com", password: "user1234"},
        {username: "admin@gmail.com", password: "admin1234"}
    ];
    login(loginData: LoginData) {
        console.log(loginData);
        const { username, password } = loginData;
        const checkUser = (user: LoginData) => { return user.password === password && user.username === username } ;
        if (!this.users.some(checkUser)) {
            throw "The provided username or password is incorrect."
        }
        // const indexUser: number = this.users.findIndex(user => user.userName === userName && user.password === password);
        // if (indexUser < 0) {
        //     throw "The provided username or password is incorrect."
        // }
    }

}