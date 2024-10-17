import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketNoteComponent } from './add-ticket-note.component';

describe('AddTicketNoteComponent', () => {
  let component: AddTicketNoteComponent;
  let fixture: ComponentFixture<AddTicketNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTicketNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTicketNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
