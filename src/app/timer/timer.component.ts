import { Component, OnInit, OnDestroy, Input, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})


export class TimerComponent {
  mm = 0;
  ss = 0;
  ms = 0;
  isRunning = false;
  timerId = 0;

  clickHandler() {
    if (!this.isRunning) {
      // Stop => Running
      this.timerId = window.setInterval(() => {
        this.ms++;

        if (this.ms >= 100) {
          this.ss++;
          this.ms = 0;
        }
        if (this.ss >= 60) {
          this.mm++;
          this.ss = 0
        }
      }, 10);
    } else {
      clearInterval(this.timerId);
    }
    this.isRunning = !this.isRunning;
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }  
}