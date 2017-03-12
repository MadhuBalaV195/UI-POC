import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';

const appRoute: Routes = [
    { path: '', component: LoginComponent },
    { path: 'control-panel', component: ControlPanelComponent,
        children: [
            {path: '', redirectTo: 'view-profile', pathMatch: 'full'},
            { path: 'view-profile', component: ViewProfileComponent },
            { path: 'update-profile', component: UpdateProfileComponent },
            { path: 'search-profile', component: SearchProfileComponent },
        ]
     },    
    
];

export const routing = RouterModule.forRoot(appRoute);