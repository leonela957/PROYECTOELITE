import { Injectable } from '@angular/core';
import { Producto } from '../app/i-producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  
  carrito: Producto[]=[];

agregarACarrito(p: Producto) {
   // Buscamos si el producto ya está en el carrito
  const productito = this.carrito.find(prod => prod.id === p.id);

  if (productito) {
    alert("El producto ya existe en carrito")
  }else{
    this.carrito.push(p);
    alert("Producto añadido al carro")
  }
}

  obtenerProductos(){
    return this.carrito
  }

  
  borrarProducto(id:number){
    this.carrito = this.carrito.filter(p => p.id !== id);
  }

  vaciarCarrito(){
    this.carrito = []
  }
}