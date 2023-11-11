import { Component, Injectable, OnInit } from '@angular/core';
import { ApiDataService } from '../services/api-data.service'; 

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})


export class NavMainComponent implements OnInit {
  //obuser = '';
  isShown = false;
  //constructor() { }
  constructor( private isAuth : ApiDataService ){}
  //isAuth = new LoginMainComponent();
  public isAuthH = this.isAuth.is_authenticated;
  //public obuser = this.isAuth.obuser;
  public obuser = localStorage.getItem("obuser")||this.isAuth.obuser;


  ngOnInit() {
    //this.loadScript('../assets/js/plugins.js');
    //this.loadScript('../assets/js/navScrollPop.js');
    //this.loadScript('../assets/js/plugins.js');
    //this.loadScript('../assets/js/mdb.js');
    //this.loadScript('../assets/js/mdb.min.js');
    //this.getPosts();
    //this.createPosts();
  }

  onLogout():any
  {
    this.isAuth.logout ; 
  }
  

}
