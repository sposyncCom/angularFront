import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
//import { UserComment } from './models/user-comment.model';
import { ApiDataService } from '../services/api-data.service';   

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userC = {
    //title: '',
    //description: '',
    //published: false
    userCC:'',
  };
  
  public textAreaForm: FormGroup;
  //constructor(private _DatatService: DatatService, private _userService: UserService) { }
  constructor( private fb : FormBuilder , private userCom : ApiDataService ) {
    this.textAreaForm = fb.group({
      textArea: [null, Validators.required],
    });
   }

  ngOnInit(): void {
  }

  list(feedback:any) {

    this.userC.userCC = feedback; 
  
  }

  createPosts() {
    const mData = {
      userComment: this.userC.userCC,
      //description: this.tutorial.description
    };

    this.userCom.createFeedback(mData).subscribe(
      {
      next: (response) =>   this.list(response),
      error: (e) =>  console.error('Error saving!', e),
      });
  }
}
