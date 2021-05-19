import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resume } from '../../interfaces/resume.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume = {
    name: '',
    lastName: '',
    email: '',
    userName: '',
    address: ''
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => console.log(id));
    this.resume = JSON.parse(localStorage.getItem('resume') || '{}') || {};
  }

  width(valor: number) {
    return `width: ${valor}%`
  }

}
