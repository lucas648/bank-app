import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule,AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve login value', ()=>{
    const inputValue: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#login')
    inputValue.value = 'LucasCosta';
    inputValue.dispatchEvent(new Event('input'))
    expect(component.formLogin.get('login')?.value).toEqual(inputValue.value);
  });

  it('should recieve password value', ()=>{
    const inputValue: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password')
    inputValue.value = 'Luc@sCosta';
    inputValue.dispatchEvent(new Event('input'))
    expect(component.formLogin.get('password')?.value).toEqual(inputValue.value);
  });

  it('should do the login', ()=>{
    const loginValue: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#login')
    loginValue.value = 'LucasCosta';
    const passwordValue: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password')
    passwordValue.value = 'Luc@sCosta';
    loginValue.dispatchEvent(new Event('input'))
    passwordValue.dispatchEvent(new Event('input'))
    component.doLogin();
    expect(component.doLogin()).toBeTrue()
  });
});
