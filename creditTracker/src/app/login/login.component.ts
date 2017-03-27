import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService, User } from '../authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private service: AuthenticationService) { }
  private correct: boolean;
  ngOnInit() {
    this.correct = true;
  }
  public user = new User('', '');
  login(form: NgForm) {
    if (!this.service.login(this.user)) {
      this.correct = false;
    }
  }

}
