
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../servicios/carritoService';
import { Producto } from '../../i-producto';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

  productosCarrito: Producto[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.productosCarrito = this.carritoService.obtenerProductos();
  }

  quitarDelCarrito(id: number): void {
    this.carritoService.borrarProducto(id);
    this.cargarCarrito();
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
    this.cargarCarrito();
  }

  calcularTotal(): number {
    return this.productosCarrito.reduce(
      (total, producto) => total + Number(producto.precio),
      0
    );
  }
}
