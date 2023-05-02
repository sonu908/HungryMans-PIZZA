import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  password: any = ''

  adminname: any
  passwordverify: any
  constructor(private api: ApiService, public router: Router, public Renderer:Renderer2 ) { }
  ngOnInit(): void {
    this.admindet()
    this.getLocation()
  }

  admindet() {

    this.api.getadmindetails().subscribe((result: any) => {
      this.adminname = result[0].name
      this.passwordverify = result[0].password

    })

  }


  onsubmit() {
    if (this.password == this.passwordverify) {

      setTimeout(() => {
        this.router.navigateByUrl('resto/dashboard')

      }, 1500);

    } else {
      alert('wrong password')
    }
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }



}
