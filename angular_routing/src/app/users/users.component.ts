import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit{
  route = inject(ActivatedRoute);

  description!:string;

  users: any = [
    {id: 1, name: 'Renan', description: 'Renan description'},
    {id: 2, name: 'Hash', description: 'Hash description'},
    {id: 3, name: 'Nora', description: 'Nora description'},
    {id: 4, name: 'David', description: 'David description'},
    {id: 5, name: 'Queen', description: 'Queen description'},
    {id: 6, name: 'Prosper', description: 'Prosper description'},
  ]

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let user_id = params.get('id');
      if(user_id){
        let user = this.users.find((x:any) => x.id == user_id)
        if(user){
          this.description = user.description;
        }
      }
    })
  }
}
