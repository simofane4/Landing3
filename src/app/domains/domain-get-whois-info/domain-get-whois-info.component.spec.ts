import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainGetWhoisInfoComponent } from './domain-get-whois-info.component';

describe('DomainGetWhoisInfoComponent', () => {
  let component: DomainGetWhoisInfoComponent;
  let fixture: ComponentFixture<DomainGetWhoisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainGetWhoisInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainGetWhoisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
