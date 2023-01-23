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
  constructor(private _formBuilder: FormBuilder,private router: Router, private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8000/progress").subscribe(
        data => {
          this.lis = data
          console.log(this.lis)
        })
  }
}
