import { Component } from '@angular/core';
import { ModulesModule } from '../../modules/modules.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

interface Receta {
  titulo: string;
  descripcion: string;
  ingredientes: string[];
  pasos: string[];
}

@Component({
  selector: 'app-recetario',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './recetario.component.html',
  styleUrl: './recetario.component.css'
})
export class RecetarioComponent {

  recetas:  Receta[] = [
    {
      titulo: 'huevos con frijol',
      descripcion: 'huevos con una paste de frijol',
      ingredientes: ['2 de huvos', '1/2 frijoles', '1 dientes de ajo', '1/4 taza de aceite de oliva', 'Sal y pimienta al gusto'],
      pasos: [
        'Cocinar los huevos con aceite de oliva',
        'moler el frijol con ajo, sal y pimienta',
        'Agregar la pasta',
      ]
    },{
      titulo: 'memelitas',
      descripcion: 'memelitas con queso',
      ingredientes: ['memelitas', 'aciento', 'queso'],
      pasos: [
        'untar el aciento a las memelitas',
        'poner a calentar sobre la sarten',
        'agregar queso al gusto'
      ]
    },
    {
      titulo: 'enfrijoladas',
      descripcion: 'deliciosas enfrijoladas con quesillo',
      ingredientes: ['tortillas', 'frijol', 'ajo', 'sal', 'cebolla', 'agua', 'Sal al gusto'],
      pasos: [
        'moler el frijol con ajo',
        'poner a freir la pasta con cebolla picada',
        'agregar un poco de agua a la pasta',
        'sumergir las tortillas',
        'sacar la tortillas y agregar queso'
      ]
    }
    // Puedes agregar más recetas aquí
  ];
}
