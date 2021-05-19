import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Study, Resume } from '../../interfaces/resume.interface';

@Component({
  selector: 'app-certifies-studies',
  templateUrl: './certifies-studies.component.html',
  styleUrls: ['./certifies-studies.component.css'],
})
export class CertifiesStudiesComponent implements OnInit {
  @Output() studiesEvent = new EventEmitter<Study[]>();

  editing: boolean = false;
  studies: Study[] = [];
  studie: Study = {
    institution: '',
    date: '',
    profesion: '',
  };

  constructor() {}

  ngOnInit(): void {}

  add() {
    if (this.editing) {
      const id = this.studie.id;
      console.log(id);
      const studieIndex = this.studies.findIndex( item => item.id == id);
      this.studies[studieIndex].institution = this.studie.institution;
      this.studies[studieIndex].date = this.studie.date;
      this.studies[studieIndex].profesion = this.studie.profesion;
      this.editing = false
    } else {
      this.studie.id = new Date().getTime();
      this.studies.push(this.studie);
    }

    this.studiesEvent.emit(this.studies);
    this.resetStudy();
  }

  delete(index: number) {
    this.studies.splice(index, 1);
  }

  edit(index: number) {
    this.editing = true;
    this.studie = this.studies[index];
  }

  resetStudy() {
    this.studie = {
      id: 0,
      institution: '',
      date: '',
      profesion: '',
    };
  }
}
