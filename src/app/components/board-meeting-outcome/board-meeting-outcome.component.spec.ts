import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMeetingOutcomeComponent } from './board-meeting-outcome.component';

describe('BoardMeetingOutcomeComponent', () => {
  let component: BoardMeetingOutcomeComponent;
  let fixture: ComponentFixture<BoardMeetingOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardMeetingOutcomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardMeetingOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
