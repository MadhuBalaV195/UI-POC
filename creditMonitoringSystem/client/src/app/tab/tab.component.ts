import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'cms-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
@Input() name = '';
  @Input() active = false;
  @Input() disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
