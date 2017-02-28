import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<div>
    <custom-app></custom-app>
     <test-app></test-app>
  </div>`,
})
export class AppComponent  { name = 'test'; }
