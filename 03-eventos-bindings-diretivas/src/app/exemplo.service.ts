import { Alunos } from './alunos';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  constructor() { }

  getAlunos (): Alunos[] {
    return [
      { id: uuid(), nome: 'L Costa'},
      { id: uuid(), nome: 'L Morais'},
      { id: uuid(), nome: 'T Oliveira'},
      { id: uuid(), nome: 'E Rocha'},
      { id: uuid(), nome: 'M Antunes'}
    ];
  }
}
