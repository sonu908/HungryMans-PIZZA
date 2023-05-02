import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  //payment
  paymentstatus:boolean = false;
  public payPalConfig ? : IPayPalConfig;

  showSuccess:boolean=false
  showError:boolean=false
  showCancel:boolean=false
  //totalprice
  totalPrice: any

  afterdisc:any

  pending: any = {};


  toppings: any
  orders: any


  constructor(private api: ApiService,private router: Router) { }
  ngOnInit(): void {
    this.getorderedpizza()
    this.initConfig()
    //getting selected toppings

    //      this.toppings =this.view.selectedToppings



  }


  getorderedpizza() {
    this.api.getordereddetails().subscribe((data: any) => {
      console.log(data);

      this.orders = data
      this.totalPrice = this.orders.reduce((acc: any, order: any) => acc + order.price, 0);
      console.log('Total Price:', this.totalPrice);

    })



  }

  //remove selectedzz

  removeSelected(id: any) {
    this.api.removefromorders(id).subscribe((data: any) => {


    })
    location.reload()

  }


  makepayment(){
    this.paymentstatus=true
  }


//paypal


private initConfig(): void {
  this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => < ICreateOrderRequest > {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                  breakdown: {
                      item_total: {
                          currency_code: 'EUR',
                          value: '9.99'
                      }
                  }
              },
              items: [{
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                      currency_code: 'EUR',
                      value: '9.99',
                  },
              }]
          }]
      },
      advanced: {
          commit: 'true'
      },
      style: {
          label: 'paypal',
          layout: 'vertical'
      },
      onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then((details: any) => {
              console.log('onApprove - you can get full order details inside onApprove: ', details);
          });

      },
      onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          this.showSuccess = true;

       setTimeout(() => {
          this.router.navigateByUrl('resto/ordercompleted')
       }, 1000);

        },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
          this.showCancel = true;
          setTimeout(() => {
          },
          500);

      },
      onError: err => {
          console.log('OnError', err);
          this.showError = true;
      },
      onClick: (data, actions) => {
          console.log('onClick', data, actions);
      }
  };
}



saveaddress_pending(pending:any){
  this.api.pendingorder(pending).subscribe((data:any)=>{
console.log(data,'pending');

  })
}


add_and_item(pending:any,orders:any)
{
  this.api.postaddrss_items(pending,orders).subscribe((result:any)=>{

  })
}



}
