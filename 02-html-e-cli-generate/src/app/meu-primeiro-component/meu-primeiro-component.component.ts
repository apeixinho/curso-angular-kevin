import { ExemploService } from './../exemplo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-component',
  templateUrl: './meu-primeiro-component.component.html',
  styleUrls: ['./meu-primeiro-component.component.css']
})
export class MeuPrimeiroComponentComponent implements OnInit {
  dataAtual = new Date();
  listaAlunos: string[] = [];

  constructor(private exemploService: ExemploService) { }

  ngOnInit(): void {
    console.log('oninit');
    this.listaAlunos = this.exemploService.getAlunos();
    console.log('listaAlunos: ', this.listaAlunos);
  }


}
