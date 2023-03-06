import { LoginData } from "../models/LoginData";

export class AuthService {
    private users: LoginData[] = [
        { userName: 'user@gmail.com', password: 'user1234' },
        { userName: 'admin@gmail.com', password: 'admin1234' }];
    login(loginData: LoginData): void {
        const { userName, password } = loginData;
        const checkUser = (user: LoginData) => { return user.password === password && user.userName === userName } ;
        if (!this.users.some(checkUser)) {
            throw "The provided username or password is incorrect."
        }
        // const indexUser: number = this.users.findIndex(user => user.userName === userName && user.password === password);
        // if (indexUser < 0) {
        //     throw "The provided username or password is incorrect."
        // }
    }

}