import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  // userService: any;

  // constructor(userService: UserService) {
  //   this.userService = UserService;
  //   this.userService.getUsers();
  //  }


    users:any;
    constructor(private userService:UserService){
      this.users = userService.getUsers();
      console.log(this.users);
    }

}
