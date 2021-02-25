import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarConsultaComponent } from './adicionar-consulta.component';

describe('AdicionarConsultaComponent', () => {
  let component: AdicionarConsultaComponent;
  let fixture: ComponentFixture<AdicionarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
