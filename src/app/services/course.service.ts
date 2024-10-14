/*import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Course {
  _id: string;
  nombre: string;
  descripcion: string;
  profesorId: {
    _id: string;
    nombre: string;
    email: string;
  };
  estudiantes: Array<{
    _id: string;
    nombre: string;
    email: string;
  }>;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})

export class CourseService {
  private API_URL = 'http://localhost:4000/api/curso';

  constructor(private http: HttpClient) {}

  mostrarCursos(): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.API_URL)
      .pipe(catchError(this.manejarError));
  }

  private manejarError(error: HttpErrorResponse) {
    // Imprimir el cuerpo completo del error
    console.error('Error completo:', error);

    if (error.error && error.error.message) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Retornar un observable con un mensaje de error
    return throwError(
      'Algo salió mal; por favor, intenta nuevamente más tarde.'
    );
  }  
}
*/