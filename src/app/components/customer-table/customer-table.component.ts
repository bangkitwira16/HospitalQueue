import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
})
export class CustomerTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'No',
    'name',
    'address',
    'BPJS',
    'gender',
    'createdAt',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() customers: Customer[];
  dataSource = new MatTableDataSource<Customer>();
  tempCustomers: Customer[];
  genderFilter: string = '';
  ngAfterViewInit() {
    this.tempCustomers = this.customers;
    this.initTable();
  }
  searchCustomer(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.customers = this.tempCustomers.filter((customer: Customer) =>
      customer.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    this.initTable();
  }
  changeGender(state: 'male' | 'female') {
    if (state === this.genderFilter) {
      this.genderFilter = '';
      this.customers = this.tempCustomers;
    } else {
      this.genderFilter = state;
      this.customers = this.tempCustomers.filter(
        (customer: Customer) => customer.gender === state
      );
    }

    console.log(this.customers);
    this.initTable();
  }
  initTable() {
    this.dataSource = new MatTableDataSource<Customer>(this.customers);
    console.log(this.customers);
    this.dataSource.paginator = this.paginator;
  }
}
