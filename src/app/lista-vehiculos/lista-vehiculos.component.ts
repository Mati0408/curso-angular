import { Component } from '@angular/core';
import { VehiculoComprar } from '../models/vehiculo-comprar.model'; 
import { CommonModule } from '@angular/common';
import { VehiculoComprarComponent } from '../vehiculo-comprar/vehiculo-comprar.component';


@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css'],
  standalone: true,
  imports: [CommonModule, VehiculoComprarComponent]
})
export class ListaVehiculosComponent {
  vehiculos: VehiculoComprar[];

  constructor() {
    this.vehiculos = [];
  }

  guardar(nombre: string, imagenUrl: string): boolean {
    this.vehiculos.push({ nombre, imagenUrl });
    return false;
  }
}