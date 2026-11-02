
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritoService } from '../../../servicios/favoritoService';
import { Producto } from '../../i-producto';


@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {

  productosFavoritos: Producto[] = [];

  constructor(
    private favoritoService: FavoritoService
  ) {}

  ngOnInit(): void {
    this.cargarFavoritos();
  }

  cargarFavoritos(): void {
  this.productosFavoritos =
    this.favoritoService.obtenerFavoritos();
    console.log(this.productosFavoritos)

  console.log('Productos favoritos:', this.productosFavoritos);
}


  quitarFavorito(id: number): void {
    this.favoritoService.borrarProducto(id);
    this.cargarFavoritos();
  }

  agregarAlCarrito(producto: Producto): void {
    this.favoritoService.agregarCarrito(producto);
  }
}

