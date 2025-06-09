import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private apiUrl = 'https://tesoreria-polizas-back-production.up.railway.app/api/policy';

  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get<any>(this.apiUrl);
  }
}
