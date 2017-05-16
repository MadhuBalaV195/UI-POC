import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './index/login/login.component';
import { RegisterComponent } from './index/register/register.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const appRoute: Routes = [    
    {
        path: '', component: IndexComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: 'control-panel', component: ControlPanelComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },


];

export const routing = RouterModule.forRoot(appRoute);