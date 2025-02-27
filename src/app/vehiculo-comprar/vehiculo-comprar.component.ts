
import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComprar } from '../models/vehiculo-comprar.model';


@Component({
  selector: 'app-vehiculo-comprar',
  templateUrl: './vehiculo-comprar.component.html',
  styleUrls: ['./vehiculo-comprar.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VehiculoComprarComponent {
  @Input() vehiculo!: VehiculoComprar;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {}
}