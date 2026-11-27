import { Injectable } from "@angular/core"; 
import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs"; 
  
@Injectable({ providedIn: "root" }) 
export class FavoritoService { 
  private apiUrl = "http://localhost/api_proyecto_ELITE/public/favoritos"; 
  constructor(private http: HttpClient) {} 
  listar(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); } 
  agregar(id: number): Observable<any> { return this.http.post(`${this.apiUrl}/agregar`, { id_producto: id }); } 
  eliminar(id: number): Observable<any> { return this.http.delete(`${this.apiUrl}/eliminar/${id}`); } 
} 