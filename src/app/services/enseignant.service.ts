import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { enseignant } from '../models/enseignant.model';

@Injectable({
  providedIn: 'root'
}) 
export class enseignantService {

  constructor(private http:HttpClient) { }
  // Les méthodes GET


  getenseignant():Observable<enseignant[]>{
    let URL=environment.host;
    return this.http.get<enseignant[]>(URL+'/enseignant?email=this.email,motdepasse=this.motdepasse').pipe();
  }

  postenseignant():Observable<enseignant[]>{
    let URL=environment.host;
    return this.http.get<enseignant[]>(URL+'/enseignant?email=this.email,motdepasse=this.motdepasse').pipe();
  }
  

}