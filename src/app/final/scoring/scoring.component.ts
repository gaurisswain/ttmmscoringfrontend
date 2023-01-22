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
export class ScoringComponent {
  mobile:boolean
  submitted = false;
  hide = true; 
  country = [
    { value: 'ind', viewValue: 'India' },
    { value: 'bah', viewValue: 'Bahrain' },
    { value: 'kuw', viewValue: 'Kuwait' },
    { value: 'oman', viewValue: 'Oman' },
    { value: 'quatar', viewValue: 'Qatar' },
    { value: 'saudi', viewValue: 'Saudi Arabia' },
    { value: 'uae', viewValue: 'The United Arab Emirates' },
    { value: 'other', viewValue: 'Other' },
  ];
  state = [
    { value: 'Other', viewValue: 'Other'},
    { value: 'Andhra Pradesh', viewValue: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', viewValue: 'Arunachal Pradesh' },
    { value: 'Assam', viewValue: 'Assam' },
    { value: 'Bihar', viewValue: 'Bihar' },
    { value: 'Chhattisgarh', viewValue: 'Chhattisgarh' },
    { value: 'Goa', viewValue: 'Goa' },
    { value: 'Gujarat', viewValue: 'Gujarat' },
    { value: 'Haryana', viewValue: 'Haryana' },
    { value: 'Himachal Pradesh', viewValue: 'Himachal Pradesh' },
    { value: 'Jharkhand', viewValue: 'Jharkhand' },
    { value: 'Karnataka', viewValue: 'Karnataka' },
    { value: 'Kerala', viewValue: 'Kerala' },
    { value: 'Madhya Pradesh', viewValue: 'Madhya Pradesh' },
    { value: 'Maharashtra', viewValue: 'Maharashtra' },
    { value: 'Manipur', viewValue: 'Manipur' },
    { value: 'Meghalaya', viewValue: 'Meghalaya' },
    { value: 'Mizoram', viewValue: 'Mizoram' },
    { value: 'Nagaland', viewValue: 'Nagaland' },
    { value: 'Odisha', viewValue: 'Odisha' },
    { value: 'Punjab', viewValue: 'Punjab' },
    { value: 'Rajasthan', viewValue: 'Rajasthan' },
    { value: 'Sikkim', viewValue: 'Sikkim' },
    { value: 'Tamil Nadu', viewValue: 'Tamil Nadu' },
    { value: 'Telangana', viewValue: 'Telangana' },
    { value: 'Tripura', viewValue: 'Tripura' },
    { value: 'Uttarakhand', viewValue: 'Uttarakhand' },
    { value: 'Uttar Pradesh', viewValue: 'Uttar Pradesh' },
    { value: 'West Bengal', viewValue: 'West Bengal' },
    { value: 'Andaman and Nicobar Islands (UT)', viewValue: 'Andaman and Nicobar Islands (UT)' },
    { value: 'Chandigarh (UT)', viewValue: 'Chandigarh (UT)' },
    { value: 'Dadra and Nagar Haveli (UT)', viewValue: 'Dadra and Nagar Haveli (UT)' },
    { value: 'Daman and Diu (UT)', viewValue: 'Daman and Diu (UT)' },
    { value: 'Delhi (NCT)', viewValue: 'Delhi (NCT)' },
    { value: 'Jammu and Kashmir (UT)', viewValue: 'Jammu and Kashmir (UT)' },
    { value: 'Ladakh (UT)', viewValue: 'Ladakh (UT)' },
    { value: 'Lakshadweep (UT)', viewValue: 'Lakshadweep (UT)' },
    { value: 'Puducherry (UT)', viewValue: 'Puducherry (UT)' },
  ];
  title = 'newMat';
  isLinear = true;
  firstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private router: Router, private http: HttpClient) {}
  displayStyles = "none";
  flip1= true;
  flip2= false;

  toggle(){
    this.flip1 = !this.flip1;
    this.flip2 = !this.flip2;
  }
  
  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.mobile= true;
    }
    else{
      this.mobile= false;
    }
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email:['', Validators.compose([Validators.required, Validators.email])],
      contact: ['', Validators.compose([Validators.required, Validators.min(10)])],
      state: ['', Validators.required],
      city: ['', Validators.required],
      referral: ['']
    });
  }
  get f(){  
    return this.firstFormGroup.controls;  
  }  
  
  submit(){
    // console.log(this.firstFormGroup.value.name)
    // console.log(this.firstFormGroup.value.email)
    // console.log(this.firstFormGroup.value.contact)
    // console.log(this.firstFormGroup.value.state)
    // console.log(this.firstFormGroup.value.city)
    // console.log(this.firstFormGroup.value.name.length)
    // console.log(this.firstFormGroup.value.email.length)
    // console.log(this.firstFormGroup.value.contact.length)
    // console.log(this.firstFormGroup.value.state.length)
    // console.log(this.firstFormGroup.value.city.length)
    if(this.firstFormGroup.valid) {
      this.submitted = true;
      var body: any = new FormData();
      body.append('name', this.firstFormGroup.value.name);
      body.append('email', this.firstFormGroup.value.email);
      body.append('contact', this.firstFormGroup.value.contact);
      body.append('state', this.firstFormGroup.value.state);
      body.append('city', this.firstFormGroup.value.city);
      body.append('referral', this.firstFormGroup.value.referral);
      this.http.post<any>("https://api3.ecell.in/esummit23/register/", body).subscribe(
        data => {
          if(data.status=='success'){
          Swal.fire('Thankyou for registering! Login to continue')
          this.router.navigateByUrl('/login');
          this.firstFormGroup = this._formBuilder.group({
            name: ['', Validators.required],
            email:['', Validators.compose([Validators.required, Validators.email])],
            contact: ['', Validators.compose([Validators.required, Validators.min(10)])],
            state: ['', Validators.required],
            city: ['', Validators.required],
            referral: ['',],
          });          }
          else if(data.status=='fail'){
            this.firstFormGroup = this._formBuilder.group({
              name: ['', Validators.required],
              email:['', Validators.compose([Validators.required, Validators.email])],
              contact: ['', Validators.compose([Validators.required, Validators.min(10)])],
              state: ['', Validators.required],
              city: ['', Validators.required],
              referral: ['',],
            });            
            Swal.fire({
              title: 'Email ID already registered',
              showDenyButton: true,
              // showCancelButton: true,
              confirmButtonText: 'Login',
              denyButtonText: `Register with other Email ID`,
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigateByUrl('/login');
              } else if (result.isDenied) {
                // this.firstFormGroup.reset();
              }
            })
          }
          else()=>{
            Swal.fire('An error ocurred please contact esummit23@ecell.in')
          }

          },
        
        (error) => {       
          console.error('error caught in component')
          Swal.fire('An error ocurred please contact esummit23@ecell.in')
          this.firstFormGroup = this._formBuilder.group({
            name: ['', Validators.required],
            email:['', Validators.compose([Validators.required, Validators.email])],
            contact: ['', Validators.compose([Validators.required, Validators.min(10)])],
            state: ['', Validators.required],
            city: ['', Validators.required],
            referral: ['',],
          });
        }
        
      )
        
    }
    else if(!this.firstFormGroup.valid){
      Swal.fire('Fill all the required details correctly')
    }
}
}
