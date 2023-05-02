import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getallmenu() {
    return this.http.get(`${this.base_url}/items/menu`)
  }
  viewpizza(id: any) {
    return this.http.get(`${this.base_url}/items/${id}`)
  }


  viewtoppings() {
    return this.http.get(`${this.base_url}/addons/view`)
  }


  addoders(pizza: any) {
    const body = {

      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      image: pizza.image,
      crust: pizza.crust

    }
    return this.http.post(`${this.base_url}/orders/item`, body)
  }

  getordereddetails() {
    return this.http.get(`${this.base_url}/orders/list`)
  }

  removefromorders(id: any) {
    return this.http.delete(`${this.base_url}/orders/remove/${id}`)
  }



  addfav(pizza: any) {
    const body = {

      id: pizza.id,
      name: pizza.name,
      image: pizza.image,
      catchy_phrase: pizza.catchy_phrase
    }
    return this.http.post(`${this.base_url}/favorites/add`, body)
  }


getfav(){
  return this.http.get(`${this.base_url}/orders/get/`)
}

deletefav(id:any){
  return this.http.delete(`${this.base_url}/fav/remove/${id}`)
}

pendingorder(pending:any){
  const body ={

    name : pending.name,
    phone : pending.phone,
    address : pending.address


  }
  return this.http.post(`${this.base_url}/pendings/orders`,body)
}


getadmindetails(){
  return this.http.get(`${this.base_url}/admindetails/login`)
}


deletemenuadmin(id:any){
 return this.http.delete(`${this.base_url}/admin/deletemenu/${id}`)
}



addmenu(menu:any){
  const body = {
    id:menu.id,
    name:menu.name,
    description:menu.description,
    price:menu.price,
    image:menu.image,
    crust:menu.crust,
    veg:menu.veg,
    catchy_phrase:menu.catchy_phrase
  }

return this.http.post(`${this.base_url}/admin/add`,body)

}

postaddrss_items(pending:any,orders:any){

  const body = {pending,orders}

  return this.http.post(`${this.base_url}/addressanditems/add`,body)


}

getdetailof_pendingorders(){
  return this.http.get(`${this.base_url}/addressanditems/allitems`)
}

}
