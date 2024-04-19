import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_in_out';

  // create one object and send it data to child
  person = {name: 'Renan', age: 34}

  students = ["Renan", "Sam", "test"]

  professors = ["Rob", "Sam", "Petter"]

  addstudents(student:string){
    this.students.push(student)
  }
  addprofessors(professor:string){
    this.professors.push(professor)
  }

}
