import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  phones = [
    {
      image: "google-pixel-Section-Fixez.png",
      brand: "Google"
    }, {
      image: "menu-htc_4.png",
      brand: "HTC"
    }, {
      image: "menu-ipad_7.png",
      brand: "iPad"
    }, {
      image: "menu-iphone_7.png",
      brand: "iPhone"
    }, {
      image: "menu-ipod.png",
      brand: "iPod"
    }, {
      image: "menu-lg_7.png",
      brand: "LG"
    }, {
      image: "menu-motorola_4.png",
      brand: "Motorola"
    }, {
      image: "menu-nokia_4.png",
      brand: "Nokia"
    }, {
      image: "menu-samsung-white_4.png",
      brand: "Samsung"
    }, {
      image: "menu-tablet_4.png",
      brand: "Tablets"
    }, {
      image: "oneplus-one-64.png",
      brand: "One"
    }, {
      image: "sony-xperia-z3-section.png",
      brand: "Sony"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
