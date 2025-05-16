import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) {

  }
  public getCustomers() : Observable<Object>{
    return this.http.get("http://localhost:8080/customers/list_customer");
  }
}
