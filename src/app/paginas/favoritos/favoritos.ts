import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritoService } from '../../servicios/favoritoService';
import { CarritoService } from '../../servicios/carritoService';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {

  favoritos: any[] = [];

  constructor(
    private favoritoService: FavoritoService,
    private carritoService: CarritoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.favoritoService.listar().subscribe({            // ⚠️ nombre supuesto
      next: (lista: any[]) => {
        this.favoritos = lista;
        this.cdr.markForCheck();
      },
      error: () => {
        this.favoritos = [];
        this.cdr.markForCheck();
      },
    });
  }

  quitar(idProducto: number): void {
    this.favoritoService.eliminar(idProducto).subscribe(() => this.cargar());   // ⚠️ nombre supuesto
  }

  agregarAlCarrito(favorito: any): void {
    this.carritoService.agregar(favorito.id_producto, 1).subscribe({
      next: () => alert('Producto agregado al carrito'),
      error: e => alert(e.error?.error ?? 'No se pudo agregar al carrito'),
    });
  }
}