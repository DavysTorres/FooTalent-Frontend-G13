import { HttpClient } from "@angular/common/http";
import { Injectable, inject  } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/enviroment';
import { environmentProd } from '../../environments/environment.prod';


@Injectable ({
  providedIn: 'root'
})

export class SuscripcionService{
  private apiUrl =  environmentProd.API_URL
  private http= inject(HttpClient)

  constructor(){}


  generarSuscripcion(suscripcionData:any): Observable <any>{
    return this.http.post(`${this.apiUrl}/suscripcion/`, suscripcionData);
  }
  mostrarSuscripciones(idUsuario: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/suscripcion/${idUsuario}`);
  }


}