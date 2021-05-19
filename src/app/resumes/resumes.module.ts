import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './pages/resume/resume.component';
import { AddResumeComponent } from './pages/add-resume/add-resume.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumesRoutingModule } from './resumes-routing.module';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { CertifiesStudiesComponent } from './components/certifies-studies/certifies-studies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormsModule } from '@angular/forms';
import { SkillComponent } from './components/skill/skill.component';



@NgModule({
  declarations: [
    ResumeComponent,
    AddResumeComponent,
    HomeComponent,
    PersonalInformationComponent,
    CertifiesStudiesComponent,
    ExperienceComponent,
    SkillComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ResumesRoutingModule
  ]
})
export class ResumesModule { }
