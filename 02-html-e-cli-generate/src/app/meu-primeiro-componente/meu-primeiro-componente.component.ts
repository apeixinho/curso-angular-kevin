import { ExemploService } from '../exemplo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css']
})
export class MeuPrimeiroComponentComponente implements OnInit {
  dataAtual = new Date();
  listaAlunos: string[] = [];

  constructor(private exemploService: ExemploService) { }

  ngOnInit(): void {
    console.log('oninit');
    this.listaAlunos = this.exemploService.getAlunos();
    console.log('listaAlunos: ', this.listaAlunos);
  }


}
