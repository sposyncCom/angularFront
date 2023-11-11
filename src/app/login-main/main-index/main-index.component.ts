import { Component, OnInit, } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'; 

declare const initMap:any;
declare const preMap:any;

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css']
})

export class MainIndexComponent implements OnInit {



    constructor( private infoWinApi : ApiDataService, ){
    }

    is_authenticated = this.infoWinApi.is_authenticated;

    ngOnInit(): void {

      preMap(null,null,null,this.infoWinApi.mapKey,this.infoWinApi.ivArg);

    }


}
