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
      brand: "Google",
      link: "/repair"
    }, {
      image: "menu-htc_4.png",
      brand: "HTC",
      link: "/repair"
    }, {
      image: "menu-ipad_7.png",
      brand: "iPad",
      link: "/repair"
    }, {
      image: "menu-iphone_7.png",
      brand: "iPhone",
      link: "/repair"
    }, {
      image: "menu-ipod.png",
      brand: "iPod",
      link: "/repair"
    }, {
      image: "menu-lg_7.png",
      brand: "LG",
      link: "/repair"
    }, {
      image: "menu-motorola_4.png",
      brand: "Motorola",
      link: "/repair"
    }, {
      image: "menu-nokia_4.png",
      brand: "Nokia",
      link: "/repair"
    }, {
      image: "menu-samsung-white_4.png",
      brand: "Samsung",
      link: "/repair"
    }, {
      image: "menu-tablet_4.png",
      brand: "Tablets",
      link: "/repair"
    }, {
      image: "oneplus-one-64.png",
      brand: "One",
      link: "/repair"
    }, {
      image: "sony-xperia-z3-section.png",
      brand: "Sony",
      link: "/repair"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
