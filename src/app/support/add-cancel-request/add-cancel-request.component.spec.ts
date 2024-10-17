import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCancelRequestComponent } from './add-cancel-request.component';

describe('AddCancelRequestComponent', () => {
  let component: AddCancelRequestComponent;
  let fixture: ComponentFixture<AddCancelRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCancelRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCancelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
