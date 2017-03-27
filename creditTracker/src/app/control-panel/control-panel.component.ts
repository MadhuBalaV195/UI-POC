import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(private router: Router) { }
  private username: string;
  ngOnInit() {
    this.username = localStorage.getItem('user');
  }
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['']);
  }

}
