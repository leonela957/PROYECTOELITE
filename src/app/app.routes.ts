import { Routes } from '@angular/router';

import { Inicio } from './paginas/inicio/inicio';
import { Tienda } from './paginas/tienda/tienda';
import { Show } from './paginas/show/show';
import { Barberia } from './paginas/barberia/barberia';
import { Academia } from './paginas/academia/academia';

import { Carrito } from './paginas/carrito/carrito';
import { Favoritos } from './paginas/favoritos/favoritos';

import { Registro } from './auth/registro/registro';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Productos } from './paginas/productos/productos';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    { path: 'productos', component: Productos},

    { path: 'inicio', component: Inicio },
    { path: 'tienda', component: Tienda },
    { path: 'show', component: Show },
    { path: 'barberia', component: Barberia },
    { path: 'academia', component: Academia },

    { path: 'carrito', component: Carrito },
    { path: 'favoritos', component: Favoritos },

    { path: 'registro', component: Registro },
    { path: 'inicio-sesion', component: InicioSesion },

    { path: '**', redirectTo: 'inicio' }

];            