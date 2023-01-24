import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss']
})
export class WaitComponent implements OnInit {
  lis: [];
  length: any;
  lis2: any;
  constructor(private router: Router, private http: HttpClient) {}
  
  ngOnInit(): void {
    var body: any = new FormData();
      body.append('startup_name',localStorage.getItem('startup_name'));
    this.http.post<any>("http://localhost:8000/showinvestor",body).subscribe(
        data => {
          this.lis = data
          console.log(this.lis)
          this.length = 0
          this.lis2 = this.lis[this.length]
          if(this.lis2['isinvestor']==true){
            this.router.navigateByUrl('/result')
          }
        })
      setInterval(() => {
        var body: any = new FormData();
      body.append('startup_name',localStorage.getItem('startup_name'));
    this.http.post<any>("http://localhost:8000/showinvestor",body).subscribe(
        data => {
          this.lis = data
          // console.log(this.lis)
          this.length = 0
          this.lis2 = this.lis[this.length]
          if(this.lis2['isinvestor']==true){
            this.router.navigateByUrl('/result')
          }
        })
      }, 10000)
  }
}
