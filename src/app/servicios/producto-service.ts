import { Injectable } from '@angular/core';
import { Producto } from '../models/i-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

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
      stock: 1
    }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductoPorId(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }

}