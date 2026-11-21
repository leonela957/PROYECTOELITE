import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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

  public mostrarNav = true;

  constructor(private router: Router) {

  this.router.events.subscribe(() => {
    this.mostrarNav = this.router.url !== '/inicio';
  });

}
}