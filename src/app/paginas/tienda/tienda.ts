
import { Component, OnInit } from '@angular/core';
import { Nav } from '../../compartidos/nav/nav';
import { Producto } from '../../models/i-producto';
import { FavoritoService } from '../../servicios/favoritoService';
import { CarritoService } from '../../servicios/carritoService';
import { CategoriaService } from '../../servicios/categoriaService';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../servicios/producto-service';

@Component({
  selector: 'app-tienda',
  imports: [Nav, RouterLink],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})

export class Tienda implements OnInit {

  constructor(
    private favoritoService: FavoritoService,
    private carritoService: CarritoService,
    public categoriaService: CategoriaService,
    public productoService: ProductoService
  ) {}

  productos: Producto[] = [];

  ngOnInit(): void {

    this.productos = this.productoService.obtenerProductos();

    console.log('PRODUCTOS:', this.productos);

  }

  // CATEGORÍA SELECCIONADA

  obtenerProductosFiltrados(): Producto[] {

    if (this.categoriaService.categoriaSeleccionada === 'todos') {
      return this.productos;
    }

    return this.productos.filter(
      producto => producto.categoria === this.categoriaService.categoriaSeleccionada
    );

  }

  // AGREGAR A FAVORITOS

  agregarAFavoritos(p: Producto): void {
    this.favoritoService.agregarAFavorito(p);
  }

  // AGREGAR AL CARRITO

  agregarACarrito(p: Producto): void {
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
