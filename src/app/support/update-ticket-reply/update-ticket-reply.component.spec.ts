import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTicketReplyComponent } from './update-ticket-reply.component';

describe('UpdateTicketReplyComponent', () => {
  let component: UpdateTicketReplyComponent;
  let fixture: ComponentFixture<UpdateTicketReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTicketReplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTicketReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
