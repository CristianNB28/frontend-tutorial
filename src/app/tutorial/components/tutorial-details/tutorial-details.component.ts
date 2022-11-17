import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from '../../models/tutorial';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };

  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.currentTutorial = data;
      },
      error: (error) => console.error(error)
    })
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    }
    this.message = '';
    this.tutorialService.update(this.currentTutorial.id, data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.currentTutorial.published = status;
        this.message = res.message ? res.message : '¡El estado se actualizó con éxito!';
      },
      error: (error) => console.error(error)
    });
  }

  updateTutorial(): void {
    this.message = '';
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: this.currentTutorial.published
    }
    this.tutorialService.update(this.currentTutorial.id, data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message : '¡Este tutorial se actualizó con éxito!';
      },
      error: (error) => console.error(error)
    });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorial/tutorials']);
      },
      error: (error) => console.error(error)
    });
  }
}
