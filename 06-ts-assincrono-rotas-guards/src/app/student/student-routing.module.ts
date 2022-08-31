import { StudentComponent } from './student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDetailsComponent} from "./student-details/student-details.component";

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: ':id', component: StudentDetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
