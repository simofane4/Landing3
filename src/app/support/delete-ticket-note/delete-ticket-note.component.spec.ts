import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTicketNoteComponent } from './delete-ticket-note.component';

describe('DeleteTicketNoteComponent', () => {
  let component: DeleteTicketNoteComponent;
  let fixture: ComponentFixture<DeleteTicketNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTicketNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTicketNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
