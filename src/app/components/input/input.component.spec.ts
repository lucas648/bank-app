import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve value', ()=> {
    component.inputValue = 'Lucas Costa'
    fixture.detectChanges();
    const elementValue = fixture.debugElement.query(By.css('#inputValue'))
    expect((elementValue.nativeElement as HTMLInputElement).value).toEqual('Lucas Costa')
  });

  it('should recieve label value', ()=> {
    component.inputLabel = 'Name'
    fixture.detectChanges();
    const elementValue = fixture.debugElement.query(By.css('#inputLabel'))
    expect((elementValue.nativeElement as HTMLLabelElement).innerText).toEqual('Name')
  });

  it('should emit event text', () =>{
    component.inputValue = 'Lucas Costa'
    spyOn(component.inputTextEmitter, 'emit')
    component.emitText();
    expect(component.inputTextEmitter.emit).toHaveBeenCalledWith('Lucas Costa')
  })
});
