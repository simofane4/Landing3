import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainGetLockingStatusComponent } from './domain-get-locking-status.component';

describe('DomainGetLockingStatusComponent', () => {
  let component: DomainGetLockingStatusComponent;
  let fixture: ComponentFixture<DomainGetLockingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainGetLockingStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainGetLockingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
