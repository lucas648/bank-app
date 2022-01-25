import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve button text', () =>{
    component.buttonText = 'Click here';
    fixture.detectChanges();
    const buttonText = fixture.debugElement.query(By.css('#buttonComponent'));
    expect((buttonText.nativeElement as HTMLButtonElement).innerText).toEqual('Click here')
  })

  it('should emit event', () =>{
    spyOn(component.buttonEmitter, 'emit')
    component.buttonClickEvent();
    expect(component.buttonEmitter.emit).toHaveBeenCalled()
  })
});
