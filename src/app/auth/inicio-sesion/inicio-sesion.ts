import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  imports: [RouterLink, FormsModule],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css',
})
export class InicioSesion {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  iniciar(): void {
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/tienda']),
      error: e => alert(e.error?.error ?? 'No se pudo iniciar sesión')
    });
  }
}
