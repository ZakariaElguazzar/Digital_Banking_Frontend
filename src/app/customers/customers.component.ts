import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CustomersService} from '../services/Cust/customers.service';

@Component({
  selector: 'app-customers',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit{
  private customers : any;
  constructor(private custService : CustomersService) {
    }
    ngOnInit(): void {
       this.custService.getCustomers().subscribe({
         next : (data) => this.customers = data,
        error : (err)=> console.log(err)
      });
  }

  public getCustomers(){
    return this.customers;
  }
}

