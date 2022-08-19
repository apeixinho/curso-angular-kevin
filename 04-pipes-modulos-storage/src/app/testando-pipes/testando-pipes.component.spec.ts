import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoPipesComponent } from './testando-pipes.component';

describe('TestandoPipesComponent', () => {
  let component: TestandoPipesComponent;
  let fixture: ComponentFixture<TestandoPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestandoPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestandoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
