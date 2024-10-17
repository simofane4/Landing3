import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnnouncementsComponent } from './get-announcements.component';

describe('GetAnnouncementsComponent', () => {
  let component: GetAnnouncementsComponent;
  let fixture: ComponentFixture<GetAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
