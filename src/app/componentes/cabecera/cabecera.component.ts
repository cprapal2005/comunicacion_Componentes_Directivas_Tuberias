import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styles: [
  ]
})
export class CabeceraComponent {

  @Output() idNumero = new EventEmitter<number>();

  emitirValor(idLibro: number) {
    this.idNumero.emit(idLibro);
  }

}
