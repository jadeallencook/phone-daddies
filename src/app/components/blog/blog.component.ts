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
      body: "Our machinery gives us patented solutions for a wide range of cell phone repairs. Our staff is always developing new solutions and more efficient ways to fix common issues with the most popular smart phone models. Our solutions are cost-effective and efficient.",
      image: "assets/images/blog/machine.jpg",
      link: "#",
      alt: "Phone Repair Machine"
    }, {
      title: "My Blog Title",
      body: "What my blog is about...",
      image: "assets/images/blog/machine.jpg",
      link: "#",
      alt: "Phone Repair Machine"
    }, {
      title: "My Blog Title",
      body: "What my blog is about...",
      image: "assets/images/blog/machine.jpg",
      link: "#",
      alt: "Phone Repair Machine"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
