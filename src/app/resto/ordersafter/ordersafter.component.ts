import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordersafter',
  templateUrl: './ordersafter.component.html',
  styleUrls: ['./ordersafter.component.css']
})
export class OrdersafterComponent implements OnInit  {
transID:any

shouldReload:boolean = true;

ngOnInit(): void {
  this.transID = Math.floor(Math.random() * 9000000000) + 1000000000;

  }

}
