import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {

  http:HttpClient = inject(HttpClient);

  getEmployees() {
    

  }

  constructor() { }
}
