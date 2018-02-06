import { Component } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html"
})
export class LoginComponent{

    userLogin: string;
    userPassword: string;
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
    }

    logIn() {
        this.authService.logIn(this.userLogin, this.userPassword);
        this.setMessage();
        if (this.authService.isLoggedIn) {
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : "admin"
            this.router.navigate([redirect]);
        }
    }

    logOut() {
        this.authService.logOut();
        this.setMessage();
    }
}