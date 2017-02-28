import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SampleComponent } from './sample/sample.component';
import { TestComponent } from './test/test.component';
import { CheckComponent } from './check/check.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'sample.component', component: SampleComponent },
  { path: 'check.component', component: CheckComponent },
  { path: 'test.component',      component: TestComponent },
  { path: '**', component: TestComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, SampleComponent, TestComponent, CheckComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }