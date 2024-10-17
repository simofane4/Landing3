import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTicketSenderComponent } from './block-ticket-sender.component';

describe('BlockTicketSenderComponent', () => {
  let component: BlockTicketSenderComponent;
  let fixture: ComponentFixture<BlockTicketSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockTicketSenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockTicketSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
