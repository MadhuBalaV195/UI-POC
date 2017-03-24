import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service'

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(private service:AuthenticationService) { }
  private username: string;
  ngOnInit() {
    this.username=localStorage.getItem('user');
  }
  logout(){
    this.service.logout();
  }

}
