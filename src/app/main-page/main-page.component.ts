import { Component , OnInit } from '@angular/core';
// import ideaservice
import { IdeaService } from '../Service/idea.service';
import { v4 as uuidv4 } from 'uuid'; // Use UUID for unique ID generation

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  ideas: { id?: number; title: string; content: string; tagname: string }[] = [];

  isModalOpen = false; // Modal state
  showSuccessPopup = false; // Controls the success popup

  newIdeaTitle = ''; // Holds the new idea title
  newIdeaContent = ''; // Holds the new idea content
  selectedTagname = ''; // Holds the selected tagname

  constructor(private ideaService: IdeaService) {}

  openNewIdeaModal() {
    this.isModalOpen = true;
  }

  closeNewIdeaModal() {
    this.isModalOpen = false;
    this.newIdeaTitle = '';
    this.newIdeaContent = '';
    this.selectedTagname = '';
  }

  toggleActiveTag(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.classList.toggle('active'); 
  }

  selectTag(tag: string): void {
    this.selectedTagname = tag; // Store the selected tag
  }
  
  postNewIdea(): void {
    const isTagSelected = this.selectedTagname.trim().length > 0;
    const isContentFilled = this.newIdeaContent.trim().length > 0;
  
    if (!isTagSelected || !isContentFilled) {
      alert('Please select a tag and fill in the content before posting.');
      return;
    }
  
    const newIdea = {
      title: '', // Optional if not needed
      content: this.newIdeaContent,
      tagname: this.selectedTagname,
    };
  
    this.ideaService.saveIdea(newIdea).subscribe({
      next: () => {
        this.ideas.push(newIdea);
        this.closeNewIdeaModal();
        this.showSuccessPopup = true;
        this.fetchIdeas(); // Fetches the updated list of ideas  x.x.x.x.
  
        // Hides the popup after 2 seconds
        setTimeout(() => (this.showSuccessPopup = false), 2000);
      },
      error: (err) => {
        console.error('Error saving idea:', err);
        alert('An error occurred while saving your idea. Please try again.');
      },
    });
  }
  
  ngOnInit(): void {
    this.fetchIdeas();
  }

  fetchIdeas(): void {
    this.ideaService.getIdeas().subscribe({
        next: (data) => {
            this.ideas = data; // adds to an array all ideas
        },
        error: (err) => console.error('Error fetching ideas:', err)
    });
  }


}


