import { Component, OnInit } from '@angular/core';
import {
  Resume,
  Study,
  Experience,
  Skill,
} from '../../interfaces/resume.interface';

@Component({
  selector: 'app-add-resume',
  templateUrl: './add-resume.component.html',
  styleUrls: ['./add-resume.component.css'],
})
export class AddResumeComponent implements OnInit {
  resume: Resume = {
    name: '',
    lastName: '',
    userName: '',
    email: '',
    address: '',
  };
  success: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getPersonalInformation(data: Resume) {
    this.resume = data;
    console.log('a', this.resume);
  }

  getStudiesEvent(data: Study[]) {
    this.resume.studies = data;
    console.log('b', this.resume);
  }

  getExperienceEvent(data: Experience[]) {
    this.resume.experience = data;
    console.log('c', this.resume);
  }

  getSkillEvent(data: Skill[]) {
    this.resume.skills = data;
    console.log('d', this.resume);
  }

  save() {
    localStorage.setItem('resume', JSON.stringify(this.resume));
    this.success = true;
  }
}
