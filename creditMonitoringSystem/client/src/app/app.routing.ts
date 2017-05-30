import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './index/login/login.component';
import { RegisterComponent } from './index/register/register.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
const appRoute: Routes = [    
    {
        path: '', component: IndexComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }           
        ]
    },
     { path: 'user-dashboard', component: UserDashboardComponent },
     { path: 'control-panel', component: ControlPanelComponent,
        children: [
            {path: '', redirectTo: 'view-profile', pathMatch: 'full'},
            { path: 'update-profile', component: UpdateProfileComponent },
        ]
     },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },


];

export const routing = RouterModule.forRoot(appRoute);