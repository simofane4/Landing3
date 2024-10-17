import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTicketReplyComponent } from './delete-ticket-reply.component';

describe('DeleteTicketReplyComponent', () => {
  let component: DeleteTicketReplyComponent;
  let fixture: ComponentFixture<DeleteTicketReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTicketReplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTicketReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
