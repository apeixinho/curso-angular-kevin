import { ExemploService } from './../exemplo.service';
import { Alunos } from './../alunos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-alunos',
  templateUrl: './listagem-alunos.component.html',
  styleUrls: ['./listagem-alunos.component.css']
})
export class ListagemAlunosComponent implements OnInit {
  listaAlunos: Alunos[] = [];

  constructor(private exemploService: ExemploService) { }

  ngOnInit(): void {
    this.listaAlunos = this.exemploService.getAlunos();
  }

  addAluno(aluno: Alunos) {
    this.listaAlunos.push(aluno);
  }
}
