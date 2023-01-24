import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{
  lis: [];
  length: any;
  lis2: any;
  lismain: [];
  imageurl: any;
  constructor(private router: Router, private http: HttpClient) {}
  
  ngOnInit(): void {
    var body: any = new FormData();
      body.append('startup_name',localStorage.getItem('startup_name'));
    this.http.post<any>("http://localhost:8000/investors",body).subscribe(
        data => {
          this.lismain = data
          // console.log(this.lis)
        })

    setInterval(() => {
      var body: any = new FormData();
      body.append('startup_name',localStorage.getItem('startup_name'));
    this.http.post<any>("http://localhost:8000/showprogress",body).subscribe(
        data => {
          this.lis = data
          console.log(this.lis)
          this.length = 0
          this.lis2 = this.lis[this.length]
          if(this.lis2['progress']==true){
            this.router.navigateByUrl('/progress')
            // console.log("working")
          }
        })
    },10000)
  }
}
