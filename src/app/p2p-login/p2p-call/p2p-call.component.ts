import { Component, OnInit, ViewChild, ElementRef, Inject,Renderer2, } from '@angular/core';
import { Router,} from '@angular/router';
import { ApiDataService } from '../../services/api-data.service'; 
import { FormGroup, } from '@angular/forms'; 
import { Observable } from 'rxjs';

declare const signallingM:any;
declare const obuFunc:any;
declare const turnonv:any;
declare const turnona:any;
declare const fullscreen:any;
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
declare const returnRemoteVideo:any;
declare const returnRemoteImage:any;
declare const returnRemoteAudio:any;
declare const returnMSG:any;
declare const callLoop:any;
declare const sendFile:any;
declare const lSelect:any;


@Component({
  selector: 'app-p2p-call',
  templateUrl: './p2p-call.component.html',
  styleUrls: ['./p2p-call.component.css']
})

export class P2pCallComponent implements OnInit {

  obuser:string;
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
  callButton:boolean;
  varslug : string = null;
  loginUser: string ;
  calledUser: string ;
  callUser:string;	
  vturnid:string;	
  vturnpwd :string;	
  vturnidIV :string;	
  vturnpwdIV:string;	

  constructor( private infoWinApi : ApiDataService, private router : Router, ){
  }

  @ViewChild('switchp') switchp: ElementRef;
  @ViewChild('switchv') switchv: ElementRef;
  @ViewChild('switcha') switcha: ElementRef;
  @ViewChild('difference1') difference1: ElementRef;
  @ViewChild('difference2') difference2: ElementRef;
  @ViewChild('localVideo') localVideo: ElementRef;
  @ViewChild('hangupButton') hangupButton: ElementRef;
  @ViewChild('remoteVideo') remoteVideo: ElementRef;
  @ViewChild('remoteImage') remoteImage: ElementRef;
  @ViewChild('remoteAudio') remoteAudio: ElementRef;
  @ViewChild('rdiffRecord') rdiffRecord: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;
  @ViewChild('dataChannelComb') dataChannelComb: ElementRef;
  @ViewChild('callMedia') callMedia: ElementRef;
  @ViewChild('diffRecord') diffRecord: ElementRef;
  @ViewChild('selectt') selecttt: ElementRef;
  @ViewChild('vpbutton') vpbutton: ElementRef;
  @ViewChild('tdjoin') tdjoin: ElementRef;
  @ViewChild('tdpeo') tdpeo: ElementRef;
  @ViewChild('shareAduio') shareAduio: ElementRef;


  ngOnInit(): void {      

      //this.infoWinApi.loadScript('../assets/js/mFit.js');
      const thisObuser = this.infoWinApi.obuser;			
      this.obuser = thisObuser;
      this.callButton = true;

      this.infoWinApi.p2pCallGet(thisObuser).subscribe({

          next: (response:any) => {
        
            this.callUser = response['rUser'];
            this.vturnid = response['turnturn'];
            this.vturnidIV  = response['turnturnIV'];
            this.vturnpwd = response['turnaround'];
            this.vturnpwdIV = response['turnaroundIV'];
            
            signallingM(this.callUser,this.vturnid,this.vturnidIV,this.vturnpwd,this.vturnpwdIV);
            
          },
          error: (e) =>  console.error('Error HOST EVENT!', e),
        });        



          const updateDom = new Observable((observer) => {            
          
            let position = updateStatusSource()||updateStatusSourceInit();
            
            if ( position == "1"|| position == "3"){ 

              this.hangupButton.nativeElement.disabled = true; 
              this.localVideo.nativeElement.srcObject = returnLocalVideo();
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

            else if (position == "9"){

              this.dataChannelComb.nativeElement.disabled = false;
              this.sendButton.nativeElement.disabled = false;
              observer.next(position);
            }

            else if (position == "10"){

              this.dataChannelComb.nativeElement.disabled =  true;
              this.sendButton.nativeElement.disabled = true;
              observer.next(position);
            }

            else if (position == "12" || position == "13" ){

              let { msgUser, msgContent} = returnMSG();
              this.dataChannelComb.nativeElement.value += msgUser +': '+ msgContent;
              observer.next(position);
            }

            else if (position == "21"){

              this.localVideo.nativeElement.srcObject = returnLocalVideoInit();
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

            this.router.navigateByUrl('/p2p-call'); 
  }


  ngAfterViewInit(){

    this.callButton = true;
    this.callMedia.nativeElement.disabled = false;
  }


  initConnect(){

    let dCallList = prompt("Please enter Callee IDs ", "");    
    this.callClick(dCallList);
  }

  callClick(varslug:string){

    const thisObuser = this.infoWinApi.obuser;
    const apiData = {
        eventData :  varslug,
        userName : thisObuser
      };

    this.infoWinApi.p2pCallPost(apiData).subscribe({

      next: (response:any) => {  
    
        this.loginUser = response['requestuser'];
        this.calledUser = response['strlesser_id'];
        this.roomname = response['roomName'];
      },
      error: (e) =>  console.error('Error eventRegiserKwargs!', e),
    });        

    this.callButton = false;
  }


  loopCall(){

    callLoop(this.loginUser, this.calledUser, this.roomname);
    this.callButton = true;
  }


  disconnect(){

    hangup();
    this.callButton = true;
    obuFunc();
    this.router.navigateByUrl('/p2p-call');      
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
    this.dataChannelComb.nativeElement.value = this.messengerSend;
  }


  recording (){

    switchr();
  }


  mediaReady(){

    callM();
  }

  switchMonitor(){

    myFunc();
  }

  screenShare(){

    startCapture();
  }

  mixAudio(){

    startCaptureAudio(); 
  }


  fileSend(){

    sendFile();
  }


  langSelect(){

    lSelect();
  }


  fullscreen(event:any){

    fullscreen(event);
  }

}

