import { Component, OnInit } from '@angular/core';
import { etudiant } from '../models/etudiant.model';
import { etudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class etudiantComponent implements OnInit {

    etudiantList!:etudiant[];

  constructor(private etudiantService:etudiantService) { }

  ngOnInit(): void {
    
    
  } 
  
  OngetALLetudiant(){
    this.etudiantService.getALLetudiant().subscribe(
      (data)=>{
        this.etudiantList=data;
      },(error)=>{
        console.log(error);
      }
    );
  }
  /*
  Onpostetudiant(){
    this.etudiantService.postetudiant().subscribe(
      (data)=>{
        this.etudiantList=data;
      },(error)=>{
        console.log(error);
      }
    );

  }*/
 

}
