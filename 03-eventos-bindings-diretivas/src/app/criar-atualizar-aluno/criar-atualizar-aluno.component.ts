import { Alunos } from './../alunos';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-criar-atualizar-aluno',
  templateUrl: './criar-atualizar-aluno.component.html',
  styleUrls: ['./criar-atualizar-aluno.component.css']
})
export class CriarAtualizarAlunoComponent implements OnInit {

  @Output() novoAlunoEmissor = new EventEmitter<Alunos>();

  constructor() { }

  ngOnInit(): void {
  }

  addNovoAluno(valor: string) {
    const aluno: Alunos = {
      id: uuid(),
      nome: valor
    }
    this.novoAlunoEmissor.emit(aluno);
  }
}
