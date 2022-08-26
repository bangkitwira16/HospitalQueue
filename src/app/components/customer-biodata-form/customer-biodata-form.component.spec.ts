import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBiodataFormComponent } from './customer-biodata-form.component';

describe('CustomerBiodataFormComponent', () => {
  let component: CustomerBiodataFormComponent;
  let fixture: ComponentFixture<CustomerBiodataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBiodataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBiodataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
