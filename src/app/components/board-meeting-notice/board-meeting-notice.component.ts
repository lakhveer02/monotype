import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board-meeting-notice',
  standalone: true,
  imports: [NgFor],
  templateUrl: './board-meeting-notice.component.html',
  styleUrl: './board-meeting-notice.component.css'
})
export class BoardMeetingNoticeComponent {
  meetings = [
    { title: 'BOARD MEETING – 30-06-2024', date: '30-06-2024' },
    { title: 'BOARD MEETING – 02-02-2024', date: '02-02-2024' },
    { title: 'BOARD MEETING – 08-11-2023', date: '08-11-2023' },
    { title: 'BOARD MEETING – 17-05-2023', date: '17-05-2023' },
    { title: 'INTIMATION OF BOARD MEETING – 26-05-2023', date: '26-05-2023' },
    { title: 'BOARD MEETING – 11-02-2020', date: '11-02-2020' }
  ]
}
