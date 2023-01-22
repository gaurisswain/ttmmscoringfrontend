import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';
import {takeWhile, tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{
  countdown = 10;
  lis: [];
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    const changelink = () => {
      this.router.navigateByUrl('/scoring');
    }

    const myTimeout = setTimeout(changelink, this.countdown*1000+10000);
    this.http.get<any>("http://localhost:8000/currentstartup").subscribe(
        data => {
          this.lis = data
          console.log(this.lis)
        })
  }
}
