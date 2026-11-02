import { Injectable } from '@angular/core';
import { Producto } from '../app/i-producto';
import { CarritoService } from './carritoService';
import { Productos } from '../app/paginas/productos/productos';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
    favorito: Producto[]=[];
    constructor(
      private carritoService : CarritoService
    ){}
  
 
agregarAFavorito(p: Producto): void {
  const existe = this.favorito.some(prod => prod.id === p.id);

  if (existe) {
    alert ('Este producto ya está en favoritos');
    return;
  }

  this.favorito.push(p);

  console.log ('Producto agregado:', p.nombre);
  console.log('Lista actual de favoritos:', this.favorito);
}


  obtenerFavoritos(){
    return this.favorito
  }

    borrarProducto(id:number){
    this.favorito = this.favorito.filter(p => p.id !== id);
  }

    vaciarFavorito(){
    this.favorito = []
  }

  agregarCarrito(p: Producto){
    this.carritoService.agregarACarrito(p)
  }


}