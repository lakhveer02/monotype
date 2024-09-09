import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shareholding-pattern',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './shareholding-pattern.component.html',
  styleUrl: './shareholding-pattern.component.css',
})
  export class ShareholdingPatternComponent {
  shareholders: { name: string; shares: number; date: Date }[] = [];
  addShareholder() {
    const nameInput = document.getElementById(
      'shareholderName'
    ) as HTMLInputElement;
    const sharesInput = document.getElementById(
      'numberOfShares'
    ) as HTMLInputElement;
    const dateInput = document.getElementById('reportDate') as HTMLInputElement;
  if (nameInput.value && sharesInput.valueAsNumber && dateInput.valueAsDate) {
      this.shareholders.push({
        name: nameInput.value,
        shares: sharesInput.valueAsNumber,
        date: dateInput.valueAsDate,
      });
      (nameInput.value = ''), (sharesInput.value = '');
      dateInput.value = '';
    }
  }
}
