
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/i-producto';
import { ProductoService } from '../../servicios/producto-service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})

export class Productos implements OnInit {

  producto?: Producto;

  imagenActual: number = 0;

  get imagenesProducto(): string[] {
    return this.producto?.imagenes.length
      ? this.producto.imagenes
      : this.producto
        ? [this.producto.imagen]
        : [];
  }

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.producto = this.productoService.obtenerProductoPorId(id);

  }

  // CARRUSEL DE IMÁGENES

  siguiente(): void {
    const cantidadImagenes = this.imagenesProducto.length;
    if (cantidadImagenes > 0) {
      this.imagenActual = (this.imagenActual + 1) % cantidadImagenes;
    }
  }

  anterior(): void {
    const cantidadImagenes = this.imagenesProducto.length;
    if (cantidadImagenes > 0) {
      this.imagenActual =
        (this.imagenActual - 1 + cantidadImagenes) % cantidadImagenes;
    }
  }

  cambiarImagen(numero: number): void {
    this.imagenActual = numero;
  }

}
