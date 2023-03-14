import { HttpClient } from '@angular/common/http';
import{ Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';//import { ToastrModule, ToastrService } from 'ngx-toastr';//declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit{
  public signupForm !:FormGroup;
  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder){}//private toast:ToastrService){}


  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      fullname: [''],
      email: [''],
      mobile: [''],
      password: [''] 

    })
  }
signUp(){
  //console.log(this.signup.value);
  this.http.post<any>("http://localhost:3000/signup",this.signupForm.value)
  .subscribe(res=>{
    alert("signup successfully");
   this.signupForm.reset();
    this.router.navigate(['login']);
  }, err=>{
alert("something went wrong");
  })
}
}

/*export class SignUpComponent implements OnInit{
  constructor(private router:Router,private http:HttpClient){}//private toast:ToastrService){}

    signup:FormGroup|any;
  signuser:any;
  ngOnInit(): void {
    this.signup=new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'email': new FormControl(),
      'phone': new FormControl(),
      'password': new FormControl(),

    })
  }
signupdata(signup:FormGroup){
  //console.log(this.signup.value);
  this.signuser=this.signup.value.fname
  this.http.post<any>("http://localhost:3000/signup",this.signup.value)
  .subscribe(res=>{
    alert("data added successfully")
   this.signup.reset();
    this['router'].navigate(['login']);
  }, err=>{
alert("something went wrong");
  })
}

/*sbtn(){
   
  this['router'].navigate(['login']);
  //$('.form-box1').css('z-index', '99');
  $('.form-box').css('display','block');
  $('.form-box1').css('display','none');
}
*/
