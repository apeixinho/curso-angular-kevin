import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBoolean = true;
  mostrarOuEsconderAlunos = false;
  title = 'my-first-project';

  mostrarOuEsconderAlunosOperacao(){
    this.mostrarOuEsconderAlunos = !this.mostrarOuEsconderAlunos;
  }
}
