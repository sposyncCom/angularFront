import { Component, OnInit, ViewChild, ElementRef, Inject,Renderer2, } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDataService } from '../../../services/api-data.service'; 
import { FormGroup, } from '@angular/forms'; 
import { Observable } from 'rxjs';


declare const signalling:any;
declare const turnonv:any;
declare const turnona:any;
declare const stpButton:any;
declare const dnButton:any;
declare const hangup:any;
declare const sendData:any;
declare const updateStatusSource:any;
declare const switchr :any;
declare const callM :any;
declare const myFunc :any;
declare const startCapture :any;
declare const startCaptureAudio :any;
declare const alButton :any;
declare const sttButton :any;
declare const returnLocalVideo:any;
declare const returnLocalVideoInit:any;
declare const updateStatusSourceInit:any;
declare const returnMSG:any;
declare const returnJoinedNumber:any;


@Component({
  selector: 'app-event-host',
  templateUrl: './event-host.component.html',
  styleUrls: ['./event-host.component.css']
})


export class EventHostComponent implements OnInit {


    privateRForm: FormGroup; 
    poste : string;
    postn : string;
    startTime : Date;
    endTime : Date;
    roomname: any;
    messengerSend: string;
    statusRef: string ;
    sourceRef: string ;
    vconstraints: any;
    aconstraints = { echoCancellation: true, noiseSuppression: true } ;
    localStream:any;
    loginUser:string;	
    targetUser:string;	
    myname :string;	
    vturnid:string;	
    vturnpwd :string;	
    vturnidIV :string;	
    vturnpwdIV:string;	

    constructor( private infoWinApi : ApiDataService, private renderer: Renderer2, private router: Router, private elRef: ElementRef ){
    }


    @ViewChild('switchp') switchp: ElementRef;
    @ViewChild('switchv') switchv: ElementRef;
    @ViewChild('switcha') switcha: ElementRef;
    @ViewChild('difference1') difference1: ElementRef;
    @ViewChild('difference2') difference2: ElementRef;
    @ViewChild('localVideo') localVideo: ElementRef;
    @ViewChild('callButton1') callButton1: ElementRef;
    @ViewChild('hangupButton') hangupButton: ElementRef;
    @ViewChild('remoteVideo') remoteVideo: ElementRef;
    @ViewChild('remoteImage') remoteImage: ElementRef;
    @ViewChild('remoteAudio') remoteAudio: ElementRef;
    @ViewChild('rdiffRecord') rdiffRecord: ElementRef;
    @ViewChild('sendButton') sendButton: ElementRef;
    @ViewChild('dataChannelSend') dataChannelSend: ElementRef;
    @ViewChild('dataChannelReceive') dataChannelReceive: ElementRef;
    @ViewChild('callMedia') callMedia: ElementRef;
    @ViewChild('diffRecord') diffRecord: ElementRef;
    @ViewChild('buttonn') buttonnt: ElementRef;
    @ViewChild('selectt') selecttt: ElementRef;
    @ViewChild('diff2src') diff2src: ElementRef;
    @ViewChild('vpbutton') vpbutton: ElementRef;
    @ViewChild('tdjoin') tdjoin: ElementRef;
    @ViewChild('tdpeo') tdpeo: ElementRef;
    @ViewChild('shareAduio') shareAduio: ElementRef;


    ngOnInit(): void {

        //this.infoWinApi.loadScript('../assets/js/tindexcopy2mv.js');
        this.infoWinApi.loadScript('../assets/js/initMedia.js');

        const thisObuser = this.infoWinApi.obuser;			

        this.infoWinApi.hostEvent(thisObuser).subscribe(
          {
            next: (response:any) => {     
            
              this.loginUser =  this.infoWinApi.obuser;	
              this.targetUser =  response['strlesser_id'];
              this.myname = response['strlesser_id'];
              this.vturnid = response['turnturn'];
              this.vturnidIV  = response['turnturnIV'];
              this.vturnpwd = response['turnaround'];
              this.vturnpwdIV = response['turnaroundIV'];
            
              signalling(this.loginUser,this.targetUser,null,this.vturnid,this.vturnidIV,this.vturnpwd,this.vturnpwdIV, this.myname);            
            },
            error: (e) =>  console.error('Error HOST EVENT!', e),
          });        

            const updateDom = new Observable((observer) => {            
 
              let position1 = updateStatusSource();
              let position2 = updateStatusSourceInit();
              let position = position1||position2;              

              if ( position == "1"){

                this.hangupButton.nativeElement.disabled = true; 
                this.localVideo.nativeElement.srcObject = returnLocalVideo();
                observer.next(position);
              }
              
              else if ( position == "5" || position == "7"){

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

              else if (position == "21"){

                this.localStream =  returnLocalVideoInit();
                this.localVideo.nativeElement.srcObject = returnLocalVideoInit();
                let  {tdjoin,tdpeo} = returnJoinedNumber();
                this.tdjoin.nativeElement.innerHTML =  "<li>"+tdjoin+"</li>";
                this.tdpeo.nativeElement.innerHTML = tdpeo;
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

            //this.router.navigateByUrl('/event-host');   
    
      }


      ngAfterViewInit(){
      
        this.hangupButton.nativeElement.disabled = true;           
      }


      disconnect(){

        hangup();
        
        this.hangupButton.nativeElement.disabled = true; 
        this.dataChannelSend.nativeElement.disabled = true;
        this.dataChannelReceive.nativeElement.disabled = true;
        this.sendButton.nativeElement.disabled = true;      
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


      start(){

        sttButton();
      }


      stop(){

        stpButton();     
      }

      download(){

        dnButton();    
      }

      allowRecord(){

        alButton();
      }


      dataSend(){

        sendData(this.messengerSend);
        this.dataChannelSend.nativeElement.value = this.messengerSend;
      }


      recording (){

        switchr();
      }


      mediaReady(){

        callM();
      }


      videoChat(){

        myFunc();        
      }


      screenShare(){

      startCapture();    
      }


      mixAudio(){

        startCaptureAudio(); 
      }

  }