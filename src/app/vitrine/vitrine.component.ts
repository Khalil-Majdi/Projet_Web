import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {
  menuItems: any[];
  constructor(private router:Router) { }

    
    ngOnInit(): void {
  }
  goinscri(){

    this.router.navigate(["/vitrine/inscription"]);

  }
  goconnexion(){
    this.router.navigate(["/vitrine/login"]);
  }
  godescription(){
    this.router.navigate(["/vitrine/description"]);
  }
  gocontact(){
    this.router.navigate(["/vitrine/contact"]);
  }
  goacceuil(){
    this.router.navigate(["/vitrine/acceuil"]);
  }
}
