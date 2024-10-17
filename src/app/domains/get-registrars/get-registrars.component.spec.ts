import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRegistrarsComponent } from './get-registrars.component';

describe('GetRegistrarsComponent', () => {
  let component: GetRegistrarsComponent;
  let fixture: ComponentFixture<GetRegistrarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRegistrarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetRegistrarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
