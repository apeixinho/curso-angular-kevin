import { Alunos } from './../alunos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-aluno',
  templateUrl: './ver-aluno.component.html',
  styleUrls: ['./ver-aluno.component.css']
})
export class VerAlunoComponent implements OnInit {

  @Input() aluno: Alunos = {}

  constructor() { }

  ngOnInit(): void {
  }

}
