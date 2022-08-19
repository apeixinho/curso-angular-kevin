import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testando-pipes',
  templateUrl: './testando-pipes.component.html',
  styleUrls: ['./testando-pipes.component.css']
})
export class TestandoPipesComponent implements OnInit {
  agora = new Date();
  a: number = 0.259;
  b: number = 1.3495;

  constructor() { }

  ngOnInit(): void {
  }

}
