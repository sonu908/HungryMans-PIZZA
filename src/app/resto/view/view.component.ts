import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  //to store id
  pizza_id = []

  //pizza details
  __pizza_details: any = {}

  //marked toppings
  selectedToppings: string[] = [];



  //item details

  name: any = ''
  description: any
  price: any
  image: any
  crust: any
  catchy_phrase: any
  priceaddon: any
  nameaddon: any

  //nw
  // __veg:boolean=false


  //all - toppings
  __toppings: any

  constructor(private api: ApiService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.pizza_id = data.id
      console.log(this.pizza_id);

    })

    this.viewpizza(this.pizza_id)
    //calling fn with pizzza_id

    this.viewtoppings()
  }

  viewpizza(id: any) {
    this.api.viewpizza(id).subscribe((data: any) => {
      console.log(data);

      this.__pizza_details = data

      //assign

      this.name = this.__pizza_details.name
      this.description = this.__pizza_details.description
      this.crust = this.__pizza_details.crust
      this.image = this.__pizza_details.image
      this.catchy_phrase = this.__pizza_details.catchy_phrase
      this.price = this.__pizza_details.price
    })
  }
  //view all toppings
  viewtoppings() {
    this.api.viewtoppings().subscribe((result: any) => {

      this.__toppings = result
      console.log(this.__toppings, 'all - toppings');

    })
  }

  //to get selected toppings
  onSubmit() {
    const checkedToppings = this.__toppings.filter((item: any) => item.checked);
    console.log(checkedToppings, 'checked topppings');
    this.selectedToppings = checkedToppings
  }



  addorder(pizza: any) {
    this.api.addoders(pizza).subscribe((data: any) => {

      alert("Order Added!");

      console.log(data);

    })
  }


  addtofavorite(fav: any) {

    this.api.addfav(fav).subscribe((data: any) => {
      alert(`${fav.name} added to favorites`)
      console.log(data);

    })
  }
}

////////////////////////////////////////////
