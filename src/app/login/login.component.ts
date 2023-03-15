/*import { Component, OnInit } from '@angular/core';
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


      export class LoginComponent {
        loginForm: any;
  password!: 'string';
  username!: "string ;";
       
        
        constructor(private authService: AuthService, private router: Router,_http: HttpClient) { }
      
        
        login(): void {
          if (this.authService.login(this.username, this.password)) {
            this.router.navigate(['/dashboard']);
          } else {
            alert('Invalid username or password');
          }
        }
      }
      */