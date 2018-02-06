
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuardService } from "../shared/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "admin",
                component: AdminComponent,
                canActivate: [AuthGuardService]
            }
        ]),
    ],
    exports: [RouterModule]    
})
export class AdminRoutingModule{}