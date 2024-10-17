import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainWhoisComponent } from './domain-whois.component';

describe('DomainWhoisComponent', () => {
  let component: DomainWhoisComponent;
  let fixture: ComponentFixture<DomainWhoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainWhoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainWhoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
