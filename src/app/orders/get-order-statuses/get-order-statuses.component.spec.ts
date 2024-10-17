import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderStatusesComponent } from './get-order-statuses.component';

describe('GetOrderStatusesComponent', () => {
  let component: GetOrderStatusesComponent;
  let fixture: ComponentFixture<GetOrderStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOrderStatusesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetOrderStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
