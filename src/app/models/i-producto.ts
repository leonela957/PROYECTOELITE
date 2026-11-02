export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: 'zapatillas' | 'vestidos' | 'accesorios';
  stock: number;
  color?: string;
  talle?: string;
}