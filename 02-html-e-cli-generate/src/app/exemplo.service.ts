import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  constructor() { }

  getAlunos () {
    return ['L Costa', 'L Morais']
  }
}
