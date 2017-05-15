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
import { DataServeService } from './data-serve.service';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PocDetailsComponent } from './poc-details/poc-details.component';
import { TrainingsAttendedComponent } from './trainings-attended/trainings-attended.component';
import { TrainingsTakenComponent } from './trainings-taken/trainings-taken.component';
import { AwardsComponent } from './awards/awards.component';

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
    PocDetailsComponent,
    TrainingsAttendedComponent,
    TrainingsTakenComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
