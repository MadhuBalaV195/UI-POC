import { Component, OnInit, Input,  Output,  ContentChildren,  HostListener,  EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
@Component({
  selector: 'cms-tabs',
  templateUrl: './tabs.component.html',
 })
export class TabsComponent implements OnInit {
 @Input() vertical;
  @Output() onSelect = new EventEmitter();
  @ContentChildren(TabComponent) tabs;

  ngAfterContentInit() {
    const tabs = this.tabs.toArray();
    const actives = this.tabs.filter(t => { return t.active });

    if(actives.length > 1) {
      console.error(`Multiple active tabs set 'active'`);
    } else if(!actives.length && tabs.length) {
      tabs[0].active = true;
    }
  }

  tabClicked(tab) {
    const tabs = this.tabs.toArray();

    tabs.forEach(tab => tab.active = false);
    tab.active = true;

    this.onSelect.emit(tab);
  }




  constructor() { }

  ngOnInit() {
  }

}
export const TAB_COMPONENTS = [
  TabsComponent,
  TabComponent
];



