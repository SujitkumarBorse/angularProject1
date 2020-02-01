import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  allEmployee: Employee[];

  ngOnInit() {
    this.getEmployee();
    // this.empSrv.getAllEmployees().subscribe(data => this.allEmployee = data)
  }
  getEmployee() {
    this._employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
      },
      (error) => {
        this.allEmployee = error;
      }
    )
  }
  deleteEmployee(id: number) {
    console.log(id);
    this._employeeService.deleteEmployee(id).subscribe(
      (data: Employee) => {
        this.getEmployee();
      });
    }

    edit(emp){
      this._employeeService.currentEmployee = Object.assign({},emp);
    }
  
}
