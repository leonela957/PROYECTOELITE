
// servicios/auth.service.ts 
import { Injectable, signal } from "@angular/core"; 
import { HttpClient } from "@angular/common/http"; 
import { Observable, tap } from "rxjs"; 
  
@Injectable({ providedIn: "root" }) 
export class AuthService { 
  
  private apiUrl = "http://localhost/api_proyecto_ELITE/public/usuarios"; 
  
  // Guarda el usuario logueado en una "señal": cuando cambia, Angular actualiza 
  // solo todo lo que la use (por ejemplo el nav), sin recargar la página. 
  private usuarioActual = signal<any>(JSON.parse(localStorage.getItem("usuario") || 
"null")); 
  
  constructor(private http: HttpClient) {} 
  
  registro(datos: any): Observable<any> { 
    return this.http.post(`${this.apiUrl}/registro`, datos); 
  } 
  
  login(email: string, contraseña: string): Observable<any> { 
    return this.http.post(`${this.apiUrl}/login`, { email, contraseña }).pipe( 
      tap((respuesta: any) => { 
        localStorage.setItem("token", respuesta.token);        // guarda el token 
        localStorage.setItem("usuario", JSON.stringify(respuesta.usuario)); // y los datos básicos 
        this.usuarioActual.set(respuesta.usuario);   // avisa a la app: ya hay alguien logueado 
      }) 
    ); 
  } 
  
  logout(): void { 
    localStorage.removeItem("token"); 
    localStorage.removeItem("usuario"); 
    this.usuarioActual.set(null);                   // avisa a la app: ya no hay sesión 
  } 
  
  getToken(): string | null { 
    return localStorage.getItem("token"); 
  } 
  
  estaLogueado(): boolean { 
    return this.usuarioActual() !== null;           // hay sesión si hay un usuario guardado 
  } 
  
  esAdmin(): boolean { 
    return this.usuarioActual()?.rol === "admin";   // lee el rol que devolvió la API al loguearse 
  } 
  
  nombreUsuario(): string { 
    return this.usuarioActual()?.nombre ?? ""; 
  } 
} 