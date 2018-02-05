
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "admin",
                component: AdminComponent
            }
        ]),
    ],
    exports: [RouterModule]    
})
export class AdminRoutingModule{}