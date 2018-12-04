import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http:HttpClient) { }
  private _url: string = "https://todo-list20181202041248.azurewebsites.net/api/users";

  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }
  
}
