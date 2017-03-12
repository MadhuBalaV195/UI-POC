import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TabComponent,
    TabsComponent,
    ControlPanelComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    SearchProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
