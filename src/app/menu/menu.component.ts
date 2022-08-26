import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BarcodeCardComponent } from '../components/barcode-card/barcode-card.component';
import { Customer } from '../models/Customer';
import { Queue } from '../models/Queue';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  currentQueueIdx = 0;
  currentQueue: Queue;
  queues: Customer[] = [];
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private CustomerServ: CustomerService
  ) {}

  ngOnInit(): void {
    this.fetchCustomer()
  }

  changePage(path) {
    this.router.navigate(['/' + path]);
  }

  openBarcode() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'queue';
    dialogConfig.data = this.currentQueue
    let dialogRef = this.dialog.open(BarcodeCardComponent, dialogConfig);
    dialogRef.backdropClick().subscribe(() => dialogRef.close());
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  async fetchCustomer() {
    try {
      const response = await this.CustomerServ.getCustomer();
      if (response) this.queues = response;
    } catch (err) {
      console.log(err);
    } finally {
      this.initQueue();
    }
  }

  initQueue() {
    this.currentQueue = {
      ...this.queues[this.currentQueueIdx],
      queueNumber: `A00${this.currentQueueIdx + 1}`,
    };
    console.log(this.currentQueue)
  }

  nextPrevQueue(state: 'next' | 'prev') {
    console.log(state)
    if (state === 'next') {
      this.currentQueueIdx++
    }
    else {
      this.currentQueueIdx--
    }
    this.initQueue()
  }
}
