import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMeetingNoticeComponent } from './board-meeting-notice.component';

describe('BoardMeetingNoticeComponent', () => {
  let component: BoardMeetingNoticeComponent;
  let fixture: ComponentFixture<BoardMeetingNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardMeetingNoticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardMeetingNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
