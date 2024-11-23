import { Component } from '@angular/core';
declare module 'uuid';
import { PostService } from './post.service'; // Service to handle database operations
import { v4 as uuidv4 } from 'uuid'; // Use UUID for unique ID generation

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  posts: { id: string; title: string; text: string; tag: string }[] = [];

  // posts: string[] = [
  //   "I have a new idea!!!!!!!!!",
  //   "A new idea that I would love to see implemented is a self-washing station in Qatar.",
  //   "An idea that I was thinking of implementing is self-driving car driving schools."
  // ];

  isModalOpen = false;
  showSuccessPopup = false; // Controls the success popup

  newPostTitle = '';
  newPostText = '';
  selectedTag = '';

  constructor(private postService: PostService) {}

  openNewPostModal() {
    this.isModalOpen = true;
  }

  closeNewPostModal() {
    this.isModalOpen = false;
    this.newPostTitle = '';
    this.newPostText = '';
    this.selectedTag = '';
  }

toggleActiveTag(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  target.classList.toggle('active'); // Toggle the active class on the clicked button
}

  newPost = {
    id: '',
    username: 'User1', // Replace this with the actual logged-in user's username
    description: '',
    tags: {
      tech: false,
      beauty: false,
      sports: false,
      entertainment: false,
      others: false,
    },
  };
 

postNewIdea(): void {
  // Check if all required fields are filled
  const isTagSelected = Object.values(this.newPost.tags).some((value) => value);
  const isDescriptionFilled = this.newPost.description.trim().length > 0;

  if (!isDescriptionFilled) {
    alert('Please fill in all fields before posting.');
    return;
  }

    const newPost = {
      id: uuidv4(),
      title: this.newPostTitle,
      text: this.newPostText,
      tag: this.selectedTag
    };

    // Save the post using the service
    this.postService.savePost(newPost).subscribe(() => {
      // Add the post to the local list after successful save
      this.posts.push(newPost);
      this.closeNewPostModal();
    });
  }

}


