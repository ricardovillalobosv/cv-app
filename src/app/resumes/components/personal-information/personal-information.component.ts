import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resume } from '../../interfaces/resume.interface';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  @Output() resumePersonalInformationEvent = new EventEmitter<Resume>();

  success: boolean = false;
  resume : Resume = {
    name: '',
    lastName: '',
    userName: '',
    email: '',
    address: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.resume);
    // localStorage.setItem('resume', JSON.stringify(this.resume));
    this.resumePersonalInformationEvent.emit(this.resume);
    this.success = true;
  }

}
