import { Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'cms-org-dev',
  templateUrl: './org-dev.component.html',
  styleUrls: ['./org-dev.component.scss']
})
export class OrgDevComponent implements OnInit {

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
