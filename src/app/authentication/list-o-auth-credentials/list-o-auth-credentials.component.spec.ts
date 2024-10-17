import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOAuthCredentialsComponent } from './list-o-auth-credentials.component';

describe('ListOAuthCredentialsComponent', () => {
  let component: ListOAuthCredentialsComponent;
  let fixture: ComponentFixture<ListOAuthCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOAuthCredentialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOAuthCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
