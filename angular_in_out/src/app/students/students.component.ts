import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  @Input() websiteTitle:string = '';
  @Input() childPerson!: object;
  // @Input() childPerson:object ={};
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(val:string){
    this.newItemEvent.emit(val);
  }
  ngOnInit(){
    this.websiteTitle = 'This is title'
    console.log('ngOnInit is called', this.websiteTitle);
  }

  ngOnChanges(changes: SimpleChange){
    console.log('ngOnChanges is called', this.websiteTitle);
  }
  // to change password
  // ngOnChanges(changes: SimpleChange){
  //   console.log('ngOnChanges is called', this.websiteTitle);
  //   if(changes.currentValue !== 'Password'){
      
  //   }

  // ngDoCheck(){
  //   console.log('ngDoCheck is called');
  // }

  constructor(){
    console.log('Contructor is called', this.websiteTitle);
  }
  ngOnDestroy(){
    console.log('Destroy is calling')
  }

}
