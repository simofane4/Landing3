import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainGetNameserversComponent } from './domain-get-nameservers.component';

describe('DomainGetNameserversComponent', () => {
  let component: DomainGetNameserversComponent;
  let fixture: ComponentFixture<DomainGetNameserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainGetNameserversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainGetNameserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
