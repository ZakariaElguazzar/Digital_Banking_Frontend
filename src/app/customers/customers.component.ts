import {Component, OnInit} from '@angular/core';
import {AsyncPipe,NgForOf, NgIf} from '@angular/common';
import {CustomersService} from '../services/Cust/customers.service';
import {catchError, Observable, throwError} from 'rxjs';
import {Customer} from '../Model/model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-customers',
  imports: [
    NgForOf,
    NgIf,
    //JsonPipe,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit{
  private customers !: Observable<Array<Customer>>;
  // private messageError : String | undefined;
  //private messageError : String | null=null;
  private messageError !: Object;
  search_customer: any;
  constructor(private custService : CustomersService) {
    }
    ngOnInit(): void {
       /*this.custService.getCustomers().subscribe({
         next : (data) => this.customers = data,
        error : (err)=> {
           this.messageError = err.message;
           console.log(err);
        }
      });*/
      this.customers=this.custService.getCustomers().pipe(
        catchError(err => {
          this.messageError=err.message;
          return throwError(() => err);
        })
      );
  }

  public getCustomers(){
    return this.customers;
  }
  public getMessageError(){
    return this.messageError;
  }
}

