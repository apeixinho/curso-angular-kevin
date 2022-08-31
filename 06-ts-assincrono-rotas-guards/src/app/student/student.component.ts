import { StudentService } from './../service/student.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from "../interface/student";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {StudentDetailsComponent} from "./student-details/student-details.component";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  students: Student[] = [];
  studentId?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.init();
    this.students = this.studentService.findAll();

    const params$ = this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.studentId = params.get("id") || undefined;
        this.openDialog(this.studentId);
      })
    this.subscriptions.add(params$);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openDialog(id?: string) {
    if(!!id) {
      this.dialog.open(StudentDetailsComponent, {
        data: {
          studentId: this.studentId,
        },
      });
    }
  }

  getStudentById(studentId: string) {
    this.router.navigate(['student', {id: studentId}])
  }

}
