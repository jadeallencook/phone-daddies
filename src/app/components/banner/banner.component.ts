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
      body: "Throughout our years in business we have developed a staff that can handle the demand of Tawas Michigan and the surrounding area. Our service area now spans to service phones across West branch, Bay City and more!",
      image: "/assets/images/banner/the-shop.jpg",
      btn: "Get It Fixed",
      link: "/repair",
      alt: "blank photo"
    }
  ];

  constructor() { }

  ngOnInit() { }

}
