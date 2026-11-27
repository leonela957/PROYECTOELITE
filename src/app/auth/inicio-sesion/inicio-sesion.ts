import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: "app-inicio-sesion",
  imports: [FormsModule, RouterLink],
  templateUrl: "./inicio-sesion.html",
  styleUrl: "./inicio-sesion.css"
})
export class InicioSesion {

  email = "";
  clave = "";
  error = "";

  constructor(private auth: AuthService, private router: Router) {}

  ingresar(): void {
    this.error = "";
    this.auth.login(this.email, this.clave).subscribe({
      next: () => {
        this.router.navigate([this.auth.esAdmin() ? "/paginas/admin" : "/inicio"]);
      },
      error: () => (this.error = "Email o contraseña incorrectos")
    });
  }
}