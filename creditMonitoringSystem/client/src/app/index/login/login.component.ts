import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataServeService, User } from '../../services/data-serve.service';

@Component({
  selector: 'cms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: DataServeService) { }
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
