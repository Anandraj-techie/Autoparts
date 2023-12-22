import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  baseUrl="http://localhost:8080/user";
  constructor(private httpClient:HttpClient) { }

    loginUser(user:User):Observable<object>{
          console.log(user);
          return this.httpClient.post(`${this.baseUrl}`,user);


          

    }
}
