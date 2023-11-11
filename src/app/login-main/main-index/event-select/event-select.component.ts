import { Component, OnInit, } from '@angular/core';
import { ApiDataService } from '../../../services/api-data.service';   
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
import { Router,} from '@angular/router';


declare const initMap:any;
declare const preMap:any;


@Component({
  selector: 'app-event-select',
  templateUrl: './event-select.component.html',
  styleUrls: ['./event-select.component.css']
})


export class EventSelectComponent implements OnInit {


	searchEv :any ={
		evType: [] ,
		evNotes: '' ,
	};

	selectEv = {
		evOwner: '',
		evFee: '',
		eventID :''
	};

 
	mapKey :any;
	tokenAPI: string ='';
	token_expires: Date = new Date(0); 
	errors: any = [];
	varslug : string = null;
	noteVar : string = null;
	searchForm: FormGroup;	
	isValidFormSubmitted = false;
	allEventType = [
	'Party','Sporting','Ceremony','Conference','Concert',  
	]
	private pmarkzonea :any ;
	private pzonea : any;                          
	private piza : any;


	constructor( private infoWinApi : ApiDataService, private router : Router, private FB : FormBuilder, ){
	}


  	ngOnInit(){

			this.searchForm = this.FB.group({
					eventType:['', [Validators.required]],
					eventNote: ['', [Validators.required]],
					
				});

				const thisObuser = this.infoWinApi.obuser;			
			
				this.infoWinApi.infoGet(thisObuser).subscribe(
				  {
					  next: (response:any) => { 

						this.responseFunc(response,);
					  },
					  error: (e) =>  console.error('Error RegisterGet!', e),
				  });

				setTimeout(() => {
				
					if (this.infoWinApi.is_authenticated == true) {
						window.alert('Please Confirm Event Available and Fee on the bottom right and Submit - Select');
					}
					else {
						window.alert('Please Pick Event from map and Click its link - only NJ site available for now');
					}
				},1000);  	
	
	}

	onSearchSubmit() {

		let newSearch = this.searchForm.value;
		const thisObuser = this.infoWinApi.obuser;
		const apiData = {
			eventData :  newSearch,
			userName : thisObuser
	   	};
		this.infoWinApi.searchEvent(apiData).subscribe({

			next: (response:any) => { 				
				this.responseFunc(response,);                        
			},
			error: (e) =>  console.error('Error SearchGet!', e),
			});
		
		this.resetForm(this.searchForm);
	}

	
	resetForm(searchForm: FormGroup) {
		searchForm.reset();
	}


	selectClick(varslug:string){

		const thisObuser = this.infoWinApi.obuser;
		const apiData = {
				eventData :  varslug,
				userName : thisObuser
		  };
		this.infoWinApi.selectEvent(apiData).subscribe({

			next: (response:any) => {
					
				let callee = response['strlesser_id'];
				let roomId = response['selfposisum'];
				let pwdCallO = response['turnturn'];
				let pwdCallT =response['turnaround'];
				let pwdCallOIV = response['turnturnIV'];
				let pwdCallTIV =response['turnaroundIV'];
				let statTime = response['poste'];
				let statNote = response['postn'];
				this.router.navigate(['/event-join', callee, roomId, pwdCallO, pwdCallOIV, pwdCallT, pwdCallTIV, statTime, statNote]);				
			},
			error: (e) =>  console.error('Error eventRegiserKwargs!', e),
		});        
	}



  	private responseFunc(responsef:any,):void { 
		console.log(' FULL SCOPE response ', responsef,  );
		this.pmarkzonea = responsef['markzone'];
		this.pzonea = responsef['zone'];                          
		this.piza = responsef['iz'];
		this.mapKey = responsef['mapKey'];  
		preMap(this.pzonea,this.pmarkzonea,this.piza,this.infoWinApi.mapKey,this.infoWinApi.ivArg);
	}

}