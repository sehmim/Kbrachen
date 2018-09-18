import { Component, OnInit } from '@angular/core';

export interface Format {
  file: string;
  rotate: string;
}

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {

  images: Format[] = [
    {file: "IMG_5518.JPG", rotate: "0"},
    {file: "IMG_5519.JPG", rotate: "0"},
    {file: "IMG_5520.JPG", rotate: "-90"},
    {file: "IMG_5530.JPG", rotate: "-90"},
    {file: "IMG_5550.JPG", rotate: "0"},
    {file: "IMG_5564.JPG", rotate: "-90"},
    {file: "IMG_5599.JPG", rotate: "-90"},
    {file: "IMG_5600.JPG", rotate: "-90"},
    {file: "IMG_5638.JPG", rotate: "-90"},
    {file: "IMG_5666.JPG", rotate: "-90"},
    {file: "P1020259.JPG", rotate: "-90"},
    {file: "P1020278.JPG", rotate: "0"},
    {file: "P1020283.JPG", rotate: "0"},
    {file: "P1030121.JPG", rotate: "-90"},
    {file: "P1030152.JPG", rotate: "-90"},
    {file: "P1030171.JPG", rotate: "-90"}
  ];

  //if rotate is "0" assign the class to noRotate and if ts "-90" the assign is rotate

  constructor() { }

  ngOnInit() {
  }

}
