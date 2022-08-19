import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApagarAlunoComponent } from './apagar-aluno.component';

describe('ApagarAlunoComponent', () => {
  let component: ApagarAlunoComponent;
  let fixture: ComponentFixture<ApagarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApagarAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApagarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
