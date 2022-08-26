import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private apiServ: ApiService) { }

  async getCustomer() {
    const response = await this.apiServ
      .httpGet('/customers')
      .then((response: Customer[]) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }

  async postCustomer(customer: Customer) {
    const response = await this.apiServ
      .httpPost('/customers', customer)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }

}
