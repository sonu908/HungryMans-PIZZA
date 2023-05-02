import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
fav:any


  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
    this.favorders()
  }


  favorders() {
    this.api.getfav().subscribe((data: any) => {
      console.log(data);
this.fav=data
    })
  }

deletefav(id:any){

  this.api.deletefav(id).subscribe((data: any) => {

  })

  location.reload()
 

}


}
