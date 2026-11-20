import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritoService } from '../../servicios/favoritoService';
import { Producto } from '../../models/i-producto';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit, OnDestroy {

  productosFavoritos: Producto[] = [];
  private suscripcion!: Subscription;

  constructor(private favoritoService: FavoritoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.suscripcion = this.favoritoService.favoritos$.subscribe(lista => {
      this.productosFavoritos = lista;
      this.cdr.markForCheck();
    });
    this.favoritoService.cargar();
  }

  ngOnDestroy(): void { this.suscripcion?.unsubscribe(); }

  quitarFavorito(id: number): void { this.favoritoService.borrarProducto(id); }

  agregarAlCarrito(producto: Producto): void { this.favoritoService.agregarCarrito(producto); }
}
