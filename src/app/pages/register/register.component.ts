import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup

  constructor(
    private builder: FormBuilder
  ) {
    this.registerForm = this.buildForm();
   }

  ngOnInit(): void {
  }

  buildForm(): FormGroup{
    return this.builder.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', (Validators.required, Validators.email)],
      phoneNumber: ['', Validators.required],
    })
  }

  sendData(){
    if(this.registerForm.valid){
      const dados = this.recieveData();
    }
  }

  recieveData(){
    return {
      name: this.registerForm.get('name')?.value,
      birthDate: this.registerForm.get('birthDate')?.value,
      cpf: this.registerForm.get('cpf')?.value,
      email: this.registerForm.get('email')?.value,
      phoneNumber: this.registerForm.get('phoneNumber')?.value
    }
  }
}
