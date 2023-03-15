import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';
//import { SignUpComponent } from './signup/signup.component';
//import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
//import { EmployeeService } from './employee.service';
import { Login1Component } from './login1/login1.component';
import { DummyComponent } from './dummy/dummy.component';
@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    Login1Component
    /*DashboardComponent,
    SignUpComponent,
    EmployeeCreationComponent,
    PolComponent
     */
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
              /* EmployeeService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
