import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientDomainComponent } from './update-client-domain.component';

describe('UpdateClientDomainComponent', () => {
  let component: UpdateClientDomainComponent;
  let fixture: ComponentFixture<UpdateClientDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateClientDomainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateClientDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
