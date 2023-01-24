import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';  
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss']
})
export class ScoringComponent implements OnInit {
  lis: [];
  length: any;
  lis2: [];
  constructor(private _formBuilder: FormBuilder,private router: Router, private http: HttpClient) {}
  
  ngOnInit(): void {
    var body: any = new FormData();
      body.append('startup',localStorage.getItem('startup_name'));
    this.http.post<any>("http://localhost:8000/progress",body).subscribe(
        data => {
          this.lis = data
          console.log(this.lis)
          this.length = 0
          this.lis2 = this.lis[this.length]
          setTimeout(() => {
            if(this.lis2['totalbid']>=24){
              this.router.navigateByUrl("/congrats")
            }
            else{
              this.router.navigateByUrl("/blnt")
            }
          }, 8000);
        })
  }
}
