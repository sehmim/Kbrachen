import { Component, OnInit } from '@angular/core';

export interface Format {
  file: string;
  class: string;
  col: number;
  row: number;
}

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
//if class == "no-rotate-image" then the image takes up another column
//if class == "rotate-image" the image takes up another row
  images: Format[] = [
    {file: "IMG_5518.JPG", class: "no-rotate-image", col: 1, row: 1}, 
    {file: "IMG_5519.JPG", class: "no-rotate-image", col: 1, row: 1},
    {file: "IMG_5520.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "IMG_5530.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "IMG_5550.JPG", class: "no-rotate-image", col: 1, row: 1},
    {file: "IMG_5564.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "IMG_5599.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "IMG_5600.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "IMG_5638.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "IMG_5666.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "P1020259.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "P1020278.JPG", class: "no-rotate-image", col: 1, row: 1},
    {file: "P1020283.JPG", class: "no-rotate-image", col: 1, row: 1},
    {file: "P1030121.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "P1030152.JPG", class: "rotate-image", col: 1, row: 2},
    {file: "P1030171.JPG", class: "rotate-image", col: 1, row: 2}
  ];

  //if rotate is "0" assign the class to noRotate and if ts "-90" the assign is rotate

  constructor() { }

  ngOnInit() {
  }

}
