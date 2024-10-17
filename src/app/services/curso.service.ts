
import { HttpClient } from "@angular/common/http";
import { Injectable, inject  } from "@angular/core";
import { Observable } from "rxjs";


@Injectable ({
  providedIn: 'root'
})

export class CursoService{
  private apiUrl = 'http://localhost:4000/api';
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
    return this.http.put(`${this.apiUrl}/curso/${id}`, { activo: false });
  }
  //Obtener Curso por Id de Usuario
  obtenerCursoPorUsuario(idUsuario: string): Observable<any> {
    console.log(idUsuario)
    return this.http.get(`${this.apiUrl}/suscripcion/${idUsuario}`)
  }

}
