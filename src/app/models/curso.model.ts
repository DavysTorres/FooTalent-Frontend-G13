export interface Curso {
  _id?: string;
  nombre: string;
  descripcion: string;
  imagen?: string;
  que_aprenderas?: string;
  requisitos?: string;
  razon_eleccion?: string;
  informacion_adicional?: string;
  activo?:boolean;
  createdAt?: Date;
  duracion?:String
}
