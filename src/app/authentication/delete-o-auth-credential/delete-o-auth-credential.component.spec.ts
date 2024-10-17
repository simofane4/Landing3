import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOAuthCredentialComponent } from './delete-o-auth-credential.component';

describe('DeleteOAuthCredentialComponent', () => {
  let component: DeleteOAuthCredentialComponent;
  let fixture: ComponentFixture<DeleteOAuthCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteOAuthCredentialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteOAuthCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
