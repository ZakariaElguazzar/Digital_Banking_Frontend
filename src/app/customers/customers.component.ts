import {Component, OnInit} from '@angular/core';
import {AsyncPipe,NgForOf, NgIf} from '@angular/common';
import {CustomersService} from '../services/Cust/customers.service';
import {catchError, map, Observable, throwError} from 'rxjs';
import {Customer} from '../Model/model';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-customers',
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit{
  private customers !: Observable<Array<Customer>>;
  private searchFormGroup !: FormGroup;
  // private messageError : String | undefined;
  //private messageError : String | null=null;
  private messageError !: Object;
  constructor(private custService : CustomersService,private fb : FormBuilder) {
    }
    ngOnInit(): void {
       /*this.custService.getCustomers().subscribe({
         next : (data) => this.customers = data,
        error : (err)=> {
           this.messageError = err.message;
           console.log(err);
        }
      });*/
      this.searchFormGroup=this.fb.group({
        keyword:this.fb.control("")
      });
      this.handleSearchFormSubmit();
  }

  public getCustomers(){
    return this.customers;
  }
  public getMessageError(){
    return this.messageError;
  }
  public getSearchFormGroup(){
    return this.searchFormGroup;
  }

  handleSearchFormSubmit() {
    // ? verify if the value exist before searching
    this.customers=this.custService.searchCustomer(this.searchFormGroup?.value.keyword).pipe(
      catchError(err => {
        this.messageError=err.message;
        return throwError(() => err);
      })
    );
  }

  handleDeleteCustomer(customer: Customer) {
    return this.custService.deleteCustomer(customer.id).subscribe(
      {
        next: () =>{
          this.customers=this.customers.pipe(
            map(data=>{
              data.slice(data.indexOf(customer),1)
              return data
            })
          )
        },
        error : (err) => {
          this.messageError=err;
        }
      }
    );
  }
}

