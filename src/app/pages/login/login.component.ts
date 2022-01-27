import { login } from './../../interfaces/componentsInterfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  isValid: boolean = false;

  constructor(
    private builder: FormBuilder,
    private route: Router
  ) { 
    this.formLogin = this.criarFormulario()
  }

  ngOnInit(): void {
  }

  criarFormulario(): FormGroup{
    return this.builder.group({
      login: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  doLogin(){
    this.verificarCampos();
    
    return this.isValid;
  }

  verificarCampos(){
    const loginData: login = {
      login: this.formLogin.get('login')?.value,
      password: this.formLogin.get('password')?.value
    }

    loginData.login === 'LucasCosta' && loginData.password === 'Luc@sCosta' ? this.isValid = true : this.isValid = false;
  }

  trocarSenha(){
    this.route.navigate([])
  }

}
