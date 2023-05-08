import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  additem: any = {};

  menuitems: any

  pendingorders: any = {}

  randomNum: any

  finalprice: any


  constructor(public api: ApiService) { }
  ngOnInit(): void {

    this.getmenudetailadmin()

    this.getallpendingorders()

    this.randomnumber()
  }

  getmenudetailadmin() {
    this.api.getallmenu().subscribe((data: any) => {
      console.log(data);
      this.menuitems = data
    })
  }

  deletemenuitem(id: any) {

    this.api.deletemenuadmin(id).subscribe((data: any) => {

    })
    location.reload()

  }

  addmenu(data: any) {
    this.api.addmenu(data).subscribe((data: any) => {
      console.log(data);
      location.reload()

    })
  }
  getallpendingorders() {
    this.api.getdetailof_pendingorders().subscribe((data: any) => {
      console.log(data, 'pendingorders');
      this.pendingorders = data
      console.log(this.pendingorders);
      this.finalprice = this.pendingorders.orders[0].price + this.pendingorders.orders[1]?.price
    })
  }



  randomnumber() {
    this.randomNum = 4532000000 + Math.floor(Math.random() * 900000000);
    console.log(this.randomNum);
  }

}
