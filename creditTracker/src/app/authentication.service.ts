import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User{
  constructor(
    public username: string,
    public password: string
  ){}
}
var users=[
  new User('admin','admin'),
  new User('dhinesh','P0168')
  ];

@Injectable()
export class AuthenticationService {

  constructor(private router:Router) { }
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['']);
  }
 
  login(user){
    var authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.username);
      this.router.navigate(['/control-panel']);
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this.router.navigate(['']);
    }
  } 
}
