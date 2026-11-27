import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/i-producto';
import { ProductService } from '../../servicios/producto-service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {

  producto?: Producto;
  imagenActual = 0;

  get imagenesProducto(): string[] {
    if (!this.producto) return [];
    return this.producto.imagenes?.length
      ? this.producto.imagenes
      : [this.producto.imagen];
  }

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productoService.verUno(id).subscribe({
      next: (p: Producto) => {
        this.producto = p;
        this.cdr.markForCheck();
      },
      error: () => {
        this.producto = undefined;
        this.cdr.markForCheck();
      },
    });
  }

  // Carrusel de imágenes

  siguiente(): void {
    const cantidad = this.imagenesProducto.length;
    if (cantidad > 0) {
      this.imagenActual = (this.imagenActual + 1) % cantidad;
    }
  }

  anterior(): void {
    const cantidad = this.imagenesProducto.length;
    if (cantidad > 0) {
      this.imagenActual = (this.imagenActual - 1 + cantidad) % cantidad;
    }
  }

  cambiarImagen(numero: number): void {
    this.imagenActual = numero;
  }
}