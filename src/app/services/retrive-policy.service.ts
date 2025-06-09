import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetrivePolicyService {

  private apiUrl = 'https://tesoreria-polizas-back-production.up.railway.app/api/emailreader';

  constructor(private http: HttpClient) { }

  getNewPolicies()
  {
    return this.http.get<any>(this.apiUrl);
  }
}
