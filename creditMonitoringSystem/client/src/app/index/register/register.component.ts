import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/index';

@Component({
  selector: 'cms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  model: any = {};

    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                });
    }

}
