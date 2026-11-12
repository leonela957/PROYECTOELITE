
import { Component, OnInit } from '@angular/core';
import { Nav } from '../../compartidos/nav/nav';
import { Producto } from '../../models/i-producto';
import { FavoritoService } from '../../servicios/favoritoService';
import { CarritoService } from '../../servicios/carritoService';
import { CategoriaService } from '../../servicios/categoriaService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tienda',
  imports: [Nav, RouterLink],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda implements OnInit {
 ngOnInit(): void {
  console.log('SERVICIO TIENDA:', this.carritoService);
  console.log('PRODUCTOS:', this.carritoService.obtenerProductos());
}
  constructor(
    private favoritoService: FavoritoService,
    private carritoService: CarritoService,
    public categoriaService: CategoriaService
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

  // CATEGORÍA SELECCIONADA

obtenerProductosFiltrados(): Producto[] {

  if (this.categoriaService.categoriaSeleccionada === 'todos') {
    return this.productos;
  }

  return this.productos.filter(
    producto => producto.categoria === this.categoriaService.categoriaSeleccionada
  );

}
  agregarAFavoritos(p: Producto): void {
    this.favoritoService.agregarAFavorito(p);
  }

  agregarACarrito(p: Producto): void{
    this.carritoService.agregarACarrito(p);
  }


// CARRUSEL DE IMÁGENES

imagenActual: number = 0;

siguiente(): void {
    this.imagenActual++;

    if (this.imagenActual > 4) {
        this.imagenActual = 0;
    }
}

anterior(): void {
    this.imagenActual--;

    if (this.imagenActual < 0) {
        this.imagenActual = 4;
    }
}

cambiarImagen(numero: number): void {
    this.imagenActual = numero;
}

}


