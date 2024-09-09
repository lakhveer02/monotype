import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCommitteeComponent } from './board-committee.component';

describe('BoardCommitteeComponent', () => {
  let component: BoardCommitteeComponent;
  let fixture: ComponentFixture<BoardCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardCommitteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
