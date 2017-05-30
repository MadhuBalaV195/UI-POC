import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './index/login/login.component';
import { RegisterComponent } from './index/register/register.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { qualityofdeliverablesComponent } from './quality-of-deliverables/quality-of-deliverables.component';
import { SelfDevelopmentComponent } from './self-development/self-development.component';
import { OrgDevComponent } from './org-dev/org-dev.component';
import { PeopleManagement } from './people-management/people-management.component';
import { AuthenticationService, UserService } from './services/index';
import { AppConfig } from './app.config';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ControlPanelComponent,
    TabComponent,
    TabsComponent,
    UpdateProfileComponent,
    qualityofdeliverablesComponent,
    SelfDevelopmentComponent,
    OrgDevComponent,
    PeopleManagement,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppConfig,AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
