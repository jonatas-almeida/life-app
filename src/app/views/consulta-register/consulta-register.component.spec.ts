import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRegisterComponent } from './consulta-register.component';

describe('ConsultaRegisterComponent', () => {
  let component: ConsultaRegisterComponent;
  let fixture: ComponentFixture<ConsultaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
