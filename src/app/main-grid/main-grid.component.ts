import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {

  images: string[] = [
    "IMG_5518.JPG",
    "IMG_5519.JPG",
    "IMG_5520.JPG",
    "IMG_5530.JPG",
    "IMG_5550.JPG",
    "IMG_5564.JPG",
    "IMG_5599.JPG",
    "IMG_5600.JPG",
    "IMG_5638.JPG",
    "IMG_5666.JPG",
    "P1020259.JPG",
    "P1020278.JPG",
    "P1020283.JPG",
    "P1030121.JPG",
    "P1030152.JPG",
    "P1030171.JPG"
  ]

  constructor() { }

  ngOnInit() {
  }

}
