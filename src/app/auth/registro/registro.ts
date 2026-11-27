import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterLink],
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
    if (!this.nombre || !this.apellido || !this.email || !this.password) {
      alert('Completá todos los campos');
      return;
    }

    if (this.password !== this.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.auth.registro({
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      contraseña: this.password,   // ⚠️ nombre de campo supuesto
    }).subscribe({
      next: () => {
        alert('Cuenta creada. Ahora podés iniciar sesión.');
        this.router.navigate(['/inicio-sesion']);
      },
      error: e => alert(e.error?.error ?? 'No se pudo crear la cuenta'),
    });
  }
}