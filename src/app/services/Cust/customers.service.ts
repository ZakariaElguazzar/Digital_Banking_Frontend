import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../Model/model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http:HttpClient) {

  }
  public getCustomers() : Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.apiUrlCustomers+"/list_customer");
  }
  public searchCustomer( Keyword:String) : Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.apiUrlCustomers+"/search_customer?keyword="+Keyword);
  }
  public createCustomer(customer: Customer) : Observable<Customer>{
    return this.http.post<Customer>(environment.apiUrlCustomers+"/save",customer);
  }

  public deleteCustomer(id:String) {
    return this.http.delete(environment.apiUrlCustomers+"/delete/"+id);
  }
}
