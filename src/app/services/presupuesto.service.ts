import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto: number;
  restante: number;
  private gastos$ = new Subject<any>();

  constructor() { 
    this.presupuesto = 0;
    this.restante = 0;
  }

  agregarGasto(gasto: any) {
    this.restante = this.restante - gasto.cantidad;
    this.gastos$.next(gasto);
  }

  getGastos(): Observable<any> {
    return this.gastos$.asObservable(); 
  }
}
