import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoclistService} from '../../services/doclist.service';
import {Doctor} from '../../models/doctors';

@Component({
  selector: 'app-docdetails',
  templateUrl: './docdetails.component.html',
  styleUrls: ['./docdetails.component.css']
})
export class DocdetailsComponent implements OnInit {
  detail:Doctor;
  sameDetails:Doctor[];
  category:String;
  constructor(private route:ActivatedRoute,
  private docListService:DoclistService) { 
    
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.docListService.getDoctor(id).subscribe(doc =>{
      this.detail = doc;
      this.docListService.getSameDetails(this.detail.speciality).subscribe(docs=>{
        this.sameDetails = docs;
        this.filterResults();
      })

    });

    
  }

  filterResults(){

    this.sameDetails = this.sameDetails.filter(item=>{
     return  item.id != this.detail.id;
      
    });
   this.sameDetails.sort(function(a,b){
     if(a.score>b.score)
        return -1;
    else if(a.score<b.score)
      return 1;
    else
      return 0;
    })
    console.log(this.sameDetails);
  }

  

  
}
