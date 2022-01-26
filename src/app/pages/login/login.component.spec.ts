import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.formLogin.patchValue({
      login: 'LucasCosta',
      password: 'Luc@sCosta'
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve login value', ()=>{
    component.formLogin.patchValue({
      login: 'LucasCosta',
      password: 'Luc@sCosta'
    })
    const elementValue = fixture.debugElement.query(By.css('#login'));
    expect((elementValue.nativeElement as HTMLInputElement).innerText).toEqual('LucasCosta');
  });

  it('should recieve password value', ()=>{
    const elementValue = fixture.debugElement.query(By.css('#password'));
    expect((elementValue.nativeElement as HTMLInputElement).innerText).toEqual('Luc@sCosta');
  });

  it('should do the login', ()=>{
    component.doLogin();
    expect(component.doLogin()).toBeTrue()
  });
});
