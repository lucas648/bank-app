import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFinanceComponent } from './open-finance.component';

describe('OpenFinanceComponent', () => {
  let component: OpenFinanceComponent;
  let fixture: ComponentFixture<OpenFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
