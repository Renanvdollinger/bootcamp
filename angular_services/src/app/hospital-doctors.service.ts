import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalDoctorsService {

  constructor() { }

  getDoctors() {
    return this.doctors.length;
  }

  doctors = [
    {name: 'Renan', specialize: 'Medicine'},
    {name: 'Hash', specialize: 'Dermatology'},
    {name: 'Nora', specialize: 'Medicine'},
    
  ]
}
