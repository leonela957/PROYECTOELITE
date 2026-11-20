export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  imagenes: string[];
  categoria: 'zapatillas' | 'vestidos' | 'accesorios'| 'ofertas';
  stock: number;
  color?: string;
  talle?: string;
  cantidad?: number;   // solo se usa en el carrito
}
