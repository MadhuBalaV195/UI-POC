import { Component } from '@angular/core';

@Component ({
    selector: 'custom-app',
    templateUrl: 'app/sample/sample.Component.html'
})

export class SampleComponent {
     msg = "";
    nCnt: number = 0;
     clickMe() {
      this.nCnt = this.nCnt + 1;
      this.msg = "Clicked: " + this.nCnt;
  }
}