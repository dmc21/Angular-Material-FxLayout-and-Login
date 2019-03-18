import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  url = 'http://localhost:3000/graficos';

  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    return this.http.get(this.url);
  }
}
