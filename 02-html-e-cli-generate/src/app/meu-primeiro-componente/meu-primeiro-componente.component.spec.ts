import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponentComponente } from './meu-primeiro-componente.component';

describe('MeuPrimeiroComponentComponente', () => {
  let component: MeuPrimeiroComponentComponente;
  let fixture: ComponentFixture<MeuPrimeiroComponentComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroComponentComponente ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPrimeiroComponentComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
