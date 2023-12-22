import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegUser } from './reguser';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
  
  baseUrl = "http://localhost:8080/reguser";
  constructor(private httpClient: HttpClient) { }

  rUser(reguser: RegUser): Observable<object> {
    console.log(reguser);
    return this.httpClient.post(`${this.baseUrl}`, reguser);
  }
}
