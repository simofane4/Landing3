import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFraudCheckComponent } from './order-fraud-check.component';

describe('OrderFraudCheckComponent', () => {
  let component: OrderFraudCheckComponent;
  let fixture: ComponentFixture<OrderFraudCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFraudCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderFraudCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
