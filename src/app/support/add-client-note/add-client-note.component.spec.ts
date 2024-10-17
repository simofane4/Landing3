import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientNoteComponent } from './add-client-note.component';

describe('AddClientNoteComponent', () => {
  let component: AddClientNoteComponent;
  let fixture: ComponentFixture<AddClientNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClientNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClientNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
