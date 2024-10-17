import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainTransferComponent } from './domain-transfer.component';

describe('DomainTransferComponent', () => {
  let component: DomainTransferComponent;
  let fixture: ComponentFixture<DomainTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
