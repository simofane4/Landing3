import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketReplyComponent } from './add-ticket-reply.component';

describe('AddTicketReplyComponent', () => {
  let component: AddTicketReplyComponent;
  let fixture: ComponentFixture<AddTicketReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTicketReplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTicketReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
