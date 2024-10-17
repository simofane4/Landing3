import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainRequestEppComponent } from './domain-request-epp.component';

describe('DomainRequestEppComponent', () => {
  let component: DomainRequestEppComponent;
  let fixture: ComponentFixture<DomainRequestEppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainRequestEppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainRequestEppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
