import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { ApiService } from './api/api.service';


@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})

export class RestoComponent implements OnInit {
  @ViewChild('menuRef', { static: true }) menuRef!: ElementRef;

menuitems:any=[]

  constructor(private api:ApiService ){
  }
    ngOnInit(): void {
  this.getallmenu()
    }

  getallmenu()
  {
    this.api.getallmenu().subscribe((data:any)=>{
      console.log(data);
this.menuitems=data
    })
  }

  scrollToMenu() {
    this.menuRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
