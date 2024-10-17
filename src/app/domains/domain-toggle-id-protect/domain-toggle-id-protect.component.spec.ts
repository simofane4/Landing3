import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainToggleIdProtectComponent } from './domain-toggle-id-protect.component';

describe('DomainToggleIdProtectComponent', () => {
  let component: DomainToggleIdProtectComponent;
  let fixture: ComponentFixture<DomainToggleIdProtectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainToggleIdProtectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainToggleIdProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
