import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeTicketComponent } from './merge-ticket.component';

describe('MergeTicketComponent', () => {
  let component: MergeTicketComponent;
  let fixture: ComponentFixture<MergeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MergeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
