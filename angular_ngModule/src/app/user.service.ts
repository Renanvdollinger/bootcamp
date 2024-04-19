import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {id: 1, name:"Renan" },
    {id: 2, name:"Hash" },
    {id: 3, name:"Nora" },
    {id: 4, name:"David" },
    {id: 5, name:"Queen" },

  ]
  getUsers(){
    return this.users;
  }

  constructor() { }
}
