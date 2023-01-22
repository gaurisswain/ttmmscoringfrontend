import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  lis: [];
  lis2: [];
  investor_name: any;
  isdisable: any;
  firstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    const isadmin = localStorage.getItem("isadminlogin")
    this.investor_name = localStorage.getItem("investor_name")
    if(isadmin != "true"){
      this.router.navigateByUrl('/admin-login');
    }
    this.firstFormGroup = this._formBuilder.group({
      // name: ['', Validators.required],
      // founder_name: ['', Validators.required],
      bid:['', Validators.required],
    });
    this.http.get<any>("http://localhost:8000/startups").subscribe(
        res => {
          console.log(res)
          this.lis = res;
          // window.alert("Success")
        }
      )
      var body: any = new FormData();
      body.append('investor_name', localStorage.getItem("investor_name"));
    this.http.post<any>("http://localhost:8000/defaultbid", body).subscribe(
        res => {
          console.log(res)
          this.lis2 = res;
          // window.alert("Success")
        }
      )
  }
  submit(startup){
    if(this.firstFormGroup.valid) {
      var body: any = new FormData();
      // body.append('username', this.firstFormGroup.value.username);
      body.append('bid', this.firstFormGroup.value.bid);
      body.append('investor_name', localStorage.getItem("investor_name"));
      body.append('startup_name', startup);
      this.http.post<any>("http://localhost:8000/bidding", body).subscribe(
        data => {
          // window.location.reload()
          var body: any = new FormData();
      body.append('investor_name', localStorage.getItem("investor_name"));
    this.http.post<any>("http://localhost:8000/defaultbid", body).subscribe(
        res => {
          console.log(res)
          this.lis2 = res;
          // window.alert("Success")
        }
      )
        }
      )
    }
  }
  logout(){
    localStorage.removeItem("isadminlogin")
    localStorage.removeItem("investor_name")
    this.router.navigateByUrl('/admin-login')
  }
}
