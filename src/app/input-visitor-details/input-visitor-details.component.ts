import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerBiodataFormComponent } from '../components/customer-biodata-form/customer-biodata-form.component';
import { Customer } from '../models/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  isLoading = false;
  @ViewChild(CustomerBiodataFormComponent) customerFormComponent: InstanceType<
    typeof CustomerBiodataFormComponent | any
  >;
  constructor(
    private customerServ: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async submitCustomer(customer: Customer) {
    this.isLoading = true;
    try {
      await this.customerServ.postCustomer(customer);
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    } finally {
      this.snackBar.open('Customer successfully added', 'dismiss', {
        duration: 3000,
      });
      this.customerFormComponent.customerForm.reset();
      this.router.navigate(['/visitor-list'])
    }
  }
}
