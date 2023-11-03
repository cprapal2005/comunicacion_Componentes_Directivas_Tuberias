import { Component, Input } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  @Input() libro!: Libro;

}
