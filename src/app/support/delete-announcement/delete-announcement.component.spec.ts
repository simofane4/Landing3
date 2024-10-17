import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAnnouncementComponent } from './delete-announcement.component';

describe('DeleteAnnouncementComponent', () => {
  let component: DeleteAnnouncementComponent;
  let fixture: ComponentFixture<DeleteAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
