import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs = [
    {
      title: "New Equipment",
      body: "Our machinery gives us patented solutions for a wide range of cell phone repairs. Our staff is always developing new solutions and more efficient ways to fix common issues with the most popular smart phone models.",
      image: "assets/images/blog/machine.jpg",
      link: "#",
      alt: "Phone Repair Machine"
    }, {
      title: "iPhone 5c Repair",
      body: "If you need iPhone 5c repair services we can deliver a wealth of information and products for repairing popular iPhone models as well as change up the backplate/front and home button for customization!",
      image: "assets/images/blog/5c.jpg",
      link: "#",
      alt: "Phone Repair Machine"
    }, {
      title: "Galaxy S5 Repair",
      body: "If you have a Galaxy S5, consider getting repair services directly through our company. Our staff can help you preserve the integrity and value of your galaxy S5 with new screen repair!",
      image: "assets/images/blog/galaxy.jpg",
      link: "#",
      alt: "Phone Repair Machine"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
