import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from '../../interfaces/resume.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Output() skillEvent = new EventEmitter<Skill[]>();

  editing: boolean = false;
  skills: Skill[] = [];
  skill: Skill = {
    descripcion: '',
    valor: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if (this.editing) {
      const id = this.skill.id;
      const skillIndex = this.skills.findIndex( item => item.id == id);
      this.skills[skillIndex].descripcion = this.skill.descripcion;
      this.skills[skillIndex].valor = this.skill.valor;
      this.editing = false
    } else {
      this.skill.id = new Date().getTime();
      this.skills.push(this.skill);
    }

    this.skillEvent.emit(this.skills);
    this.resetSkill();
  }

  delete(index: number) {
    this.skills.splice(index, 1);
  }

  edit(index: number) {
    this.editing = true;
    this.skill = this.skills[index];
  }

  width(valor: number) {
    return `width: ${valor}%`
  }

  resetSkill() {
    this.skill = {
      descripcion: '',
      valor: 0
    };
  }

}
