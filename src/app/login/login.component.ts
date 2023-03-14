import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
//declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/* export class LoginComponent  implements OnInit{

  login:FormGroup|any;
  constructor(private _http:HttpClient, private router:Router) { }
  ngOnInit(): void {
    this.login = new FormGroup({
      'fname':new FormControl(),
      'password' : new FormControl()

    })
  }
  logindata(login:FormGroup){
    // console.log(this.login.value);
     this._http.get<any>("http://localhost:3000/signup")
     .subscribe(res=>{
       const user = res.find((a:any)=>{
         return a.fname === this.login.value.fname && a.password === this.login.value.password
       });
 
       if(user){
        alert('you are successfully login');
        this.login.reset();
       // $('.form-box').css('display','none');
        this.router.navigate(["dashboard"]);
      }else{
        alert('User Not Found');
       // this._route.navigate(['login']);
      }
 
     }, err=>{
       alert('Something was wrong');
     })
    }   */

    /* sbtn1(){
      $('.form-box').css('display','none');
      $('.form-box1').css('display','block');
    }*/
 
 
    /*export class LoginComponent  implements OnInit{
     public loginForm!:FormGroup   
      constructor(private http:HttpClient, private router:Router,private formBuilder:FormBuilder) { }
      
      ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
          email:[''],
          password :[''] 
    
        })
      }
      login(){
        // console.log(this.login.value);
         this.http.get<any>("http://localhost:3000/signup")
         .subscribe(res=>{
           const user = res.find((a:any)=>{
             return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
           });
     
           if(user){
            alert('login success');
            this.loginForm.reset();
           // $('.form-box').css('display','none');
            this.router.navigate(['dashboard']);
          }else{
            alert('User Not Found');
           // this._route.navigate(['login']);
          }
     
         }, err=>{
           alert('Something was wrong');
         })
        }   
    
      }*/
      export class LoginComponent {
        loginForm: any;
  password!: 'string';
  username!: "string ;";
       
        
        constructor(private authService: AuthService, private router: Router,_http: HttpClient) { }
      
        /* login():void{
          this.http.post<any>('http://localhost:3000/login')
      .subscribe((_response: any) =>{
        const user = res.find((a:any)=>{
          return this.authService.login(this.username, this.password)
        });
          if (user) {
            this.router.navigate(['/']);
          } else {
            alert('Invalid username or password');
          }
        });*/
        login(): void {
          if (this.authService.login(this.username, this.password)) {
            this.router.navigate(['/dashboard']);
          } else {
            alert('Invalid username or password');
          }
        }
      }
      