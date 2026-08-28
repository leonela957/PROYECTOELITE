import { Routes } from '@angular/router';

import { Inicio } from './paginas/inicio/inicio';
import { Tienda } from './paginas/tienda/tienda';
import { Show } from './paginas/show/show';
import { Barberia } from './paginas/barberia/barberia';
import { Academia } from './paginas/academia/academia';

import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';

import { Registro } from './auth/registro/registro';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

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