import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SampleComponent } from './sample/sample.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SampleComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
