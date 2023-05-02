import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestoComponent } from './resto.component';
import { ViewComponent } from './view/view.component';
import { OrdersComponent } from './orders/orders.component';
import { FavComponent } from './fav/fav.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersafterComponent } from './ordersafter/ordersafter.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{ path: '', component: RestoComponent },
{
  path:'view/:id',component:ViewComponent
},
{
  path:'orders', component:OrdersComponent
},
{
  path:'favorite', component:FavComponent
},
{
  path:'pending',component:AdminComponent
},
{
  path:'dashboard', component:DashboardComponent
},{
  path:'ordercompleted',component:OrdersafterComponent
},
{
  path:'',component:AboutComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule {

}
