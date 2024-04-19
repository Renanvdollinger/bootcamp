import { ApplicationInitStatus, Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {

  http:HttpClient = inject(HttpClient);

  getEmployees() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept':'application/json'});
    const option = {headers: headers};  
    
    return this.http.get('http://localhost:3000/employees/', option);
  }

  getEmployeesById() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept':'application/json'});
    const option = {headers: headers};  
    
    return this.http.get('http://localhost:3000/employees/1', option);
  }

  constructor() { }
}
