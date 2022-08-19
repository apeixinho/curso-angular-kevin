import { VerAlunoComponent } from './ver-aluno/ver-aluno.component';
import { CriarAtualizarAlunoComponent } from './criar-atualizar-aluno/criar-atualizar-aluno.component';
import { ListagemAlunosComponent } from './listagem-alunos/listagem-alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApagarAlunoComponent } from './apagar-aluno/apagar-aluno.component';



@NgModule({
  declarations: [
    ListagemAlunosComponent,
    CriarAtualizarAlunoComponent,
    VerAlunoComponent,
    ApagarAlunoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListagemAlunosComponent
  ]
})
export class AlunosModule { }
