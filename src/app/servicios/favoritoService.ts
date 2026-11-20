import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/i-producto';
import { API_URL } from '../config';
import { AuthService } from './auth.service';
import { CarritoService } from './carritoService';
import { rutaImagen } from './producto-service';

@Injectable({ providedIn: 'root' })
export class FavoritoService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private router = inject(Router);
  private carritoService = inject(CarritoService);

  private favoritosSubject = new BehaviorSubject<Producto[]>([]);
  favoritos$ = this.favoritosSubject.asObservable();

  cargar(): void {
    if (!this.auth.logueado) { this.favoritosSubject.next([]); return; }
    this.http.get<any[]>(`${API_URL}/favoritos`).subscribe({
      next: filas => this.favoritosSubject.next(filas.map(f => ({
        id: Number(f.id_producto),
        nombre: f.nombre,
        descripcion: f.descripcion ?? '',
        precio: Number(f.precio),
        imagen: rutaImagen(f.imagen),
        imagenes: [],
        categoria: 'vestidos',
        stock: 1,
        color: f.color ?? undefined
      } as Producto))),
      error: () => this.favoritosSubject.next([])
    });
  }

  agregarAFavorito(p: Producto): void {
    if (!this.auth.logueado) {
      alert('Iniciá sesión para guardar favoritos');
      this.router.navigate(['/inicio-sesion']);
      return;
    }
    this.http.post(`${API_URL}/favoritos/agregar`, { id_producto: p.id }).subscribe({
      next: () => { alert('Agregado a favoritos'); this.cargar(); },
      error: () => alert('No se pudo agregar a favoritos')
    });
  }

  obtenerFavoritos(): Producto[] { return this.favoritosSubject.value; }

  borrarProducto(id: number): void {
    this.http.delete(`${API_URL}/favoritos/eliminar/${id}`).subscribe(() => this.cargar());
  }

  agregarCarrito(p: Producto): void { this.carritoService.agregarACarrito(p); }
}
