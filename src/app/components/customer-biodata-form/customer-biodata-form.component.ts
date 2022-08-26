import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer-biodata-form',
  templateUrl: './customer-biodata-form.component.html',
  styleUrls: ['./customer-biodata-form.component.css'],
})
export class CustomerBiodataFormComponent implements OnInit {
  @Input() isLoading = false;
  @Output() onSubmit = new EventEmitter<Customer>();
  
  customerForm: FormGroup;
  genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];
  customerPayload: Customer = {
    name: '',
    createdAt: Date.now(),
    address: '',
    BPJS: undefined,
    IDNumber: undefined,
    gender: undefined,
    phone: undefined,
  };
  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      BPJS: ['', [Validators.required]],
      IDNumber: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }

    this.customerPayload.name = this.customerForm.controls['name'].value;
    this.customerPayload.BPJS = this.customerForm.controls['BPJS'].value;
    this.customerPayload.address = this.customerForm.controls['address'].value;
    this.customerPayload.gender = this.customerForm.controls['gender'].value;
    this.customerPayload.phone = this.customerForm.controls['phone'].value;
    this.customerPayload.createdAt = Date.now();
    this.customerPayload.IDNumber = this.customerForm.controls['IDNumber'].value;

    this.onSubmit.emit(this.customerPayload)
  }
  
}
