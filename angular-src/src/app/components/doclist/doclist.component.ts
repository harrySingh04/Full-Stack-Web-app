import { Component, OnInit } from '@angular/core';
import {DoclistService} from '../../services/doclist.service';
import {Doctor} from '../../models/doctors';
@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {
doctors:Doctor[];

specs:String[];
s:String;
a:String;
areas:String[];
area:String;
score:Number;


  constructor(private docListService:DoclistService) {
  
    this.specs=[
      'Dentist',
      'Psychiatrist',
      'Cardiologist',
      'Dermatologist'
    ],
    this.areas = [
      'Los Angeles',
      'San Diego',
      'New York'
    ]
       }

  ngOnInit() {
   
  }

  searchLists(s:String,area:String,score:Number){

    //console.log(this.score);
    //console.log(this.s);
    //console.log(this.a);


    this.docListService.getDoctors().subscribe(docs =>{
      this.doctors = docs;
      this.filterResults();
      })

      
  }

  filterResults(){
   // console.log(this.doctors);
    if(this.s!=undefined){
    this.doctors = this.doctors.filter(idx=>{
      
          return idx.speciality==this.s;
    })
  }
  if(this.a!=undefined){
    this.doctors = this.doctors.filter(idx=>{
      
          return idx.area==this.a;
    })
  }
  if(this.score!=undefined){
    this.doctors = this.doctors.filter(idx=>{
     
          return idx.score>=this.score;
    })
  }


  }
}
