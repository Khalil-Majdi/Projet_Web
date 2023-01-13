import { Component, OnInit } from '@angular/core';
import { etudiant } from '../models/etudiant.model';
import { etudiantService } from '../services/etudiant.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private etudiantService:etudiantService) { }

  etudiantList!:etudiant[];
  ngOnInit() {
    this.etudiantService.getALLetudiant().subscribe(
      (data)=>{
        this.etudiantList=data;
      },(error)=>{
        console.log(error);
      }
    );

    
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
  
 /* Onpostetudiant(){
    this.etudiantService.postetudiant().subscribe(
      (data)=>{
        this.etudiantList=data;
      },(error)=>{
        console.log(error);
      }
    );

  }*/
}
