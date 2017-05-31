import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cms-self-development',
  templateUrl: './self-development.component.html',
  styleUrls: ['./self-development.component.scss']
})
export class SelfDevelopmentComponent implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
     let script: string = `
      $('[data-toggle="tooltip"]').tooltip();
        `;

    let dynamicScript = document.createElement('script');
    dynamicScript.text = script;
    this.elementRef.nativeElement.appendChild(dynamicScript);
  }

}
