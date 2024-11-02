
import { HttpClient } from "@angular/common/http";
import { Injectable, inject  } from "@angular/core";
import { Observable } from "rxjs";
import { environmentProd } from '../../environments/environment.prod';


@Injectable ({
  providedIn: 'root'
})

export class CursoService{
  private apiUrl =  environmentProd.API_URL
  private http= inject(HttpClient)

  constructor(){}

  crearCurso(cursoData:any): Observable <any>{
    return this.http.post(`${this.apiUrl}/curso/`, cursoData);
  }
  obtenerCursos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/curso/`);
  }
  // Obtener un curso por ID
  obtenerCursoPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/curso/${id}`);
  }
  editarCurso(id: string, cursoData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/curso/${id}`, cursoData);
  }
  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/curso/${id}`);
  }

  obtenerCursoPorIdUsuario(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/curso/cursos/${id}`);
  }

}
