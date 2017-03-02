import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './Login/Login.component';
import { UpdateProfileComponent } from './UpdateProfile/UpdateProfile.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'layout.component', component: LayoutComponent },
  { path: 'updateprofile.component', component: UpdateProfileComponent },
  { path: 'login.component',      component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LayoutComponent, LoginComponent, UpdateProfileComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }