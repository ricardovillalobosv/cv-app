import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experience } from '../../interfaces/resume.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Output() experienceEvent = new EventEmitter<Experience[]>();

  editing: boolean = false;
  experiences: Experience[] = [];
  experience: Experience = {
    institution: '',
    job: '',
    date: '',
    descripcion: '',
  };

  constructor() {}

  ngOnInit(): void {}

  add() {
    if (this.editing) {
      const id = this.experience.id;
      const experienceIndex = this.experiences.findIndex( item => item.id == id);
      this.experiences[experienceIndex].institution = this.experience.institution;
      this.experiences[experienceIndex].date = this.experience.date;
      this.experiences[experienceIndex].job = this.experience.job;
      this.experiences[experienceIndex].descripcion = this.experience.descripcion;
      this.editing = false
    } else {
      this.experience.id = new Date().getTime();
      this.experiences.push(this.experience);
    }

    this.experienceEvent.emit(this.experiences);
    this.resetExperience();
  }

  delete(index: number) {
    this.experiences.splice(index, 1);
  }

  edit(index: number) {
    this.editing = true;
    this.experience = this.experiences[index];
  }

  resetExperience() {
    this.experience = {
      institution: '',
      job: '',
      date: '',
      descripcion: '',
    };
  }
}
