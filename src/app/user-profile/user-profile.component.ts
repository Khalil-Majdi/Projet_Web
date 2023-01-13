import { Component, OnInit } from '@angular/core';
import { etudiant } from '../models/etudiant.model';
import { etudiantService } from '../services/etudiant.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(private etudiantService:etudiantService) { }
  
  ngOnInit() {
  }

  submit(data:any){
    console.log(data);
    this.etudiantService.postetudiant(data).subscribe()
  }

}
