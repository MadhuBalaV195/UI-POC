import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cms-quality-of-deliverables',
  templateUrl: './quality-of-deliverables.component.html',
  styleUrls: ['./quality-of-deliverables.component.scss']
})
export class qualityofdeliverablesComponent implements OnInit {

  constructor(private elementRef: ElementRef) {

  }
  ngOnInit() {
    let script: string = `
      $('[data-toggle="tooltip"]').tooltip();
        `;

    let dynamicScript = document.createElement('script');
    dynamicScript.text = script;

  }
}

