import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board-meeting-outcome',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './board-meeting-outcome.component.html',
  styleUrl: './board-meeting-outcome.component.css'
})
export class BoardMeetingOutcomeComponent {
  meetings = [
    { title: 'BOARD MEETING OUTCOME', date: new Date('2023-11-08') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2023-05-26') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2023-05-17') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2017-03-24') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2017-05-29') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2017-06-22') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2017-07-19') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2016-09-01') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2016-08-13') },
    { title: 'BOARD MEETING OUTCOME', date: new Date('2016-11-07') }
  ];
}
