import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url = `${environment.urlApi}/empresa`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.url}`);
  }

  findById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.url}/${id}`);
  }

  save(empresa: Empresa): Observable<Empresa> {
    if (empresa.id) {
      return this.http.put<Empresa>(
        `${this.url}`,
        JSON.stringify(empresa),
        httpOptions
      );
    } else {
      return this.http.post<Empresa>(
        `${this.url}`,
        JSON.stringify(empresa),
        httpOptions
      );
    }
  }

  deteleById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
