import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { AuthService } from "./shared/auth.service";
import { AuthGuardService } from "./shared/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "login",
                component: LoginComponent
            }
        ])
    ],
    exports: [RouterModule],
    providers: [
        AuthService,
        AuthGuardService
    ]
})
export class LoginRoutingModule{}