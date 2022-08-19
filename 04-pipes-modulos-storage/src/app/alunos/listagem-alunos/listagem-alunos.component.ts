import { ExemploService } from '../../exemplo.service';
import { Alunos } from '../alunos';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-alunos',
  templateUrl: './listagem-alunos.component.html',
  styleUrls: ['./listagem-alunos.component.css']
})
export class ListagemAlunosComponent implements OnInit, OnDestroy {
  listaAlunos: Alunos[] = [];

  constructor(private exemploService: ExemploService) { }

  ngOnInit(): void {
    localStorage.setItem('minhaChave', 'meuvalor')
    sessionStorage.setItem('minhaChave', 'meuvalor')
    this.listaAlunos = this.exemploService.getAlunos();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('minhaChave')
    sessionStorage.removeItem('minhaChave')
  }

  addOuUpdateNovoAluno(aluno: Alunos) {
    let element = this.listaAlunos.find(value => value.id === aluno.id);

    //atualização de um aluno
    if(element) {
      element.nome = aluno.nome;
    }
    else { // criação de um aluno
      this.listaAlunos.push(aluno);
    }
  }
}
