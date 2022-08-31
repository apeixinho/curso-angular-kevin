import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {StudentService} from "../../service/student.service";
import {Student} from "../../interface/student";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: Student = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.student = this.studentService.findById(this.data.studentId);

  }

}
