import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { RestoComponent } from './resto.component';
import { ViewComponent } from './view/view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { FavComponent } from './fav/fav.component';
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersafterComponent } from './ordersafter/ordersafter.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    RestoComponent,
    ViewComponent,
    OrdersComponent,
    FavComponent,
    AdminComponent,
    DashboardComponent,
    OrdersafterComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule,

  ]
})
export class RestoModule { }
