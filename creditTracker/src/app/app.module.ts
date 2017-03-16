import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    TabComponent,
    TabsComponent,
    ControlPanelComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    SearchProfileComponent,
    MyGridApplicationComponent,
    GridCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing,
    AgGridModule.withComponents(
            [GridCellComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
