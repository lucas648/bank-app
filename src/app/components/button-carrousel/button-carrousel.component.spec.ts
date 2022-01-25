import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonCarrouselComponent } from './button-carrousel.component';

describe('ButtonCarrouselComponent', () => {
  let component: ButtonCarrouselComponent;
  let fixture: ComponentFixture<ButtonCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve text', () =>{
    component.item.innerText = 'Credit Card'
    fixture.detectChanges();
    const elementValue = fixture.debugElement.query(By.css('#buttonText'))
    expect((elementValue.nativeElement as HTMLParagraphElement).innerText).toEqual('Credit Card')
  });

  it('should recieve text', () =>{
    component.item.title = 'Debit Card'
    fixture.detectChanges();
    const elementValue = fixture.debugElement.query(By.css('#buttonTitle'))
    expect((elementValue.nativeElement as HTMLParagraphElement).innerText).toEqual('Debit Card')
  });

  it('should emit event text', () =>{
    component.item = {
      title: 'Credit Card',
      source: 'someImage.jpg'
    }
    spyOn(component.buttonEmitter, 'emit')
    const itemTest = {
      title: 'Credit Card',
      source: 'someImage.jpg'
    }
    component.eventEmiter();
    expect(component.buttonEmitter.emit).toHaveBeenCalledWith(itemTest)
  })

});
