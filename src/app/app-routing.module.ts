import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './resto/view/view.component';

const routes: Routes = [{ path: 'resto', loadChildren: () => import('./resto/resto.module').then(m => m.RestoModule) },

{
  path:'',redirectTo:'resto',pathMatch:'full'
},
{
  path:'items/:id',component:ViewComponent
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
