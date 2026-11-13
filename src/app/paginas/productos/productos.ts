
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
    this.imagenActual++;

    if (this.imagenActual > 2) {
      this.imagenActual = 0;
    }
  }

  anterior(): void {
    this.imagenActual--;

    if (this.imagenActual < 0) {
      this.imagenActual = 2;
    }
  }

  cambiarImagen(numero: number): void {
    this.imagenActual = numero;
  }

}
