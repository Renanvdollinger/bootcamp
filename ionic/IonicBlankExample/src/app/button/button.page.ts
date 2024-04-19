import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  movingBack(){
    this.location.back();
  }

}
