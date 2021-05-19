import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddResumeComponent } from './pages/add-resume/add-resume.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'add',
        component: AddResumeComponent
      },
      {
        path: ':id',
        component: ResumeComponent
      },
      {
        path: '**',
        redirectTo: 'add'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResumesRoutingModule { }
