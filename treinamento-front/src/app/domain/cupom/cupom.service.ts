import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cupom } from './cupom';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  // Endereço da API
  url = `${environment.urlApi}/cupom`;

  constructor(private http: HttpClient) { }

  // Método para buscar todos
  findAll(): Observable<Cupom[]> {
    return this.http.get<Cupom[]>(`${this.url}`);
  }

  // Método para buscar por ID
  findById(id: number): Observable<Cupom> {
    return this.http.get<Cupom>(`${this.url}/${id}`);
  }

  // Método para salvar
  save(cupom: Cupom): Observable<Cupom> {
    if(cupom.id){
      return this.http.put<Cupom>(`${this.url}`, JSON.stringify(cupom), httpOptions);
    } else {
      return this.http.post<Cupom>(`${this.url}`, JSON.stringify(cupom), httpOptions);
    }
  }

  // Método para deletar por ID
  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
