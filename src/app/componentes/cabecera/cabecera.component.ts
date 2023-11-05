import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styles: [
  ]
})
export class CabeceraComponent {

  public claseBoton: string = "btn btn-primary";
  public claseDiv: string = "card card-block w-75 p-3 mx-auto mt-3";
  @Output() idNumero = new EventEmitter<number>();

  emitirValor(idLibro: number) {
    this.idNumero.emit(idLibro);
  }

}
