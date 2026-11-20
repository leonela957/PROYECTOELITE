import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { Producto } from '../models/i-producto';
import { API_URL } from '../config';
import { AuthService } from './auth.service';
import { rutaImagen } from './producto-service';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private router = inject(Router);

  private carritoSubject = new BehaviorSubject<Producto[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  // Pide el carrito a la API (cada fila del detalle -> Producto)
  cargar(): void {
    if (!this.auth.logueado) { this.carritoSubject.next([]); return; }
    this.http.get<any[]>(`${API_URL}/carrito`).subscribe({
      next: filas => this.carritoSubject.next(filas.map(f => ({
        id: Number(f.id_producto),
        nombre: f.nombre,
        descripcion: f.descripcion ?? '',
        precio: Number(f.precio_unitario),
        imagen: rutaImagen(f.imagen),
        imagenes: [],
        categoria: 'vestidos',
        stock: 1,
        color: f.color ?? undefined,
        cantidad: Number(f.cantidad)
      } as Producto))),
      error: () => this.carritoSubject.next([])
    });
  }

  private pedirLogin(): boolean {
    if (this.auth.logueado) return true;
    alert('Iniciá sesión para continuar');
    this.router.navigate(['/inicio-sesion']);
    return false;
  }

  agregarACarrito(p: Producto): void {
    if (!this.pedirLogin()) return;
    this.http.post(`${API_URL}/carrito/agregar`, { id_producto: p.id, cantidad: 1 }).subscribe({
      next: () => { alert('Producto añadido al carrito'); this.cargar(); },
      error: () => alert('No se pudo agregar al carrito')
    });
  }

  obtenerProductos(): Producto[] { return this.carritoSubject.value; }

  borrarProducto(id: number): void {
    this.http.delete(`${API_URL}/carrito/eliminar/${id}`).subscribe(() => this.cargar());
  }

  vaciarCarrito(): void {
    this.http.delete(`${API_URL}/carrito/vaciar`).subscribe(() => this.cargar());
  }

  // Finaliza la compra, genera el ticket PDF y devuelve la URL del PDF
  finalizarCompra(): Observable<string> {
    return this.http.post<{ id_compra: number }>(`${API_URL}/compras/finalizar`, {}).pipe(
      switchMap(r => this.http.post(`${API_URL}/tickets/generar/${r.id_compra}`, {}).pipe(map(() => r.id_compra))),
      switchMap(id => this.http.get<{ pdf_path: string }>(`${API_URL}/tickets/${id}`)),
      map(t => `${API_URL}/${t.pdf_path}`),
      tap(() => this.cargar())
    );
  }
}
