import { Component, Input } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  public claseDiv: string = "card card-block w-75 p-3 mx-auto mt-3";
  @Input() libro!: Libro;

}
