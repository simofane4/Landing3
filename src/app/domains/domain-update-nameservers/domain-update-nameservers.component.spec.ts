import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainUpdateNameserversComponent } from './domain-update-nameservers.component';

describe('DomainUpdateNameserversComponent', () => {
  let component: DomainUpdateNameserversComponent;
  let fixture: ComponentFixture<DomainUpdateNameserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainUpdateNameserversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainUpdateNameserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
