import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Tienda } from './paginas/tienda/tienda';
import { Show } from './paginas/show/show';
import { Barberia } from './paginas/barberia/barberia';
import { Academia } from './paginas/academia/academia';

export const routes: Routes = [
    { path: 'inicio', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'inicio', component: Inicio },
    { path: 'tienda', component: Tienda},
    { path: 'show', component: Show},
    { path: 'barberia', component: Barberia},
    { path: 'academia', component: Academia},
    { path: '**', redirectTo: 'inicio' },

];
