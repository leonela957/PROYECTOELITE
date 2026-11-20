import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  imports: [RouterLink, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  nombre = '';
  apellido = '';
  email = '';
  password = '';
  confirmarPassword = '';

  constructor(private auth: AuthService, private router: Router) {}

  registrar(): void {
    if (this.password !== this.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    this.auth.registro(`${this.nombre} ${this.apellido}`.trim(), this.email, this.password).subscribe({
      next: () => {
        alert('Cuenta creada. Ahora iniciá sesión');
        this.router.navigate(['/inicio-sesion']);
      },
      error: e => alert(e.error?.error ?? 'No se pudo crear la cuenta')
    });
  }
}
