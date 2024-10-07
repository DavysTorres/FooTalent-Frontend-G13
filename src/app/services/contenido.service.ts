import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  private apiUrl = 'http://localhost:4000/api/contenidos'; // Cambia la URL según tu backend
  private http = inject(HttpClient)

  constructor() {}

  // Obtener todos los contenidos
  getContenidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agregar nuevo contenido
  agregarContenido(contenido: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contenido);
  }

  // Actualizar contenido existente
  actualizarContenido(id: string, contenido: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, contenido);
  }

  // Eliminar contenido
  eliminarContenido(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
