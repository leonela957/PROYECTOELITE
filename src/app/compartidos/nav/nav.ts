import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoriaService } from '../../servicios/categoriaService';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(
    public categoriaService: CategoriaService,
    public auth: AuthService,
    private router: Router
  ) {}

  salir(evento: Event): void {
    evento.preventDefault();
    this.auth.logout();
    this.router.navigate(['/inicio-sesion']);
  }
}
