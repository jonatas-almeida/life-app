import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasViewComponent } from './consultas-view.component';

describe('ConsultasViewComponent', () => {
  let component: ConsultasViewComponent;
  let fixture: ComponentFixture<ConsultasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
