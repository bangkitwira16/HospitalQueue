import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Queue } from 'src/app/models/Queue';

@Component({
  selector: 'app-barcode-card',
  templateUrl: './barcode-card.component.html',
  styleUrls: ['./barcode-card.component.css']
})
export class BarcodeCardComponent implements OnInit {

  date = Date.now();
  constructor(@Inject(MAT_DIALOG_DATA) public queue: Queue) { }

  ngOnInit(): void {
  }

}
