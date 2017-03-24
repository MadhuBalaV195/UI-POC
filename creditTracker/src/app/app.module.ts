import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { MyGridApplicationComponent } from './data-grid/data-grid.component';
import { GridCellComponent } from './grid-cell-component/grid-cell-component.component';
import {AgGridModule} from "ag-grid-angular/main";
import { PocdetailsComponent } from './pocdetails/pocdetails.component';
import { TrainingsAttendedComponent } from './trainings-attended/trainings-attended.component';
import { TrainingsTakenComponent } from './trainings-taken/trainings-taken.component';
import { AwardsAchievementsComponent } from './awards-achievements/awards-achievements.component';
import {AuthenticationService} from './authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabComponent,
    TabsComponent,
    ControlPanelComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    SearchProfileComponent,
    MyGridApplicationComponent,
    GridCellComponent,
    PocdetailsComponent,
    TrainingsAttendedComponent,
    TrainingsTakenComponent,
    AwardsAchievementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgGridModule.withComponents(
            [GridCellComponent])
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
