import { Component } from '@angular/core';

@Component({
  selector: 'resume-component',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  click = '';
  titleSelectedString: string;


  workExperienceIsClicked() {
    this.click = 'workExperience';  }

  qualificationsIsClicked() {
    this.click = 'qualifications';
  }
  projectsIsClicked() {
    this.click = 'projects';
  }
}


