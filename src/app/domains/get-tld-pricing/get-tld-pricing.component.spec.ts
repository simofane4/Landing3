import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTldPricingComponent } from './get-tld-pricing.component';

describe('GetTldPricingComponent', () => {
  let component: GetTldPricingComponent;
  let fixture: ComponentFixture<GetTldPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTldPricingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetTldPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
