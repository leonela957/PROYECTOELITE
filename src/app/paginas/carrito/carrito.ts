import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from '../../models/i-producto';
import { CarritoService } from '../../servicios/carritoService';




@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit{

  productosCarrito: Producto[] = [];

  private suscripcion!: Subscription;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.suscripcion = this.carritoService.carrito$.subscribe(
      productos => {
        this.productosCarrito = productos;
      }
    );
  }

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }

  quitarDelCarrito(id: number): void {
    this.carritoService.borrarProducto(id);
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
  }

  calcularTotal(): number {
    return this.productosCarrito.reduce(
      (total, producto) => total + Number(producto.precio),
      0
    );
  }
}