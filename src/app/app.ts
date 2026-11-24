
import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Footer } from './compartidos/footer/footer';
import { Nav } from './compartidos/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoElite');

  public mostrarNav = false;

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        const ruta = this.router.url.split('?')[0];

        this.mostrarNav =
          ruta === '/tienda' ||
          ruta === '/carrito' ||
          ruta === '/favoritos' ||
          ruta.startsWith('/productos/');

      });

  }
}
