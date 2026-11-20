import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
export class Carrito implements OnInit, OnDestroy {

  productosCarrito: Producto[] = [];
  private suscripcion!: Subscription;

  constructor(private carritoService: CarritoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.suscripcion = this.carritoService.carrito$.subscribe(productos => {
      this.productosCarrito = productos;
      this.cdr.markForCheck();   // la app no usa zone.js: avisamos que hay que redibujar
    });
    this.carritoService.cargar();
  }

  ngOnDestroy(): void { this.suscripcion?.unsubscribe(); }

  quitarDelCarrito(id: number): void { this.carritoService.borrarProducto(id); }

  vaciarCarrito(): void { this.carritoService.vaciarCarrito(); }

  calcularTotal(): number {
    return this.productosCarrito.reduce(
      (total, p) => total + Number(p.precio) * (p.cantidad ?? 1), 0);
  }

  finalizarCompra(): void {
    this.carritoService.finalizarCompra().subscribe({
      next: urlPdf => {
        alert('¡Compra realizada! Se abrirá tu ticket.');
        window.open(urlPdf, '_blank');
      },
      error: e => alert(e.error?.error ?? 'No se pudo finalizar la compra')
    });
  }
}
