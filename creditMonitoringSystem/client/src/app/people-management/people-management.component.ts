import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cms-people-management',
  templateUrl: './people-management.component.html',
  styleUrls: ['./people-management.component.scss']
})
export class PeopleManagement implements OnInit {
  
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
