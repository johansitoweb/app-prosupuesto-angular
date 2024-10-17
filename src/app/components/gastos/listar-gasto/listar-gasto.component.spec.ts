import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGastoComponent } from './listar-gasto.component';

describe('ListarGastoComponent', () => {
  let component: ListarGastoComponent;
  let fixture: ComponentFixture<ListarGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
