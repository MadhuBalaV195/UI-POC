import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
   clickMessage = '';

  pocTakenOpen() {
    this.clickMessage = 'You are my hero!';
  }




  constructor() { }

  ngOnInit() {
  }

}
