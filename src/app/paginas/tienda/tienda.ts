import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../../models/i-producto';
import { FavoritoService } from '../../servicios/favoritoService';
import { CarritoService } from '../../servicios/carritoService';
import { CategoriaService } from '../../servicios/categoriaService';
import { ProductService } from '../../servicios/producto-service';

@Component({
  selector: 'app-tienda',
  imports: [RouterLink],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda implements OnInit {

  productos: Producto[] = [];

  // Carrusel de imágenes
  imagenActual = 0;
  private readonly totalImagenes = 5;

  constructor(
    private favoritoService: FavoritoService,
    private carritoService: CarritoService,
    public categoriaService: CategoriaService,
    public productoService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.productoService.listar().subscribe((lista: Producto[]) => {
      this.productos = lista;
      this.cdr.markForCheck();
    });
  }

  // Productos filtrados por la categoría seleccionada
  obtenerProductosFiltrados(): Producto[] {
    const categoria = this.categoriaService.categoriaSeleccionada;

    if (categoria === 'todos') {
      return this.productos;
    }

    return this.productos.filter(producto => producto.categoria === categoria);
  }

  agregarAFavoritos(p: Producto): void {
    this.favoritoService.agregar(p.id).subscribe({
      next: () => alert('Producto agregado a favoritos'),
      error: e => alert(e.error?.error ?? 'No se pudo agregar a favoritos'),
    });
  }

  agregarACarrito(p: Producto): void {
    this.carritoService.agregar(p.id, 1).subscribe({
      next: () => alert('Producto agregado al carrito'),
      error: e => alert(e.error?.error ?? 'No se pudo agregar al carrito'),
    });
  }

  siguiente(): void {
    this.imagenActual = (this.imagenActual + 1) % this.totalImagenes;
  }

  anterior(): void {
    this.imagenActual = (this.imagenActual - 1 + this.totalImagenes) % this.totalImagenes;
  }

  cambiarImagen(numero: number): void {
    this.imagenActual = numero;
  }
}