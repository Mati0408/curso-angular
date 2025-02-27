import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComprarComponent } from './vehiculo-comprar/vehiculo-comprar.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, VehiculoComprarComponent, ListaVehiculosComponent]
})
export class AppComponent {
  title = 'angular-proyecto1';
}