import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
  
export class TimerComponent implements OnInit{
  countdown = 10;
  lis: [];
  lis1: any;
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    const changelink = () => {
      this.router.navigateByUrl('/scoring');
    }

    // const myTimeout = setTimeout(changelink, this.countdown*1000+10000);
    this.http.get<any>("http://localhost:8000/currentstartup").subscribe(
        data => {
          this.lis = data
          console.log(this.lis)
          this.lis1 = this.lis['startup_name']
          localStorage.setItem('startup_name', this.lis1)
          // this.lis1 = this.lis[0]
        })
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }  

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
}