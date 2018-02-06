import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    
    isLoggedIn: boolean = false;
    redirectUrl: string;

    logIn(login: string, password: string) {
        if (login == "admin" && password == "qwerty") {
            this.isLoggedIn = true;
        }
    }

    logOut(): void {
        this.isLoggedIn = false;
    }
}