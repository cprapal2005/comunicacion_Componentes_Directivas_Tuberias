import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styles: []
})
export class PadreComponent {

  public libro!: Libro;

  constructor(private servicio: ServicioService) {}

  devolverLibro(idLibro: number) {

    this.libro = this.servicio.obtenerLibro(idLibro)!;

  }

}
