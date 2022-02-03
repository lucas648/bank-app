import { Injectable } from '@angular/core';
import { login } from '../interfaces/componentsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserValid : boolean = false

  constructor() { }

  authanticate(loginData: login): boolean{
    loginData.login === 'LucasCosta' && loginData.password === 'Luc@sCosta' ? this.isUserValid = true : this.isUserValid = false;

    return this.isUserValid
  }

  
  userAuthenticated(){
    return this.isUserValid;
  }

}
