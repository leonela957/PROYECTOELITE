import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carritoService';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

  items: any[] = [];

  constructor(
    private carritoService: CarritoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.carritoService.ver().subscribe({
      next: (items: any[]) => {
        this.items = items;
        this.cdr.markForCheck();
      },
      error: () => {
        this.items = [];
        this.cdr.markForCheck();
      },
    });
  }

  total = (): number =>
  this.items.reduce((suma, i) => suma + Number(i.precio_unitario) * Number(i.cantidad), 0);

  cambiarCantidad(item: any, cantidad: number): void {
    if (cantidad < 1) {
      this.quitar(item.id_producto);
      return;
    }
    this.carritoService.actualizar(item.id_producto, cantidad).subscribe(() => this.cargar());
  }

  quitar(idProducto: number): void {
    this.carritoService.eliminar(idProducto).subscribe(() => this.cargar());
  }

  vaciar(): void {
    this.carritoService.vaciar().subscribe(() => this.cargar());
  }
  
}