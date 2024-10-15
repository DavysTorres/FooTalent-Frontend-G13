
import { HttpClient } from "@angular/common/http";
import { Injectable, inject  } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/enviroment";


@Injectable ({
  providedIn: 'root'
})

export class CursoService{
  private apiUrl = environment.API_URL
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

}
