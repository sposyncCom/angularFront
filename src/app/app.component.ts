/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFront';
}*/

import { Component, OnInit } from '@angular/core';
//import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
//import { UserComment } from './models/user-comment.model';
//import { ApiDataService } from './services/api-data.service';   
//import {UserService} from './user.service';
//import {throwError} from 'rxjs';
//import * as $ from 'jquery';
//import {Injectable} from '@angular/core';
//import {HttpClient, } from '@angular/common/http';
//import { Observable } from 'rxjs';

//import { User } from './user/user';
//declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [ApiDataService,],
})


export class AppComponent implements OnInit {
  title = 'angularFront';

  constructor() { }

  ngOnInit(): void {
  }
}


