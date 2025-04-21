import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private apiUrl = 'http://localhost:5166/api/policy';
  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get<any>(this.apiUrl);
  }
}
