import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { 
    this.formLogin = this.criarFormulario()
  }

  ngOnInit(): void {
  }

  criarFormulario(): FormGroup{
    return this.builder.group({
      login: [,Validators.required],
      password: [,Validators.required]
    })
  }

  doLogin(){
    return
  }
}
