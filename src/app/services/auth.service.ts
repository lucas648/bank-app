import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { login } from '../interfaces/componentsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : boolean = false;

  constructor(
    private login: LoginService
  ) { }

  authanticate(loginData: login): boolean{
    this.isAuthenticated = this.login.doLogin(loginData);
    return this.isAuthenticated
  }

  
  userAuthenticated(){
    return this.isAuthenticated
  }

}
