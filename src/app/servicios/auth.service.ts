import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { API_URL } from '../config';

export interface UsuarioSesion { id: number; nombre: string; rol: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  private usuarioSubject = new BehaviorSubject<UsuarioSesion | null>(this.leerUsuario());
  usuario$ = this.usuarioSubject.asObservable();

  private leerUsuario(): UsuarioSesion | null {
    try { return JSON.parse(localStorage.getItem('usuario') ?? 'null'); }
    catch { return null; }
  }

  get token(): string | null { return localStorage.getItem('token'); }
  get logueado(): boolean { return !!this.token; }
  get esAdmin(): boolean { return this.usuarioSubject.value?.rol === 'admin'; }

  registro(nombre: string, email: string, contraseña: string) {
    return this.http.post(`${API_URL}/usuarios/registro`, { nombre, email, contraseña });
  }

  login(email: string, contraseña: string) {
    return this.http
      .post<{ token: string; usuario: UsuarioSesion }>(`${API_URL}/usuarios/login`, { email, contraseña })
      .pipe(tap(r => {
        localStorage.setItem('token', r.token);
        localStorage.setItem('usuario', JSON.stringify(r.usuario));
        this.usuarioSubject.next(r.usuario);
      }));
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
  }
}
