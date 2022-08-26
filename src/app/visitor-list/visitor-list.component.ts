import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerService } from "../services/customer.service";

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  customers: Customer[] = []
  constructor(private customerServ: CustomerService) { }

  ngOnInit(): void {
    this.fetchCustomer()
  }

  async fetchCustomer() {
    try {
      const response = await this.customerServ.getCustomer();
      if (response) this.customers = response
      console.log(this.customers)
    } catch {
      console.log('error')
    }
  }
}
