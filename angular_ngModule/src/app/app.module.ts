import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CollegeModule } from './college/college.module';
import { DirectRootComponentComponent } from './direct-root-component/direct-root-component.component';
import { CustomModuleModule } from './custom-module/custom-module.module';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DirectRootComponentComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollegeModule,
    CustomModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
