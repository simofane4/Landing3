import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateTldComponent } from './create-or-update-tld.component';

describe('CreateOrUpdateTldComponent', () => {
  let component: CreateOrUpdateTldComponent;
  let fixture: ComponentFixture<CreateOrUpdateTldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrUpdateTldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrUpdateTldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
