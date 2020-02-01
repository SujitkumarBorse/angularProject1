import { EmployeeService } from 'src/app/shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

  createAndUpdate(currentEmployee : Employee){
    // console.log(currentEmployee);
    if(currentEmployee.id != null) {
      // console.log('Update');
      this.updateEmployee(currentEmployee);
      
    }else{
      // console.log('Create');
      this.createEmployee(currentEmployee);

    }
  }

  createEmployee(emp:Employee){
    this.employeeService.createEmployee(emp).subscribe();
  }

  updateEmployee(emp:Employee){
    this.employeeService.updateEmployee(emp).subscribe();    
  }

  clear(){
    this.employeeService.currentEmployee = {
    id: null,
    firstName: '',
    lastName: '',
    designation: '',
    contact: null,
    address: '',
    }
  }
}
