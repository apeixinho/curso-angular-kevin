import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAtualizarAlunoComponent } from './criar-atualizar-aluno.component';

describe('CriarAtualizarAlunoComponent', () => {
  let component: CriarAtualizarAlunoComponent;
  let fixture: ComponentFixture<CriarAtualizarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAtualizarAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAtualizarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
