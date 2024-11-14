import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  posts: string[] = [
    "I have a new idea!!!!!!!!!",
    "A new idea that I would love to see implemented is a self-washing station in Qatar.",
    "An idea that I was thinking of implementing is self-driving car driving schools."
  ];

  isModalOpen = false;

  openNewPostModal() {
    this.isModalOpen = true;
  }

  closeNewPostModal() {
    this.isModalOpen = false;
  }

}


