import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class etudiantService {

  constructor(private http:HttpClient) { }
  // Les méthodes GET


  getALLetudiant():Observable<etudiant[]>{
    let URL=environment.host;
    return this.http.get<etudiant[]>(URL+'/etudiant').pipe();
  }

  postetudiant():Observable<etudiant[]>{
    let URL=environment.host;
    return(this.http.get<etudiant[]>(URL+'/etudiant').pipe());
    //return this.http.post<etudiant[]>(URL+'/etudiant').pipe();
  }
  

}