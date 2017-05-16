import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'cms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isCorrect = true;
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        console.log('login successfull');
        this.router.navigate(['/control-panel']);
      },
      error => {
        this.isCorrect = false;
        this.errorMsg = error._body;
      });
  }

}
