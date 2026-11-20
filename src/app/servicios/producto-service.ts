import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../models/i-producto';
import { API_URL } from '../config';

// "assets/..." se sirve desde Angular; un nombre suelto viene de /uploads de la API
export function rutaImagen(img: string | null | undefined): string {
  if (!img) return '';
  if (img.startsWith('assets/') || img.startsWith('http')) return img;
  return `${API_URL}/uploads/${img}`;
}

// Fila de la tabla productos -> Producto de Angular
export function convertirProducto(p: any): Producto {
  let imagenes: string[] = [];
  try { imagenes = p.imagenes ? JSON.parse(p.imagenes) : []; } catch { imagenes = []; }
  const imagen = rutaImagen(p.imagen);
  return {
    id: Number(p.id),
    nombre: p.nombre,
    descripcion: p.descripcion ?? '',
    precio: Number(p.precio),
    imagen,
    imagenes: imagenes.length ? imagenes.map(rutaImagen) : [imagen],
    categoria: p.categoria ?? 'vestidos',
    stock: Number(p.stock ?? 1),
    color: p.color ?? undefined,
    talle: p.talle ?? undefined
  };
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private http = inject(HttpClient);

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<any[]>(`${API_URL}/productos`)
      .pipe(map(lista => lista.map(convertirProducto)));
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<any>(`${API_URL}/productos/${id}`)
      .pipe(map(convertirProducto));
  }
}
