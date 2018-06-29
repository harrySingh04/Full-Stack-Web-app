import { Injectable } from '@angular/core';
import {Doctor} from '../models/doctors';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoclistService {
  Doctor:Doctor[];

  postUrls = "";

  constructor(private http:HttpClient) { 
   
  }

 
  getDoctors() : Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.postUrls+'/home');
  }
  getDoctor(id:Number) : Observable<Doctor>{

    return this.http.get<Doctor>(this.postUrls+"/details/"+id);
  }

  getSameDetails(category:String):Observable<Doctor[]>{
    
    return this.http.get<Doctor[]>(this.postUrls+'/'+category);
  }
}
