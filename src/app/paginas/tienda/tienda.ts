
import { Component } from '@angular/core';
import { Nav } from '../../compartidos/nav/nav';
import { Producto } from '../../i-producto';
import { FavoritoService } from '../../../servicios/favoritoService';
import { CarritoService } from '../../../servicios/carritoService';

@Component({
  selector: 'app-tienda',
  imports: [Nav],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda {

  constructor(
    private favoritoService: FavoritoService,
    private carritoService: CarritoService
  ) {}

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Vestido de XV',
      descripcion: '............',
      precio: 750000,
      imagen: 'assets/vestido-XV.jpg',
      categoria: 'vestidos',
      stock: 1,
      color: 'Azul noche',
      talle: 'M'
    },
    {
      id: 2,
      nombre: 'Zapatillas de fiesta',
      descripcion: '............',
      precio: 80000,
      imagen: 'assets/zapatillas-XV.jpg',
      categoria: 'zapatillas',
      stock: 1,
      color: 'Blanco',
      talle: '37'
    },
    {
      id: 3,
      nombre: 'Corona de XV',
      descripcion: '............',
      precio: 100000,
      imagen: 'assets/corona-XV.jpg',
      categoria: 'accesorios',
      stock: 1,
    }
  ];

  agregarAFavoritos(p: Producto): void {
    this.favoritoService.agregarAFavorito(p);
  }

  agregarACarrito(p: Producto): void{
    this.carritoService.agregarACarrito(p);
  }
}
