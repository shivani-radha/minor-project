import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SampleService } from './service/sample.service';
import { ChangeColorDirective } from './directive/change-color.directive';
import { MakeBoldDirective } from './directive/make-bold.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from './signup/signup.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeService } from './employee.service';
import { Login1Component } from './login1/login1.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    HeaderComponent,
    FooterComponent,
    ChangeColorDirective,
    MakeBoldDirective,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    EmployeeCreationComponent,
    Login1Component
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [SampleService,
              EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
