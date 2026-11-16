import { Injectable } from '@angular/core';
import { Producto } from '../models/i-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'VESTIDO DE FIESTA LARGO',
      descripcion: 'Vestido largo azul Francia, con flores bordadas y lentejuelas en la parte superior, detalles de tul y falda lisa. Su bordado floral y sus detalles brillantes le dan un estilo delicado y elegante. La falda lisa aporta una caída fluida. Ideal para fiestas de quince años, casamientos, recepciones y eventos formales.' ,
      precio: 750000,
      imagen: 'assets/VestidoFiestaAzulFrente.JPG',
      imagenes: [
        'assets/VestidoFiestaAzulFrente.JPG',
        'assets/VestidoFiestaAzulEspalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Azul Francia',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 2,
      nombre: 'VESTIDO DE FIESTA LARGO',
      descripcion: 'Vestido largo rojo de satén, con escote en V, bordado de lentejuelas en el busto y tiras para atar al cuello. Espalda descubierta. Se destaca por su intenso color rojo, su tela satinada y los detalles brillantes de la parte superior. Su espalda descubierta le aporta un toque especial. Ideal para fiestas de quince años, casamientos y celebraciones nocturnas.',
      precio: 80000,
      imagen: 'assets/VestidoFiestaRojoFrente.JPG',
      imagenes: [
        'assets/VestidoFiestaRojoFrente.JPG',
        'assets/VestidoFiestaRojoEspalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Rojo',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 3,
      nombre: 'VESTIDO DE FIESTA LARGO',
      descripcion: 'Vestido largo lila claro, con bordado de mostacillas y una capa de tul transparente. Un diseño delicado que combina bordados brillantes con una capa de tul que aporta movimiento y elegancia. Ideal para casamientos, fiestas de quince años, recepciones y eventos formales.',
      precio: 100000,
      imagen: 'assets/VestidoFiestaLilaFrente.JPG',
      imagenes:[
        'assets/VestidoFiestaLilaFrente.JPG',
        'assets/VestidoFiestaLilaEspalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Lila',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 4,
      nombre: 'VESTIDO DE FIESTA LARGO',
      descripcion: 'Vestido largo celeste, con bordado de perlas y mostacillas blancas, acompañado de lentejuelas plateadas que aportan brillo y delicadeza. Un diseño elegante y sofisticado, que se destaca por su delicado bordado de perlas, mostacillas blancas y lentejuelas plateadas. Sus detalles brillantes le dan luminosidad y lo convierten en una opción ideal para galas, fiestas de quince años, casamientos y eventos formales de noche.',
      precio: 100000,
      imagen: 'assets/VestidoFiestaCelesteFrente.JPG',
      imagenes:[
        'assets/VestidoFiestaCelesteFrente.JPG',
        'assets/VestidoFiestaCelesteEspalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Celeste',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 5,
      nombre: 'VESTIDO DE FIESTA LARGO',
      descripcion: 'Vestido largo bordó de satén, con escote en V, breteles finos y cintura decorada con tres tiras de strass. Un diseño elegante que se destaca por su intenso tono bordó y su tela satinada de caída fluida. Los detalles de strass en la cintura aportan un toque de brillo y sofisticación. Ideal para casamientos, graduaciones, fiestas de quince años y eventos formales de noche.',
      precio: 100000,
      imagen: 'assets/VestidoFiestaBordoFrente.JPG',
      imagenes:[
        'assets/VestidoFiestaBordoFrente.JPG',
        'assets/VestidoFiestaBordoEspalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Bordo',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 6,
      nombre: 'VESTIDO DE FIESTA CORTO',
      descripcion: 'Vestido corto negro, con detalles pintados a mano, dijes metálicos y perlas bordadas. Presenta un aplique central de piedras brillantes, espalda cerrada y cierre oculto. Un diseño original y exclusivo, que se destaca por sus detalles pintados a mano y sus dijes de metal y perlas bordadas. El aplique central de piedras le aporta brillo y protagonismo, convirtiéndolo en una opción ideal para fiestas de quince años, cumpleaños y eventos especiales.',
      precio: 100000,
      imagen: 'assets/VestidoCorto1-Frente.JPG',
      imagenes:[
        'assets/VestidoCorto1-Frente.JPG',
        'assets/VestidoCorto1-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Negro',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 7,
      nombre: 'VESTIDO DE FIESTA CORTO',
      descripcion: 'Vestido corto plateado con brillo, escote corazón, sin mangas, espalda cerrada y cierre oculto. Un diseño elegante y delicado, confeccionado en una tela con brillo plateado que aporta luminosidad. Su escote corazón le da un toque sofisticado. Ideal para fiestas de quince años, cumpleaños, graduaciones y celebraciones nocturnas.',
      precio: 100000,
      imagen: 'assets/VestidoCorto2-Frente.JPG',
      imagenes:[
        'assets/VestidoCorto2-Frente.JPG',
        'assets/VestidoCorto2-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Plateado',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 8,
      nombre: 'VESTIDO DE FIESTA CORTO',
      descripcion: 'Vestido corto blanco, completamente decorado con lentejuelas, escote en V y espalda descubierta. Un diseño luminoso y delicado, cubierto de lentejuelas que aportan brillo en toda la prenda. Su escote en V y su espalda descubierta le dan un estilo elegante y moderno. Ideal para fiestas de quince años, cumpleaños y eventos especiales.',
      precio: 100000,
      imagen: 'assets/VestidoCorto3-Frente.JPG',
      imagenes:[
        'assets/VestidoCorto3-Frente.JPG',
        'assets/VestidoCorto3-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Blanco',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 9,
      nombre: 'VESTIDO DE FIESTA CORTO',
      descripcion: 'Vestido corto rosa, con estampado de hojas negras, detalles de brillo dorado, escote en V y breteles cruzados. Un diseño llamativo que combina el fondo rosa con hojas negras y detalles brillantes en dorado. Su escote en V y sus breteles cruzados en la espalda le aportan un toque original. Ideal para cumpleaños, fiestas de quince años y celebraciones especiales.',
      precio: 100000,
      imagen: 'assets/VestidoCorto4-Frente.JPG',
      imagenes:[
        'assets/VestidoCorto4-Frente.JPG',
        'assets/VestidoCorto4-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Rosado',
      talle: 'S, M, L, XL, XXL'
    }, 
     {
      id: 10,
      nombre: 'VESTIDO DE FIESTA CORTO',
      descripcion: 'Vestido corto beige, cubierto de tul negro y bordado con lentejuelas. Presenta escote en V, breteles cruzados y cierre. Un diseño delicado y sofisticado, que combina una base beige con una capa de tul negro transparente, decorada con bordados de lentejuelas en distintos tonos. Sus breteles cruzados completan el diseño y le aportan un detalle especial. Ideal para fiestas de quince años, graduaciones, cumpleaños y eventos nocturnos.',
      precio: 100000,
      imagen: 'assets/VestidoCorto5-Frente.JPG',
      imagenes:[
        'assets/VestidoCorto5-Frente.JPG',
        'assets/VestidoCorto5-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Beige',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 11,
      nombre: 'VESTIDO DE NIÑA CORTO',
      descripcion: 'Elegante vestido de fiesta en tono bordó con cuerpo de lentejuelas brillantes, delicadas flores en la cintura y falda de tul con un gran moño en la espalda. Diseño sofisticado en tono bordó con cuerpo de lentejuelas, cinta satinada con flores 3D en la cintura y falda amplia de tul con detalles brillantes en el ruedo. Cuenta con cierre y un gran moño en la espalda. Ideal para fiestas de fin de año, Navidad, casamientos de noche y eventos formales.',
      precio: 100000,
      imagen: 'assets/VestidoNiña1-Frente.JPG',
      imagenes:[
        'assets/VestidoNiña1-Frente.JPG',
        'assets/VestidoNiña1-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Bordo',
      talle: 'S, M, L, XL, XXL'
    },
    {
      id: 12,
      nombre: 'VESTIDO DE NIÑA CORTO',
      descripcion: 'Sofisticado vestido azul noche con corset de pana negro con lentejuelas tornasol y falda asimétrica de tul brillante. Diseño moderno sin mangas con corset de pana oscura cubierto de lentejuelas tornasoladas, cintillo con moño en la cintura y falda asimétrica (más corta adelante) de tul azul noche con lunares dorados. Ideal para fiestas de noche, egresos escolares, recepciones y galas.',
      precio: 100000,
      imagen: 'assets/VestidoNiña3-Frente.JPG',
      imagenes:[
        'assets/VestidoNiña3-Frente.JPG',
        'assets/VestidoNiña3-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Azul Noche',
    },
    {
      id: 13,
      nombre: 'VESTIDO DE NIÑA CORTO',
      descripcion: 'Romántico vestido en tono rosa viejo con tul brillante de corazones, volados y moños en el hombro y la cintura. Modelo asimétrico en rosa viejo que combina un cuerpo liso con tul estampado de corazones brillantes, volados en la falda y detalles de moños tanto en el hombro como en la cintura ajustada con lazo. Ideal para cumpleaños infantiles, bautismos, sesiones de fotos y fiestas de día.',
      precio: 100000,
      imagen: 'assets/VestidoNiña2-Frente.JPG',
      imagenes:[
        'assets/VestidoNiña2-Frente.JPG',
        'assets/VestidoNiña2-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Rosa Viejo',
    },
    {
      id: 14,
      nombre: 'VESTIDO DE NIÑA LARGO',
      descripcion: 'Delicado vestido largo en tono rosa viejo con volados en el escote, apliques de flores con perlas y falda de tul. Vestido estilo princesa de corte largo en rosa viejo con breteles de tul, volados en los hombros y un aplique de flores con perlas en el frente. Incluye cierre escondido y cintillo con lazo para atar atrás. Ideal para cortejos de boda (damitas), comuniones, fiestas de 15 y ceremonias formales.',
      precio: 100000,
      imagen: 'assets/VestidoNiña4-Frente.JPG',
      imagenes:[
        'assets/VestidoNiña4-Frente.JPG',
        'assets/VestidoNiña4-Espalda.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Rosa Viejo',
    },
    {
      id: 15,
      nombre: 'VESTIDO DE NIÑA LARGO',
      descripcion: 'Versátil vestido verde con cuerpo blanco de flores bordadas y falda de tul, acompañado de una capita manga larga al tono. Conjunto de dos piezas compuesto por un vestido musculosa con corset blanco, guarda de flores bordadas en la cintura y falda de tul verde, más una capita de manga larga con voladitos y botón. Ideal para reuniones familiares, almuerzos festivos, actos escolares y eventos de media estación.',
      precio: 100000,
      imagen: 'assets/VestidoNiña5-FrenteConCapa.JPG',
      imagenes:[
        'assets/VestidoNiña5-FrenteConCapa.JPG',
        'assets/VestidoNiña5-EspaldaConCapa.JPG'
      ],
      categoria: 'vestidos',
      stock: 1,
      color: 'Verde Esmeralda',
    } 
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductoPorId(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }

}