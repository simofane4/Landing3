import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOAuthCredentialComponent } from './create-o-auth-credential.component';

describe('CreateOAuthCredentialComponent', () => {
  let component: CreateOAuthCredentialComponent;
  let fixture: ComponentFixture<CreateOAuthCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOAuthCredentialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOAuthCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
