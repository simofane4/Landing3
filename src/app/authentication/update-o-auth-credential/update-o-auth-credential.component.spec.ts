import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOAuthCredentialComponent } from './update-o-auth-credential.component';

describe('UpdateOAuthCredentialComponent', () => {
  let component: UpdateOAuthCredentialComponent;
  let fixture: ComponentFixture<UpdateOAuthCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOAuthCredentialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOAuthCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
