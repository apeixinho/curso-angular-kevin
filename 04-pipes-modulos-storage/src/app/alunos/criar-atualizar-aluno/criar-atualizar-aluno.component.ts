import { Alunos } from '../alunos';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-criar-atualizar-aluno',
  templateUrl: './criar-atualizar-aluno.component.html',
  styleUrls: ['./criar-atualizar-aluno.component.css']
})
export class CriarAtualizarAlunoComponent implements OnInit {
  valorInput = '';
  @Input() aluno: Alunos = {}
  @Output() novoAlunoEmissor = new EventEmitter<Alunos>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.aluno);

  }

  addOuUpdateNovoAluno(valor: string) {
    const idDoAluno = (this.aluno?.id) ? this.aluno.id : uuid();

    const aluno: Alunos = {
      id: idDoAluno,
      nome: valor
    }

    this.novoAlunoEmissor.emit(aluno);
  }
}
