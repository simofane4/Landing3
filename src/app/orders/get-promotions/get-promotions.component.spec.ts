import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPromotionsComponent } from './get-promotions.component';

describe('GetPromotionsComponent', () => {
  let component: GetPromotionsComponent;
  let fixture: ComponentFixture<GetPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPromotionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
