import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
import { ApiDataService } from '../services/api-data.service';   


@Component({
  selector: 'app-index-index',
  templateUrl: './index-index.component.html',
  styleUrls: ['./index-index.component.css']
})


export class IndexIndexComponent implements OnInit {


  userC : string;

  constructor( private fb : FormBuilder , private infoWinApi : ApiDataService ) {  
  }


  ngOnInit() {
  }


  createPosts() {
    const mData = {
      userComment: this.userC,
    };
    

    this.infoWinApi.createFeedback(mData).subscribe({

      next: (response) =>  {

        this.list(response);
      } ,
      error: (e) =>  console.error('Error saving!', e),
      });
    }

     
    list(feedback:any) {

      this.userC = feedback['msg']['userComment'];     
    }


}
