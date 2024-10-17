import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainUpdateWhoisInfoComponent } from './domain-update-whois-info.component';

describe('DomainUpdateWhoisInfoComponent', () => {
  let component: DomainUpdateWhoisInfoComponent;
  let fixture: ComponentFixture<DomainUpdateWhoisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainUpdateWhoisInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainUpdateWhoisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
