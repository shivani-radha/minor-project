import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-creation',
  templateUrl: './employee-creation.component.html',
  styleUrls: ['./employee-creation.component.css']
})
/*export class EmployeeCreationComponent {
   name!: string;
   createEmployee() {
    // your implementation here
  }
}*/
export class EmployeeCreationComponent implements OnInit {
  id!: string;
  name!: string;
  email!: string;
  phone!: string;
  salary!: string;
  employees!: Employee[];
  router: any;

  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
 
  addEmployee(id: string, name: string, email: string, phone: string, salary: string): void {
    const employee = { id, name, email, phone, salary } as unknown as Employee;
    this.employeeService.addEmployee(employee)
      .subscribe(employee => {
        this.employees.push(employee);
        alert("Data added successfully");
      },
      err => {
        alert("Something went wrong");
      });
  }
}




