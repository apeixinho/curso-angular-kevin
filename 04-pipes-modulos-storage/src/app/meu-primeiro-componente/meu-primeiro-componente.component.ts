import { Alunos } from '../alunos/alunos';
import { ExemploService } from './../exemplo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css']
})
export class MeuPrimeiroComponenteComponent implements OnInit {
  dataAtual = new Date();
  listaAlunos: Alunos[] = [];

  constructor(private exemploService: ExemploService) { }

  ngOnInit(): void {
    console.log('oninit');
    this.listaAlunos = this.exemploService.getAlunos();
    console.log('listaAlunos: ', this.listaAlunos);
  }

}
