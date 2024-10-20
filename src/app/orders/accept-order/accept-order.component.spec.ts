import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptOrderComponent } from './accept-order.component';

describe('AcceptOrderComponent', () => {
  let component: AcceptOrderComponent;
  let fixture: ComponentFixture<AcceptOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
