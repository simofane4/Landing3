import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainReleaseComponent } from './domain-release.component';

describe('DomainReleaseComponent', () => {
  let component: DomainReleaseComponent;
  let fixture: ComponentFixture<DomainReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainReleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
