import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  button_test = "";

  onClick(word){
    this.button_test = word;
  }

  constructor() { }

  ngOnInit() {
  }

}
