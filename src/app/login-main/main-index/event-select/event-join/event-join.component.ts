import { Component, OnInit, ViewChild, ElementRef,} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../../../../services/api-data.service'; 
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';


declare const signalling:any;
declare const obuFunc:any;
declare const myFuncfj:any;
declare const turnonv:any;
declare const turnona:any;
declare const fullscreen:any;
declare const rsttButton:any;
declare const stpButton:any;
declare const dnButton:any;
declare const call:any;
declare const hangup:any;
declare const sendData:any;
declare const updateStatusSource:any;
declare const returnLocalVideo:any;
declare const returnRemoteVideo:any;
declare const returnRemoteImage:any;
declare const returnRemoteAudio:any;
declare const returnMSG:any;


@Component({
  selector: 'app-event-join',
  templateUrl: './event-join.component.html',
  styleUrls: ['./event-join.component.css']
})


export class EventJoinComponent implements OnInit {


    privateRForm: FormGroup; 
    poste : string;
    postn : string;
    startTime : Date;
    endTime : Date;
    messengerSend: string;
    statusRef: string ;
    sourceRef: string ;
    localStream: any;
    loginUser:string;	
    targetUser:string;	
    roomname: any;
    myname :string;	
    vturnid:string;	
    vturnpwd :string;	
    vturnidIV :string;	
    vturnpwdIV:string;	

    constructor( private infoWinApi : ApiDataService, private route : ActivatedRoute, private router : Router, private FB : FormBuilder, ){
    }
    
    @ViewChild('switchp') switchp: ElementRef;
    @ViewChild('switchv') switchv: ElementRef;
    @ViewChild('switcha') switcha: ElementRef;
    @ViewChild('difference5') difference5: ElementRef;
    @ViewChild('difference6') difference6: ElementRef;

    @ViewChild('localVideo') localVideo: ElementRef;
    @ViewChild('callButton') callButton: ElementRef;
    @ViewChild('hangupButton') hangupButton: ElementRef;
    @ViewChild('remoteVideo') remoteVideo: ElementRef;
    @ViewChild('remoteImage') remoteImage: ElementRef;
    @ViewChild('remoteAudio') remoteAudio: ElementRef;
    @ViewChild('rdiffRecord') rdiffRecord: ElementRef;
    @ViewChild('sendButton') sendButton: ElementRef;
    @ViewChild('dataChannelSend') dataChannelSend: ElementRef;
    @ViewChild('dataChannelReceive') dataChannelReceive: ElementRef;


    ngOnInit(): void {          

        //this.infoWinApi.loadScript('../assets/js/tindexcopy2mv.js');
        this.infoWinApi.loadScript('../assets/js/initMedia.js');

        this.route.params.subscribe((param : any) => {

          this.loginUser = this.infoWinApi.obuser;	
          this.targetUser = param['callee'];
          this.roomname = param['roomId'];
          this.vturnid  = param['pwdCallO'];
          this.vturnidIV  = param['pwdCallOIV'];
          this.vturnpwd = param['pwdCallT'];
          this.vturnpwdIV = param['pwdCallTIV'];
          this.poste = param['statTime'];
          this.postn = param['statNote'];
          signalling(this.loginUser,this.targetUser,this.roomname,this.vturnid,this.vturnidIV,this.vturnpwd,this.vturnpwdIV, null);
        });

        let start = new Date();
        let end  = new Date();

        this.privateRForm = this.FB.group({  
            eventMode: [false, [Validators.required]],
            eventStart: [formatDate(start, 'yyyy-MM-dd hh:mm:ssZZZZZ', 'en_US'), [Validators.required]],
            eventEnd: [formatDate(end, 'yyyy-MM-dd hh:mm:ssZZZZZ', 'en_US'), [Validators.required]],
            eventNote: ['', [Validators.required]],
        });

          const updateDom = new Observable((observer) => {            
            
            let position = updateStatusSource();
            console.log('STATUS @ OBSERVABLE ', position);

            if (position == "2" ){

              observer.next(position);
            }

            else if ( position == "3" || position == "4"){

              observer.next(position);
            }
            
            else if ( position == "5" || position == "7"){

              this.remoteVideo.nativeElement.srcObject = returnRemoteVideo();
              observer.next(position);
            }

            else if ( position == "6" ){

              this.remoteImage.nativeElement.setAttribute('src', returnRemoteImage());
              this.remoteAudio.nativeElement.src = URL.createObjectURL(returnRemoteAudio());
              observer.next(position);
            }

            else if (position == "8"){

              this.rdiffRecord.nativeElement.style.display === 'inline';
              observer.next(position);
            }

            else if (position == "14"){

              this.rdiffRecord.nativeElement.style.display === 'none';
              observer.next(position);
            }

            else if (position == "9"){

              this.dataChannelSend.nativeElement.disabled = false;
              this.dataChannelReceive.nativeElement.disabled = false;
              this.sendButton.nativeElement.disabled = false;
              observer.next(position);
            }

            else if (position == "10"){

              this.dataChannelSend.nativeElement.disabled = true;
              this.dataChannelReceive.nativeElement.disabled = true;
              this.sendButton.nativeElement.disabled = true;
              observer.next(position);
            }

            else if (position == "12" || position == "13" ){

              let { msgUser, msgContent} = returnMSG();
              this.dataChannelReceive.nativeElement.value += msgUser +': '+ msgContent;
              observer.next(position);
            }

            else if (position == "31"){

              this.remoteVideo.nativeElement.srcObject = returnRemoteVideo();
              observer.next(position);
            }

            else if (position == "32"){

              this.localVideo.nativeElement.srcObject = returnLocalVideo();
              observer.next(position);
            }

            return {
              unsubscribe() { }
            };
          });

          updateDom.subscribe({
            next(position) {
              console.log('Current Position: ', position);
            },
            error(msg) {
              console.log('Error Getting Location: ', msg);
            }
          });

          //this.router.navigate(['/event-join', this.targetUser, this.roomname, this.vturnid, this.vturnidIV, this.vturnpwd, this.vturnpwdIV, this.poste, this.postn]);
    }


    ngAfterViewInit(){     
      
      this.callButton.nativeElement.disabled = false; 
      this.hangupButton.nativeElement.disabled = true; 
    }


    onPrivateRequestSubmit(): void{

      let newPRequest = this.privateRForm.value;
      const thisObuser = this.infoWinApi.obuser;
      const apiData = {
          eventData :  newPRequest,
          selfposisum : this.roomname,
          userName : thisObuser
        };
      this.infoWinApi.requestPEvent(apiData).subscribe({

        next: (response:any) => {        
            console.log("Private Event RESPONSE", response);
        },
        error: (e) =>  console.error('Error Private Event Request!', e),
      });        
    }

    disconnect(){

      hangup();

      const thisObuser = this.infoWinApi.obuser;
      const apiData = {  
          userName : thisObuser,
        };
      this.infoWinApi.disconnectEvent(apiData).subscribe({

        next: (response:any) => {
              console.log("DISCONNECT RESPONSE", response);
        },
        error: (e) =>  console.error('Error Disconnect Event Request!', e),
      });        

      this.dataChannelSend.nativeElement.disabled = true;
      this.dataChannelReceive.nativeElement.disabled = true;
      this.sendButton.nativeElement.disabled = true;
      obuFunc();
    }


    switchMonitor(){

        myFuncfj();
    }


    videoMute(){

      turnonv();

      if ( this.localStream.getVideoTracks()[0].enabled == true){
        this.localStream.getVideoTracks()[0].enabled = false;
      }
      else{
        this.localStream.getVideoTracks()[0].enabled = true;
        this.localVideo.nativeElement.srcObject = returnLocalVideo();
      }        
    }


    audioMute(){

      turnona();

      if ( this.localStream.getAudioTracks()[0].enabled == true){

        this.localStream.getAudioTracks()[0].enabled = false;       
      }
      else{
        this.localStream.getAudioTracks()[0].enabled = true;        
      }
    }


    fullscreen(event:any){

      fullscreen(event);
    }


    rsttButton(){

      rsttButton();
    }


    stpButton(){

      stpButton();
    }


    dnButton(){

      dnButton();
    }


    callJS(){

      call(this.targetUser, this.infoWinApi.obuser,this.roomname);
    }
  

    dataSend(){

      sendData(this.messengerSend);
      this.dataChannelSend.nativeElement.value = this.messengerSend;
    }

  }

