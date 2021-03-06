import { CustomerService } from './../../Services/customer.service';
import { Customer } from './../../Models/customer-models/Customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService, private _router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.customerService.getAllFalse().subscribe(res => {
      if (res == null) {
        this.toastr.error('No data found!', 'Customer');
      }
      this.customers = res;
    });
  }
  editButtonClick(customerId: number): void {
    this._router.navigate(['/edit', customerId]);
  }
  deleteButtonClick(customerId: number): void{
    this.customerService.deleteCustomer(customerId).subscribe(res => {
      this.fetchData();
      this.toastr.error('Delete Successfull', 'Customer');

    });
  }
  fetchData(): void {
    this.customerService.getAllFalse().subscribe((res: Customer[]) => {
      this.customers = res;
    });
  }

}
