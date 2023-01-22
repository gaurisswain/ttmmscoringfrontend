import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit{

  lis : [];
  firstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    // this.email = localStorage.getItem("email");
    // this.auth = localStorage.getItem("authToken");
    // if(!this.auth){
    //   localStorage.setItem("event", "seedstars");
    //   this.router.navigateByUrl('/login');
    // }
    // else if(this.auth){
      // var pass_buyed:any;
      // var body: any = new FormData();
      // body.append('email', localStorage.getItem("email"));
      // this.http.post<any>("https://api3.ecell.in/esummit23/passdetails/", body).subscribe(
      //   data => {
      //     pass_buyed = data.pass_buyed
      //     if(!pass_buyed){
      //       this.router.navigateByUrl('/pass');
      //       localStorage.setItem("event", "seedstars");
      //     }
      //     else if(pass_buyed){
      //       this.router.navigateByUrl('/seedstarreg');
      //     }
      //   },
      //   err => {}
      //   )
    // }
    this.firstFormGroup = this._formBuilder.group({
      // name: ['', Validators.required], 
      username: ['', Validators.required], 
      // founder_name: ['', Validators.required],
      password:['', Validators.required],
    });
    // this.auth = localStorage.getItem("authToken");
    // if(this.auth){
    //   this.loggedin = true
    //   this.name = localStorage.getItem("name");
    //   this.email = localStorage.getItem("email");
    //   this.pass_name = localStorage.getItem("pass_name");
    //   this.pass = localStorage.getItem("pass_buyed");
    //   if(this.pass == 'true'){
    //     this.pass_buyed = true
    //   }
    // }
  }
  submit(){
    // console.log(this.fileseed)
    if (this.firstFormGroup.valid) {
      var body: any = new FormData();
      // console.log(this.firstFormGroup.value.startup_name)
      // console.log(this.firstFormGroup.value.description)
      // console.log(this.firstFormGroup.value.sector)
      // console.log(this.firstFormGroup.value.stage)
      // console.log(this.firstFormGroup.value.cofounder)
      // console.log(this.firstFormGroup.value.website)
      // console.log(this.firstFormGroup.value.headquater)
      // console.log(this.fileseed)
      // body.append('name', this.firstFormGroup.value.name);
      body.append('username', this.firstFormGroup.value.username);
      body.append('password', this.firstFormGroup.value.password);
      // const headers = { Authorization: "Token " + localStorage.getItem("authToken") }

      // console.log(headers)
      this.http.post<any>("http://localhost:8000/token", body).subscribe(
        data => {
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Registration successful',
          //   showConfirmButton: false,
          //   timer: 1500
          // })
          // window.alert("Login Successful")
          this.lis = data
          // localStorage.setItem("adminname", data['adminname'])
          console.log(this.lis['admin_name'])
          if(this.lis['success']==true){
            localStorage.setItem("investor_name", this.lis['admin_name'])
            localStorage.setItem("isadminlogin","true")
            this.router.navigateByUrl('/admin');
          }
          else{
            window.alert("Wrong Credentials")
          }
        },
        // (error) => {       
        //   console.error('error caught in component')
        //   window.alert("Some error ocurred. Please contact bhuvan@ecell.in")
        //   // Swal.fire('Some error ocurred. Please contact bhuvan@ecell.in')
        //   // console.log(error)
        //   // console.log('not working')
        // }
        
      )
        
    }
    else{
      // Swal.fire('Fill all the required details')
      window.alert("Fill all the required details")
    }
  }
}
