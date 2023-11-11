import { Component, OnInit, } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
import { ApiDataService } from '../../../services/api-data.service'; 
import { formatDate } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';

declare const preMap:any;
declare const locateMe:any;


@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})


export class EventRegisterComponent implements OnInit {

  textAreaForm: FormGroup;
  addressForm: FormGroup; 
  eventForm: FormGroup;
  mapKey :any;
  is_authenticated : boolean = false;
  tokenAPI: string ='';
  token_expires: Date = new Date(0) ; 
  varslug : string = null;
  startTime : Date;
  endTime : Date;
  fileName: any;
  formData = new FormData(); 
  devent:any;
  deleteF :boolean;
  updateF :boolean;
  errors: any = [];
  private locUpdate:Boolean = false;
  private locDelete:Boolean = false;
  private locRegister:Boolean = false;
  private eventUpdate:Boolean = false;
  private eventDelete:Boolean = false;
  private eventRegister:Boolean = false;
  private pmarkzonea :any ;
  private pzonea : any;                          
  private piza : any;
  allEventType = [
    'Party','Sporting','Ceremony','Conference','Concert',
  ]


  constructor( private infoWinApi : ApiDataService, private fb : FormBuilder, private router : Router, 
    private activatedrouter : ActivatedRoute, ){
  }


  ngOnInit(): void {

    const thisObuser = this.infoWinApi.obuser;

    this.infoWinApi.eventRegisterGet(thisObuser).subscribe({

          next: (response:any) => { 
  
            let resNull  = false;
            let noModel = true;
            this.responseFunc(response, resNull, noModel);
          },
          error: (e) =>  console.error('Error RegisterGet!', e),
      });
   
    let start = new Date();
    let end  = new Date();      

    this.addressForm = this.fb.group({

        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
        country: ['', [Validators.required]],        
    });
    
    this.eventForm = this.fb.group({

        eventType:['', [Validators.required]],
        eventNote: ['', [Validators.required]],
        eventSpot: ['', [Validators.required]],        
        eventStart: [formatDate(start, 'yyyy-MM-dd hh:mm:ssZZZZZ', 'en_US'), [Validators.required]],
        eventEnd: [formatDate(end, 'yyyy-MM-dd hh:mm:ssZZZZZ', 'en_US'), [Validators.required]],        
        eventFee: ['', [Validators.required]],
        eventMode: [false, [Validators.required]],
        eventAudience: [[], [Validators.required]],        
        eventIconFile: ['', [Validators.required]],
        eventIconSource: ['', [Validators.required]],        
      });
  }



  queryClick(varslug:string){

    this.infoWinApi.eventRegisterKwargs(varslug).subscribe({

          next: (response:any) => {        

              let noModel = false;
              let resNull  = false;                
              this.responseFunc(response, resNull, noModel);

              if (response['deleteF'] == 'True'){

                  this.deleteF = true;
              }
                
              else if (response['deleteF'] == 'False'){

                this.deleteF = false;
              }                  

              else if (response['updateF'] == 'True'){

                this.updateF = true;
              }
                
              else if ( response['updateF'] == 'False'){

                this.updateF = false;
              }                  
          },
          error: (e) =>  console.error('Error eventRegiserKwargs!', e),
      });        
    }


  onAddressSubmit(): void {

    if(this.locUpdate == true){

        let newLoc: any = this.addressForm.value;
        let action = 'updateLoc';
        const thisObuser = this.infoWinApi.obuser;
        const apiData = {
            eventData : newLoc,
            actionAPI : action,
            userName : thisObuser
        };

        this.infoWinApi.locRegister(apiData).subscribe({

            next: (response:any) => { 

              let noModel = false;
              let resNull  = true;              
              this.responseFunc(response, resNull, noModel);
              this.popupLoc();
            },
            error: (e) =>  { console.error('Error onAddressSubmit!', e);
            },                           
          });        
      }

    else if(this.locDelete == true){

        let newLoc: any = this.addressForm.value;
        let action = 'deleteLoc'
        const thisObuser = this.infoWinApi.obuser;
        const apiData = {
            eventData : newLoc,
            actionAPI : action,
            userName : thisObuser
        };

        this.infoWinApi.locRegister(apiData).subscribe({

            next: (response:any) => { 

              let noModel = false;
              let resNull  = true;
              this.responseFunc(response, resNull, noModel);
            },
            error: (e) =>  { console.error('Error onAddressSubmit!', e);
          },                           
        });
    }

    else if ( this.locRegister == true){

        let newLoc: any = this.addressForm.value;
        let action = ''
        const thisObuser = this.infoWinApi.obuser;
        const apiData = {
            eventData : newLoc,
            actionAPI : action,
            userName : thisObuser
      };

        this.infoWinApi.locRegister(apiData).subscribe({

          next: (response:any) => { 

            let noModel = false;
            let resNull  = true;
            this.responseFunc(response, resNull, noModel);
            this.popupLoc();
          },
          error: (e) =>  { console.error('Error onAddressSubmit!', e);
        },                           
      });
    }
  }


  onEventSubmit(): void {

    if(this.eventUpdate == true) {

      let newEvent: any = this.eventForm.value;      
      localStorage.setItem("iconSaved", this.fileName);
      let action = "updateEV";
      const thisObuser = this.infoWinApi.obuser;
      const apiData = {
          eventData :  newEvent,
          actionAPI : action,
          userName : thisObuser
      };
    
      this.infoWinApi.evRegister(apiData).subscribe({

          next: (response:any) => {

            let noModel = false;
            let resNull  = false;
            this.responseFunc(response, resNull, noModel);          
            this.popupEV();
          },
          error: (e) =>  { console.error('Error onEventSubmit!', e);
          this.router.navigateByUrl('/event-register');
        },                           
      });
    }
    
    else if (this.eventDelete == true){

      let newEvent: any = this.eventForm.value;
      localStorage.setItem("iconSaved", this.fileName);
      let action = "deleteEV";
      const thisObuser = this.infoWinApi.obuser;
      const apiData = {
          eventData : newEvent,
          actionAPI : action,
          userName : thisObuser
      };

      this.infoWinApi.evRegister(apiData).subscribe({

            next: (response:any) => { 
    
            let noModel = false;
            let resNull  = false;
            this.responseFunc(response, resNull, noModel);        
          },
            error: (e) =>  { console.error('Error onEventSubmit!', e);
            this.router.navigateByUrl('/event-register');
          },                           
        });
    }

    else if (this.eventRegister == true){

      let newEvent: any = this.eventForm.value;
      localStorage.setItem("iconSaved", this.fileName);
      let action = "" ;
      const thisObuser = this.infoWinApi.obuser;
      const apiData = {
          eventData : newEvent,
          actionAPI : action,
          userName : thisObuser
      };

      this.infoWinApi.evRegister(apiData).subscribe({

            next: (response:any) => { 
    
            let noModel = false;
            let resNull  = false;
            this.responseFunc(response, resNull, noModel);
            this.popupEV();
            },
            error: (e) =>  { console.error('Error onEventSubmit!', e);
            this.router.navigateByUrl('/event-register');
            },                           
        });
      }
  }


  updateLoc(): void {
  this.locUpdate = true;
  }

  delLoc(): void {

  this.locDelete = true;
  }

  regLoc(): void {
  this.locRegister = true;
  }

  updateEV(): void {
  this.eventUpdate = true;
  }

  deleteEV(): void {
  this.eventDelete = true;
  }

  regEV(): void {
  this.eventRegister = true;
  }


  private eventLocForm(resEvent:any, resLoc:any){

    if (resEvent == null){

      this.addressForm.patchValue({
          address : resLoc['address'],
          city: resLoc['city'], 
          state: resLoc['state'], 
          postalCode: resLoc['postal_code'], 
          country: resLoc['country'], 
      });
    }

    else{

      let resType;
      let resMode;

      if (resEvent['eventT'] == 'Party'){

        resType = this.allEventType[0];        
      }
      else if (resEvent['eventT'] == 'Sporting'){

        resType = this.allEventType[1];
      }
      else if (resEvent['eventT'] == 'Ceremony'){

        resType = this.allEventType[2];
      }
      else if (resEvent['eventT'] == 'Conference'){

        resType = this.allEventType[3];
      }
      else if (resEvent['eventT'] == 'Concert'){

        resType = this.allEventType[4];
      }

      if (resEvent['modeS'] == 'True'){

        resMode = true;        
      }
      else{
        
        resMode = false;        
      }

      let newStart = new Date(resEvent['start_time']);
      let newEnd =  new Date(resEvent['end_time']);
      this.startTime = newStart;
      this.endTime = newEnd;

      this.eventForm.patchValue({
          eventType: resType,
          eventNote: resEvent['eventN'],
          eventSpot: resEvent['eventSpot'],
          
          eventStart: newStart,
          eventEnd: newEnd,
          eventFee: resEvent['doPrice'], 
          eventMode: resMode, 
          eventAudience: resEvent['joinerId'],
          eventIconFile: resEvent['iconimg'],
      });

      this.addressForm.patchValue({
          address : resLoc['address'],
          city: resLoc['city'], 
          state: resLoc['state'], 
          postalCode: resLoc['postal_code'], 
          country: resLoc['country'], 
      });
    }
  }


  private responseFunc(responsef:any,resNull:boolean, noModel:boolean):void { 

      this.pmarkzonea = responsef['markzone'];
      this.pzonea = responsef['zone'];                          
      this.piza = responsef['iz'];
      this.devent = responsef['devent'];    
      this.deleteF = responsef['deleteF'];   
      this.updateF = responsef['updateF'];   
      preMap(this.pzonea,this.pmarkzonea,this.piza,this.infoWinApi.mapKey,this.infoWinApi.ivArg);

      if (noModel != true){ 
        if (resNull == true){
              this.eventLocForm(null,responsef['locoto']);  
            }
            else{
              this.eventLocForm(responsef['event'],responsef['locoto']);
            }
      }
      else{        
        this.eventLocForm(null,responsef['locoto']);  
      }
      
  }


  locateme(){

    locateMe();  
  }


  
  onFileChange(event:any) {

    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.fileName = file.name;
      this.formData.append("image", file, file.name);
    }
  }
  
  onSelectionChange(event:any){
    
    if (event.target.checked){

      this.eventForm.setValue({
        eventMode: true
      });
    }
    else{
      this.eventForm.setValue({
        eventMode: false
      });
    }
  }

  popupLoc(){

    window.alert("Pls Check your location appear on the map center and Location/Event should be paired");
  }

  popupEV(){

    window.alert("If your ICON not appeared on the map, Pls contact support@sposync.com");
  }  


}