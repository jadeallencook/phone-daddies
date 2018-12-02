import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners = [
    {
      title: "Broken Screen?",
      body: "Throughout our years, we've developed a staff that can service phones throughout Michigan!",
      image: "/assets/images/banner/the-shop.jpg",
      btn: "Get It Fixed",
      link: "/form/repair",
      alt: "blank photo"
    }
  ];

  constructor() { }

  ngOnInit() { }

}
