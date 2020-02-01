
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  fakeUrl = 'http://localhost:3000/Employee';


  constructor(private _httpclient: HttpClient) { }

  currentEmployee: Employee = {
    id: null,
    firstName: '',
    lastName: '',
    designation: '',
    contact: null,
    address: '',
  }

  getAllEmployees(): Observable<Employee[]> {
    return this._httpclient.get<Employee[]>(this.fakeUrl, headerOption);
  }


  deleteEmployee(id: number): Observable<Employee> {
    return this._httpclient.delete<Employee>(this.fakeUrl + '/' + id, headerOption)
  }


  createEmployee(emp: Employee): Observable<Employee> {
    return this._httpclient.post<Employee>(this.fakeUrl, emp, headerOption);
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    return this._httpclient.put<Employee>(this.fakeUrl + '/' + emp.id, emp, headerOption);

  }

}
