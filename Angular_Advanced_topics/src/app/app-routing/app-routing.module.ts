import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TasksComponent } from '../tasks/tasks.component';
import { AddTaskComponent } from '../add-task/add-task.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: '**', redirectTo:'home'},
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    
  
})
export class AppRoutingModule { }
