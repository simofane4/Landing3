import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSsoTokenComponent } from './create-sso-token.component';

describe('CreateSsoTokenComponent', () => {
  let component: CreateSsoTokenComponent;
  let fixture: ComponentFixture<CreateSsoTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSsoTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSsoTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
