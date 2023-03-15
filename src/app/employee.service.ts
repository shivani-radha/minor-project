/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000/employees';
  authService: any;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
    if (this.authService.isHr()) {
      this['employees'].push(employee);
    } else {
      throw new Error('Unauthorized');
    }
  }
    
  }


  

  /* createEmployee(employee: Employee): void {
    if (this.authService.isHr()) {
      this['employees'].push(employee);
    } else {
      throw new Error('Unauthorized');
    }
}*/




