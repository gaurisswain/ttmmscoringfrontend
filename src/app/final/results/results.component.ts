import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{
  lis: [];
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    var body: any = new FormData();
      body.append('startup_name','Startup1');
    this.http.post<any>("http://localhost:8000/investors", body).subscribe(
        data => {
          this.lis = data
          console.log(this.lis)
        })
  }
  next(){
    this.router.navigateByUrl('/');
  }
}
