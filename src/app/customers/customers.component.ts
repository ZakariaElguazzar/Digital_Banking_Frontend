import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

    constructor(http:HttpClient) {
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
