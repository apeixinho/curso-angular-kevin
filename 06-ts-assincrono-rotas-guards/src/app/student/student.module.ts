import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatListModule,
    MatDialogModule,
  ]
})
export class StudentModule { }
