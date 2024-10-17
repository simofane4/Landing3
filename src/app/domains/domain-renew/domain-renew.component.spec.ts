import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainRenewComponent } from './domain-renew.component';

describe('DomainRenewComponent', () => {
  let component: DomainRenewComponent;
  let fixture: ComponentFixture<DomainRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainRenewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
