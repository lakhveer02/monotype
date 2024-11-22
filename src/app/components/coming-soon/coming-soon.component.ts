import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css',
})
export class ComingSoonComponent {
  countdown: any = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  private targetDate: Date = new Date('2025-12-24T00:00:00');
  private intervalId: number | undefined;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.updateCountdown();
      this.intervalId = window.setInterval(() => this.updateCountdown(), 1000);
    }
  } 

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.countdown.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.countdown.minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
      clearInterval(this.intervalId);
      this.countdown = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }
}
