import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';

export const routes: Routes = [
    { path: 'inicio', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'inicio', component: Inicio },
    { path: '**', redirectTo: 'inicio' },

];
