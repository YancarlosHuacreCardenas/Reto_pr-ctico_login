import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelo de registro (tipado)
export interface Registro {
  nombre: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private apiUrl = 'http://localhost:8080/api/auth/register';

  constructor(private http: HttpClient) {}

  // Método para registrar usuario
  registrar(nombre: string, email: string, password: string): Observable<any> {
    const usuario: Registro = {
      nombre: nombre,   // 🔥 coincide con tu BD
      email: email,
      password: password
    };

    return this.http.post<any>(this.apiUrl, usuario);
  }
}
