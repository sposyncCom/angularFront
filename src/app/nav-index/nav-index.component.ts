import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-index',
  templateUrl: './nav-index.component.html',
  styleUrls: ['./nav-index.component.css']
})

export class NavIndexComponent implements OnInit {
  isShown = false;
  constructor() { }

  ngOnInit(): void {
  }

}
