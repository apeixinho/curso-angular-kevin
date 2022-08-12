import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { ListagemAlunosComponent } from './listagem-alunos/listagem-alunos.component';
import { CriarAtualizarAlunoComponent } from './criar-atualizar-aluno/criar-atualizar-aluno.component';
import { VerAlunoComponent } from './ver-aluno/ver-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    ListagemAlunosComponent,
    CriarAtualizarAlunoComponent,
    VerAlunoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
