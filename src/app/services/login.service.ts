import { Injectable } from '@angular/core';
import { login } from '../interfaces/componentsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserValid : boolean = false

  constructor() { }

  doLogin(user : login){
    user.login === 'LucasCosta' && user.password === 'Luc@sCosta' ? this.isUserValid = true : this.isUserValid = false;

    return this.isUserValid
  }
}
