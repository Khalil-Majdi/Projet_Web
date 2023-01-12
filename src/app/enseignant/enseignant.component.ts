import { Component, OnInit } from '@angular/core';
import { enseignant } from '../models/enseignant.model';
import { enseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class enseignantComponent implements OnInit {

    enseignantList!:enseignant[];

  constructor(private enseignantService:enseignantService) { }

  ngOnInit(): void {
  }

 
  
  Ongetenseignant(){
    this.enseignantService.getenseignant().subscribe(
      (data)=>{
        this.enseignantList=data;
      },(error)=>{
        console.log(error);
      }
    );

  }
  
  Onpostenseignant(){
    this.enseignantService.postenseignant().subscribe(
      (data)=>{
        this.enseignantList=data;
      },(error)=>{
        console.log(error);
      }
    );

  }
 

}