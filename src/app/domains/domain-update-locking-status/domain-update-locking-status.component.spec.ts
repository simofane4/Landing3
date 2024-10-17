import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainUpdateLockingStatusComponent } from './domain-update-locking-status.component';

describe('DomainUpdateLockingStatusComponent', () => {
  let component: DomainUpdateLockingStatusComponent;
  let fixture: ComponentFixture<DomainUpdateLockingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainUpdateLockingStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainUpdateLockingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
