import { Student } from './../interface/student';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  init() {
    const students = [
      { id: uuid(), name: 'L Costa'},
      { id: uuid(), name: 'L Morais'},
      { id: uuid(), name: 'T Oliveira'},
      { id: uuid(), name: 'E Rocha'},
      { id: uuid(), name: 'M Antunes'}
    ];

    localStorage.setItem("students", JSON.stringify(students));
  }

  findAll(): Student[] {
    return JSON.parse(localStorage.getItem("students") || "[]");
  }

  findById(studentId: string): Student {
    return this.findAll().find(student => student.id === studentId) || {};
  }

}
