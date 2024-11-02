import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { environmentProd } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  private apiUrl =  environmentProd.API_URL;
  private http = inject(HttpClient)

  constructor() {}

  // Obtener todos los contenidos
  getContenidos(cursoId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clase/${cursoId}`);
  }
  

  // Agregar nuevo contenido
  agregarContenido(contenido: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clase`, contenido);
  }

  // Actualizar contenido existente
  actualizarContenido(id: string, contenido: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/clase/${id}`, contenido);
  }

  // Eliminar contenido
  eliminarContenido(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/clase/${id}`);
  }
}
