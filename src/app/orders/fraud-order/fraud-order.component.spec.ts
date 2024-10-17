import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudOrderComponent } from './fraud-order.component';

describe('FraudOrderComponent', () => {
  let component: FraudOrderComponent;
  let fixture: ComponentFixture<FraudOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FraudOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
