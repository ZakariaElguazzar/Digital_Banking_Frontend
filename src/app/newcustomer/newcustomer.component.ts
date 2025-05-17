import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomersService} from '../services/Cust/customers.service';
import {NgIf} from '@angular/common';
import {Customer} from '../Model/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newcustomer',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './newcustomer.component.html',
  styleUrl: './newcustomer.component.css'
})
export class NewcustomerComponent implements OnInit{
  private customer!:Customer;
  private createFormGroup!:FormGroup;
  private messageError !:Object;
  constructor(private custService : CustomersService,private fb:FormBuilder,private router:Router) {
  }

  ngOnInit(): void {
    this.createFormGroup = this.fb.group({
      name: this.fb.control("",[Validators.required,Validators.minLength(2)]),
      email: this.fb.control("",[Validators.required,Validators.email])
    });
  }
  handleCreateSubmit(){
    this.customer = this.createFormGroup.value
    this.custService.createCustomer(this.customer).subscribe(
      {
        next:()=>{
          alert("Customer has been successfully created")
          this.router.navigateByUrl("/customers");
        },
        error : err => {
          this.messageError=err;
          //this.createFormGroup.reset();
        }
      }
    );
  }
  public getCreateFormGroup() : FormGroup{
    return this.createFormGroup;
  }
  public getMessageError() : Object{
    return this.messageError
  }

}
