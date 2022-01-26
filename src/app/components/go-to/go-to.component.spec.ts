import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GoToComponent } from './go-to.component';

describe('GoToComponent', () => {
  let component: GoToComponent;
  let fixture: ComponentFixture<GoToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve text', () =>{
    component.item.title = 'Debit Card'
    fixture.detectChanges();
    const elementValue = fixture.debugElement.query(By.css('#goToTitle'))
    expect((elementValue.nativeElement as HTMLParagraphElement).innerText).toEqual('Debit Card')
  });

  it('should recieve text', () =>{
    component.item.text = 'Debit Card'
    fixture.detectChanges();
    const elementValue = fixture.debugElement.query(By.css('#goToText'))
    expect((elementValue.nativeElement as HTMLParagraphElement).innerText).toEqual('Debit Card')
  });

  it('should emit event text', () =>{
    component.item = {
      title: 'Credit Card',
      text: 'Do you want to have an Creditcard? Click here and see more',
      route: 'creditCard'
    }
    spyOn(component.goToEmitter, 'emit')
    const itemTest = {
      title: 'Credit Card',
      text: 'Do you want to have an Creditcard? Click here and see more',
      route: 'creditCard'
    }
    component.emitRoute();
    expect(component.goToEmitter.emit).toHaveBeenCalledWith(itemTest.route)
  })
});
