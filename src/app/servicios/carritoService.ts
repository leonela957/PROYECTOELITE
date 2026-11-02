import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/i-producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoSubject = new BehaviorSubject<Producto[]>([]);

  carrito$ = this.carritoSubject.asObservable();

  agregarACarrito(p: Producto): void {

    const carritoActual = this.carritoSubject.value;

    const existe = carritoActual.some(
      producto => producto.id === p.id
    );

    if (existe) {
      alert('El producto ya existe en el carrito');
      return;
    }

    this.carritoSubject.next([...carritoActual, p]);

    alert('Producto añadido al carrito');
  }

  obtenerProductos(): Producto[] {
    return this.carritoSubject.value;
  }

  borrarProducto(id: number): void {
    const carritoActual = this.carritoSubject.value;

    this.carritoSubject.next(
      carritoActual.filter(producto => producto.id !== id)
    );
  }

  vaciarCarrito(): void {
    this.carritoSubject.next([]);
  }
}