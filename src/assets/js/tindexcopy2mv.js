var _0x1b9678=_0x2d49;(function(_0x465475,_0x250dec){var _0x3d3948=_0x2d49,_0x4ea829=_0x465475();while(!![]){try{var _0x174311=-parseInt(_0x3d3948(0x1dc))/0x1+parseInt(_0x3d3948(0x1d0))/0x2+-parseInt(_0x3d3948(0x229))/0x3*(-parseInt(_0x3d3948(0x215))/0x4)+-parseInt(_0x3d3948(0x271))/0x5*(parseInt(_0x3d3948(0x230))/0x6)+-parseInt(_0x3d3948(0x24e))/0x7+parseInt(_0x3d3948(0x228))/0x8*(-parseInt(_0x3d3948(0x274))/0x9)+parseInt(_0x3d3948(0x22d))/0xa*(parseInt(_0x3d3948(0x27e))/0xb);if(_0x174311===_0x250dec)break;else _0x4ea829['push'](_0x4ea829['shift']());}catch(_0x59b77b){_0x4ea829['push'](_0x4ea829['shift']());}}}(_0x423d,0x645cf));var localStream,localPeerConnection,remoteStream,remotePeerConnection=[],localVideo,remoteVideo,remoteImage,remoteAudio,desti=document[_0x1b9678(0x1f9)](_0x1b9678(0x206)),destiv=document['getElementById'](_0x1b9678(0x212)),vendorid=document[_0x1b9678(0x1f9)](_0x1b9678(0x275)),myname,xo1,xt2,xo5,xt6,rdiffRecord=document['getElementById']('rdiffRecord'),greadyS,sendChannel,receiveChannel=[],aconstrf=!![],recordedChunks=[],RmediaRecorder,vRelay,vflagsender=![],aflagsender=![],roomnamev,glolessee,connectedUser,isInit=![],connection,socketF=io(),timera,timerv,callButton,sendButton=document[_0x1b9678(0x1f9)](_0x1b9678(0x1cf)),switchp=document[_0x1b9678(0x1f9)](_0x1b9678(0x20d)),switchv=document[_0x1b9678(0x1f9)](_0x1b9678(0x208)),switcha=document[_0x1b9678(0x1f9)](_0x1b9678(0x219)),switcho=document[_0x1b9678(0x1f9)](_0x1b9678(0x217)),hangupButton,switchq=document[_0x1b9678(0x1f9)](_0x1b9678(0x238)),externalStatus,ablob,arrayV,msgUser,msgContent,tdjoin,tdpeo,gloscsh=![],gloscshAudio=![],multiu=[],iti=0x0,multiupa=[],lgnInput,ws_scheme,servers,comName,vconstraints,aconstraints,recvWebsocket=[],readyState=[],reITI=[];function decryptJS(_0x5d7ab3,_0x72f231){var _0x2b33b4=_0x1b9678,_0x82f360=_0x5d7ab3,_0x5f520b=CryptoJS['enc']['Base64']['parse'](_0x72f231),_0xeaf72a=_0x2b33b4(0x201);_0xeaf72a=CryptoJS[_0x2b33b4(0x241)][_0x2b33b4(0x255)][_0x2b33b4(0x216)](_0xeaf72a);var _0x1de58b=CryptoJS[_0x2b33b4(0x262)][_0x2b33b4(0x281)](_0x82f360,_0xeaf72a,{'iv':_0x5f520b,'mode':CryptoJS['mode'][_0x2b33b4(0x287)]});return _0x1de58b=_0x1de58b[_0x2b33b4(0x1dd)](CryptoJS[_0x2b33b4(0x241)][_0x2b33b4(0x255)]),_0x1de58b;}function signalling(_0x3d7409,_0x40e8cb,_0x3cd7be,_0x382da6,_0x200dde,_0xcf7ce3,_0x4027cf,_0x412e0c){var _0x24eeeb=_0x1b9678;connectedUser=_0x40e8cb,roomnamev=_0x3cd7be,myname=_0x412e0c;var _0x5857ef=window[_0x24eeeb(0x1cd)][_0x24eeeb(0x24b)]==_0x24eeeb(0x237)?_0x24eeeb(0x27f):'ws';comName=_0x3d7409;var _0xb6cb84=new ReconnectingWebSocket(_0x5857ef+_0x24eeeb(0x288)+window[_0x24eeeb(0x1cd)]['host']+_0x24eeeb(0x24d)+comName+'/');aconstraints={'echoCancellation':!![],'noiseSuppression':!![]};let _0x16a12=_0x24eeeb(0x236),_0x5960c6=_0x24eeeb(0x268);var _0x188a07={'iceServers':[{'urls':'stun:stun.l.google.com:19302'},{'urls':_0x24eeeb(0x26e)},{'urls':_0x24eeeb(0x1f1),'username':_0x16a12,'credential':_0x5960c6},{'urls':_0x24eeeb(0x260),'username':_0x16a12,'credential':_0x5960c6},{'urls':_0x24eeeb(0x25b),'username':_0x16a12,'credential':_0x5960c6}]};_0xb6cb84[_0x24eeeb(0x1fa)]=function(_0x44b766){var _0x41231e=_0x24eeeb,_0x1c251f=JSON[_0x41231e(0x216)](_0x44b766[_0x41231e(0x1ec)]);console['log'](_0x41231e(0x223),_0x1c251f);if(_0x1c251f['type']==_0x41231e(0x1e5)){var _0xa3c620=new RTCIceCandidate(_0x1c251f[_0x41231e(0x269)]);isInit?localPeerConnection['addIceCandidate'](_0xa3c620):(glolessee=_0x1c251f[_0x41231e(0x258)],remotePeerConnection[iti]['onicecandidate']=handleIceCandidate,remotePeerConnection[iti][_0x41231e(0x24f)](_0xa3c620));}if(_0x1c251f['type']=='offer'&&!isInit){glolessee=_0x1c251f[_0x41231e(0x258)];if(multiu['length']==0x0)iti=0x0,multiu[_0x41231e(0x257)](glolessee),temp_li={'mname':glolessee,'citi':iti},multiupa[_0x41231e(0x257)](temp_li);else for(_0x412f44=0x0;_0x412f44<multiu[_0x41231e(0x23d)];_0x412f44++){!multiu[_0x41231e(0x1cc)](glolessee)&&(iti+=0x1,multiu[_0x41231e(0x257)](glolessee),temp_li={'mname':glolessee,'citi':iti},multiupa[_0x41231e(0x257)](temp_li));}setTimeout(()=>{var _0x385de8=_0x41231e;recvWebsocket[iti]=new ReconnectingWebSocket(_0x5857ef+'://'+window[_0x385de8(0x1cd)][_0x385de8(0x256)]+'/ws/'+_0x1c251f[_0x385de8(0x258)]+'/');},0xfa0),tdjoin=multiu,tdpeo=multiu[_0x41231e(0x23d)],externalStatus='21',document['getElementById'](_0x41231e(0x284))[_0x41231e(0x23b)]='<li>'+multiu+_0x41231e(0x1c7),document[_0x41231e(0x1f9)](_0x41231e(0x1eb))[_0x41231e(0x23b)]=multiu[_0x41231e(0x23d)];if(navigator[_0x41231e(0x20b)])RTCPeerConnection=webkitRTCPeerConnection;else navigator[_0x41231e(0x1db)]&&(RTCPeerConnection=mozRTCPeerConnection,RTCSessionDescription=mozRTCSessionDescription,RTCIceCandidate=mozRTCIceCandidate);remotePeerConnection[iti]=new RTCPeerConnection(_0x188a07),remotePeerConnection[iti]['ondatachannel']=gotReceiveChannel,remotePeerConnection[iti][_0x41231e(0x270)](_0x1c251f[_0x41231e(0x269)]),navigator[_0x41231e(0x1f2)][_0x41231e(0x286)]=navigator[_0x41231e(0x1f2)]['getUserMedia']||navigator[_0x41231e(0x20b)]||navigator[_0x41231e(0x1db)];gloscsh?startCaptureT():(selecttt[_0x41231e(0x245)]?vconstraints={'video':{'deviceId':{'exact':selecttt['value']}},'audio':aconstraints}:vconstraints={'video':!![],'audio':aconstraints},navigator[_0x41231e(0x1f2)][_0x41231e(0x286)](vconstraints)[_0x41231e(0x1f3)](function(_0x3cda46){var _0x21647d=_0x41231e;localVideo['srcObject']=_0x3cda46,localStream=_0x3cda46,callButton[_0x21647d(0x1c6)]=![],externalStatus='1';})[_0x41231e(0x1ca)](function(_0x594a63){var _0x3f9e82=_0x41231e;log(_0x3f9e82(0x1f0)+_0x594a63);}));roomnamev=_0x1c251f[_0x41231e(0x1c9)];if(navigator[_0x41231e(0x20b)])remotePeerConnection[iti][_0x41231e(0x207)](localStream),remotePeerConnection[iti]['onaddstream']=gotRemoteStream;else navigator[_0x41231e(0x1db)]&&(localStream[_0x41231e(0x272)]()[_0x41231e(0x20c)](function(_0x37ab18){var _0x3049f5=_0x41231e;remotePeerConnection[iti][_0x3049f5(0x220)](_0x37ab18,localStream);}),remotePeerConnection[iti][_0x41231e(0x1f4)]=gotRemoteStream);remotePeerConnection[iti][_0x41231e(0x242)]()['then'](function(_0x43ea34){var _0x29e19a=_0x41231e;return remotePeerConnection[iti][_0x29e19a(0x22f)](_0x43ea34);})[_0x41231e(0x1f3)](function(){var _0x14d7d9=_0x41231e,_0x43d609=remotePeerConnection[iti][_0x14d7d9(0x26f)];sendB(iti,{'type':_0x14d7d9(0x1d7),'name':comName,'answer':_0x43d609,'sposisum':''});},function(_0x2b320e){log('oops...error\x20NO\x20ANSWER');});if(readyState[iti]!=='open'){sendB(iti,{'type':_0x41231e(0x21c),'name':comName});var _0x2a0eb2=[],_0x3053c4=[];let _0x372270=localStream[_0x41231e(0x210)]()[0x0],_0x29d008=localStream['getAudioTracks']()[0x0];_0x2a0eb2[iti]=remotePeerConnection[iti]['getSenders']()[_0x41231e(0x277)](function(_0x50ef64){var _0x36c14e=_0x41231e;return _0x50ef64[_0x36c14e(0x22b)][_0x36c14e(0x1ed)]==_0x372270[_0x36c14e(0x1ed)];}),_0x3053c4[iti]=remotePeerConnection[iti][_0x41231e(0x213)]()[_0x41231e(0x277)](function(_0x892713){var _0x21a3ae=_0x41231e;return _0x892713['track'][_0x21a3ae(0x1ed)]==_0x29d008[_0x21a3ae(0x1ed)];}),_0x2a0eb2[iti][_0x41231e(0x200)](null),_0x3053c4[iti][_0x41231e(0x200)](null),clearInterval(timera),clearInterval(timerv),fmRelay(localStream,localVideo),reITI[_0x41231e(0x257)][iti];}else{if(navigator['webkitGetUserMedia'])remotePeerConnection[iti][_0x41231e(0x207)](localStream);else navigator[_0x41231e(0x1db)]&&localStream[_0x41231e(0x272)]()[_0x41231e(0x20c)](function(_0x1936d9){var _0x11dec1=_0x41231e;remotePeerConnection[iti][_0x11dec1(0x220)](_0x1936d9,localStream);});}}_0x1c251f[_0x41231e(0x231)]==_0x41231e(0x1d7)&&isInit&&localPeerConnection[_0x41231e(0x270)](_0x1c251f[_0x41231e(0x269)]);_0x1c251f[_0x41231e(0x231)]==_0x41231e(0x21c)&&isInit&&(vRelay=!![]);_0x1c251f[_0x41231e(0x231)]==_0x41231e(0x253)&&isInit&&(externalStatus='13',msgUser=_0x1c251f['name'],msgContent=_0x1c251f[_0x41231e(0x269)],document[_0x41231e(0x1f9)]('dataChannelReceive')[_0x41231e(0x245)]+=_0x1c251f['name']+':'+_0x1c251f[_0x41231e(0x269)]);if(_0x1c251f[_0x41231e(0x231)]=='stpRelay'&&!isInit)for(var _0x412f44=0x0;_0x412f44<multiu[_0x41231e(0x23d)];_0x412f44++){_0x1c251f['name']==multiu[_0x412f44]&&(multiu[_0x41231e(0x234)](_0x412f44,0x1),multiupa[_0x41231e(0x234)](_0x412f44,0x1));}};}function call(_0x2468b8,_0x1e888e,_0x56cb40){var _0x4e475c=_0x1b9678,_0x428af5=document[_0x4e475c(0x1f9)](_0x4e475c(0x240)),_0x52dbf3=document[_0x4e475c(0x1f9)]('hangupButton');localVideo=document[_0x4e475c(0x1f9)](_0x4e475c(0x21b)),_0xf30514=document[_0x4e475c(0x1f9)](_0x4e475c(0x27a)),_0x56dabf=document[_0x4e475c(0x1f9)](_0x4e475c(0x27c)),glolessee=_0x1e888e,connectedUser=_0x2468b8,roomnamev=_0x56cb40,isInit=!![],ws_scheme=window['location']['protocol']=='https:'?_0x4e475c(0x27f):'ws',setTimeout(()=>{var _0x9bd965=_0x4e475c;connection=new ReconnectingWebSocket(ws_scheme+_0x9bd965(0x288)+window[_0x9bd965(0x1cd)]['host']+'/ws/'+connectedUser+'/');},0xfa0),_0x428af5[_0x4e475c(0x1c6)]=!![],_0x52dbf3[_0x4e475c(0x1c6)]=![],externalStatus='2';if(navigator[_0x4e475c(0x20b)])RTCPeerConnection=webkitRTCPeerConnection;else navigator[_0x4e475c(0x1db)]&&(RTCPeerConnection=mozRTCPeerConnection,RTCSessionDescription=mozRTCSessionDescription,RTCIceCandidate=mozRTCIceCandidate);localPeerConnection=new RTCPeerConnection(servers),sendChannel=localPeerConnection[_0x4e475c(0x218)](_0x4e475c(0x20e),{'reliable':!![]}),sendChannel[_0x4e475c(0x246)]=handleSendChannelStateChange,sendChannel[_0x4e475c(0x1fa)]=handleMessage,sendChannel['onclose']=handleSendChannelStateChange,navigator['mediaDevices'][_0x4e475c(0x286)]=navigator[_0x4e475c(0x1f2)]['getUserMedia']||navigator[_0x4e475c(0x20b)]||navigator['mozGetUserMedia'],navigator[_0x4e475c(0x1f2)][_0x4e475c(0x286)]({'video':!![],'audio':aconstraints})['then'](function(_0xe5961f){var _0x19622c=_0x4e475c;localVideo[_0x19622c(0x20a)]=_0xe5961f,localStream=_0xe5961f,_0x428af5['disabled']=![],externalStatus='3';})[_0x4e475c(0x1ca)](function(_0x58ecd3){var _0x51ca16=_0x4e475c;log(_0x51ca16(0x1fe)+_0x58ecd3);});if(navigator['webkitGetUserMedia'])localPeerConnection[_0x4e475c(0x207)](localStream),_0xf30514[_0x4e475c(0x247)][_0x4e475c(0x1c8)]=_0x4e475c(0x244),localPeerConnection[_0x4e475c(0x23e)]=gotRemoteStream,externalStatus='4';else navigator[_0x4e475c(0x1db)]&&(localStream[_0x4e475c(0x272)]()['forEach'](function(_0x5b5884){localPeerConnection['addTrack'](_0x5b5884,localStream);}),_0xf30514[_0x4e475c(0x247)][_0x4e475c(0x1c8)]='none',localPeerConnection[_0x4e475c(0x1f4)]=gotRemoteStream,externalStatus='4');localPeerConnection[_0x4e475c(0x263)]({'iceRestart':![]})[_0x4e475c(0x1f3)](function(_0xa624ff){return localPeerConnection['setLocalDescription'](_0xa624ff);})[_0x4e475c(0x1f3)](function(){var _0x4cb232=_0x4e475c,_0x7043c4=localPeerConnection[_0x4cb232(0x26f)];send({'type':'offer','name':comName,'offer':_0x7043c4,'sposisum':roomnamev});})[_0x4e475c(0x1ca)](function(_0x2efb4e){}),localPeerConnection[_0x4e475c(0x1ee)]=handleIceCandidate;var _0xf30514=document[_0x4e475c(0x1f9)]('remoteImage'),_0x56dabf=document['getElementById'](_0x4e475c(0x27c));if(greadyS!==_0x4e475c(0x22c)||vRelay)externalStatus='6',_0xf30514['style']['display']='inline',socketF['on'](_0x4e475c(0x252),function(_0x5135a6){var _0x2e597b=_0x4e475c;log(_0x2e597b(0x273)+_0x5135a6[_0x2e597b(0x1ec)]);}),socketF[_0x4e475c(0x222)]('join',{'username':glolessee,'room':roomnamev}),socketF['on'](_0x4e475c(0x1de),function(_0x33df59){var _0x366f53=_0x4e475c;log(_0x366f53(0x273)+_0x33df59[_0x366f53(0x1ec)]);}),socketF['on']('voice',function(_0x5633d8){var _0x5a4b17=_0x4e475c;ablob=new Blob([_0x5633d8],{'type':_0x5a4b17(0x23f)}),_0x56dabf[_0x5a4b17(0x26a)]=URL[_0x5a4b17(0x1e7)](ablob);}),socketF['on'](_0x4e475c(0x261),function(_0xe4e02c){var _0x427792=_0x4e475c;_0xf30514[_0x427792(0x249)](_0x427792(0x26a),_0xe4e02c);});else{externalStatus='7';if(navigator[_0x4e475c(0x20b)])_0xf30514[_0x4e475c(0x247)][_0x4e475c(0x1c8)]=_0x4e475c(0x244),localPeerConnection[_0x4e475c(0x23e)]=gotRemoteStream;else navigator[_0x4e475c(0x1db)]&&(_0xf30514[_0x4e475c(0x247)][_0x4e475c(0x1c8)]=_0x4e475c(0x244),localPeerConnection[_0x4e475c(0x1f4)]=gotRemoteStream);}}function obuFunc(){var _0x4d13ef=_0x1b9678;if(isInit)send({'type':_0x4d13ef(0x1fb),'name':comName});else return;}function switchr(){var _0x4fa629=_0x1b9678,_0x5ec35b=document[_0x4fa629(0x1f9)]('diffRecord');if(_0x5ec35b[_0x4fa629(0x247)][_0x4fa629(0x1c8)]===_0x4fa629(0x244))_0x5ec35b[_0x4fa629(0x247)][_0x4fa629(0x1c8)]='inline';else _0x5ec35b[_0x4fa629(0x247)]['display']===_0x4fa629(0x1ce)&&(_0x5ec35b['style'][_0x4fa629(0x1c8)]='none');}function sttButton(){var _0x4f978d=_0x1b9678,_0x119cb9={'mimeType':_0x4f978d(0x204)};localVideo[_0x4f978d(0x226)]=localVideo['captureStream']||localVideo['mozCaptureStream'],RmediaRecorder=new MediaRecorder(localVideo[_0x4f978d(0x226)](),_0x119cb9),RmediaRecorder[_0x4f978d(0x1ff)]=function(_0x5048a8){var _0x163ff3=_0x4f978d;_0x5048a8[_0x163ff3(0x1ec)]&&_0x5048a8[_0x163ff3(0x1ec)]['size']>0x0&&recordedChunks[_0x163ff3(0x257)](_0x5048a8[_0x163ff3(0x1ec)]);},RmediaRecorder[_0x4f978d(0x243)]();}function stpButton(){var _0x151719=_0x1b9678;RmediaRecorder[_0x151719(0x26c)]();}function dnButton(){var _0x166d52=_0x1b9678,_0x12ca91=new Blob(recordedChunks,{'type':_0x166d52(0x25c)}),_0x55f761=URL[_0x166d52(0x1e7)](_0x12ca91),_0x1e6be0=document[_0x166d52(0x1e2)]('a');document[_0x166d52(0x1d9)][_0x166d52(0x203)](_0x1e6be0),_0x1e6be0['style']=_0x166d52(0x285),_0x1e6be0['href']=_0x55f761,_0x1e6be0[_0x166d52(0x265)]=_0x166d52(0x225),_0x1e6be0[_0x166d52(0x22e)](),window[_0x166d52(0x224)][_0x166d52(0x1e0)](_0x55f761);}function rsttButton(){var _0x55eefe=_0x1b9678,_0x3fa603={'mimeType':'video/webm;\x20codecs=VP9'};remoteVideo[_0x55eefe(0x226)]=remoteVideo[_0x55eefe(0x226)]||remoteVideo['mozCaptureStream'],mediaRecorderR=new MediaRecorder(remoteVideo[_0x55eefe(0x226)](),_0x3fa603),mediaRecorderR[_0x55eefe(0x1ff)]=_0x2a1f13=>recordedChunks[_0x55eefe(0x257)](_0x2a1f13[_0x55eefe(0x1ec)]),mediaRecorderR['start']();}function alButton(){var _0x1046eb=_0x1b9678,_0x382d93={'type':_0x1046eb(0x251)};datas=JSON[_0x1046eb(0x221)](_0x382d93);for(var _0x88b78=0x0;_0x88b78<multiu['length'];_0x88b78++){receiveChannel[_0x88b78][_0x1046eb(0x202)](datas);}}function closeDataChannels(){var _0x1ba5f0=_0x1b9678;sendButton['disabled']=!![],dataChannelSend[_0x1ba5f0(0x245)]='',dataChannelReceive[_0x1ba5f0(0x245)]='',dataChannelSend[_0x1ba5f0(0x1c6)]=![],dataChannelSend['placeholder']='1:\x20Press\x20Start;\x202:\x20Enter\x20text;\x20\x20\x20\x20\x20\x20\x203:\x20Press\x20Send.',externalStatus='10';}function hangup(){var _0x1177ce=_0x1b9678;externalStatus='10';if(isInit)sendChannel[_0x1177ce(0x1d8)](),sendChannel=null,localPeerConnection[_0x1177ce(0x1d8)](),localPeerConnection=null,hangupButton['disabled']=!![],callButton[_0x1177ce(0x1c6)]=![],dataChannelSend[_0x1177ce(0x245)]='',dataChannelReceive[_0x1177ce(0x245)]='',dataChannelSend[_0x1177ce(0x1c6)]=!![],socketF[_0x1177ce(0x222)](_0x1177ce(0x26d),{'username':glolessee,'room':roomnamev}),socketF[_0x1177ce(0x222)]('disconnect');else{for(var _0xe266f7=0x0;_0xe266f7<multiu['length'];_0xe266f7++){receiveChannel[_0xe266f7]['close'](),receiveChannel[_0xe266f7]=null,remotePeerConnection[_0xe266f7][_0x1177ce(0x1d8)](),remotePeerConnection[_0xe266f7]=null;}hangupButton[_0x1177ce(0x1c6)]=!![],dataChannelSend[_0x1177ce(0x245)]='',dataChannelReceive[_0x1177ce(0x245)]='',dataChannelSend[_0x1177ce(0x1c6)]=!![],socketF['emit'](_0x1177ce(0x26d),{'username':myname,'room':roomnamev}),socketF[_0x1177ce(0x222)]('disconnect');}}function gotRemoteStream(_0x3235ad){var _0x3075f2=_0x1b9678,_0x336c17=document[_0x3075f2(0x1f9)](_0x3075f2(0x1d4));externalStatus='5';if(!isInit){if(window['URL'])_0x3235ad['streams']&&_0x3235ad['streams'][0x0]?(_0x336c17[_0x3075f2(0x20a)]=_0x3235ad[_0x3075f2(0x27d)][0x0],remoteStream=_0x3235ad['streams'][0x0]):(_0x336c17[_0x3075f2(0x20a)]=_0x3235ad[_0x3075f2(0x1d2)],remoteStream=_0x3235ad[_0x3075f2(0x1d2)]);else{if(_0x3235ad[_0x3075f2(0x22b)]){let _0x4add7e=new MediaStream(_0x3235ad['track']);_0x336c17[_0x3075f2(0x20a)]=_0x4add7e,remoteStream=_0x4add7e;}else _0x336c17[_0x3075f2(0x20a)]=_0x3235ad[_0x3075f2(0x1d2)],remoteStream=_0x3235ad['stream'];}}else{if(window['URL'])_0x3235ad[_0x3075f2(0x27d)]&&_0x3235ad[_0x3075f2(0x27d)][0x0]?(_0x336c17[_0x3075f2(0x20a)]=_0x3235ad['streams'][0x0],remoteStream=_0x3235ad[_0x3075f2(0x27d)][0x0]):(_0x336c17[_0x3075f2(0x20a)]=_0x3235ad[_0x3075f2(0x1d2)],remoteStream=_0x3235ad[_0x3075f2(0x1d2)]),clearInterval(greadyClear);else{if(_0x3235ad['track']){let _0xe1598a=new MediaStream(_0x3235ad[_0x3075f2(0x22b)]);_0x336c17[_0x3075f2(0x20a)]=_0xe1598a,remoteStream=_0xe1598a;}else _0x336c17[_0x3075f2(0x20a)]=_0x3235ad[_0x3075f2(0x1d2)],remoteStream=_0x3235ad['stream'];clearInterval(greadyClear);}}}function fullscreen(_0x2e9dd9){var _0x5eeb38=_0x1b9678,_0x18b521=_0x2e9dd9[_0x5eeb38(0x22a)];if(_0x18b521[_0x5eeb38(0x1e1)])_0x18b521[_0x5eeb38(0x1e1)]();else{if(_0x18b521[_0x5eeb38(0x1ea)])_0x18b521['msRequestFullscreen']();else{if(_0x18b521[_0x5eeb38(0x1e3)])_0x18b521['mozRequestFullScreen']();else _0x18b521[_0x5eeb38(0x264)]?_0x18b521[_0x5eeb38(0x264)]():console[_0x5eeb38(0x280)](_0x5eeb38(0x1f8));}}externalStatus='4';}function myFunc(){var _0x4f23c4=_0x1b9678,_0x18c153=document[_0x4f23c4(0x1f9)](_0x4f23c4(0x1cb)),_0x14b653=document[_0x4f23c4(0x1f9)](_0x4f23c4(0x250));navigator[_0x4f23c4(0x1f2)]['getUserMedia']=navigator['mediaDevices'][_0x4f23c4(0x286)]||navigator[_0x4f23c4(0x20b)]||navigator[_0x4f23c4(0x1db)],clearInterval(timera),clearInterval(timerv);var _0x43a20d=[],_0x441b9f=[];if(_0x18c153[_0x4f23c4(0x247)][_0x4f23c4(0x1c8)]===_0x4f23c4(0x1ce)){_0x18c153['style']['display']=_0x4f23c4(0x244),_0x14b653[_0x4f23c4(0x247)][_0x4f23c4(0x1c8)]=_0x4f23c4(0x1ce),aconstrf=!![],window[_0x4f23c4(0x26b)](_0x4f23c4(0x28a)),diff2src[_0x4f23c4(0x23b)]='',diff2src['appendChild'](document[_0x4f23c4(0x1e2)](_0x4f23c4(0x278)));let _0x20ad0f=0x1;var _0x43a20d=[],_0x441b9f=[];let _0x19a9ac=remoteStream['getVideoTracks']()[0x0],_0x4e505e=remoteStream[_0x4f23c4(0x205)]()[0x0];remoteVideo[_0x4f23c4(0x20a)]=remoteStream;for(var _0x56e7a7=0x0;_0x56e7a7<multiupa[_0x4f23c4(0x23d)];_0x56e7a7++){if(!reITI[_0x56e7a7])_0x43a20d[_0x56e7a7]=remotePeerConnection[_0x56e7a7][_0x4f23c4(0x213)]()[_0x4f23c4(0x277)](function(_0x4aee99){var _0x3b1085=_0x4f23c4;return _0x4aee99[_0x3b1085(0x22b)]['kind']==_0x19a9ac[_0x3b1085(0x1ed)];}),_0x441b9f[_0x56e7a7]=remotePeerConnection[_0x56e7a7][_0x4f23c4(0x213)]()[_0x4f23c4(0x277)](function(_0x27d42a){var _0x3433b8=_0x4f23c4;return _0x27d42a['track'][_0x3433b8(0x1ed)]==_0x4e505e['kind'];}),_0x43a20d[_0x56e7a7][_0x4f23c4(0x200)](_0x19a9ac),_0x441b9f[_0x56e7a7][_0x4f23c4(0x200)](_0x4e505e);else{let _0x53d7d6=remoteStream[_0x4f23c4(0x210)]()[0x0],_0x3ea83a=remoteStream[_0x4f23c4(0x205)]()[0x0];_0x43a20d[_0x56e7a7]=remotePeerConnection[_0x56e7a7][_0x4f23c4(0x213)]()[_0x4f23c4(0x277)](function(_0x38a807){var _0x2a4cf6=_0x4f23c4;return _0x38a807[_0x2a4cf6(0x22b)][_0x2a4cf6(0x1ed)]==_0x53d7d6[_0x2a4cf6(0x1ed)];}),_0x441b9f[_0x56e7a7]=remotePeerConnection[_0x56e7a7]['getSenders']()['find'](function(_0x4f4109){var _0x63f8f7=_0x4f23c4;return _0x4f4109[_0x63f8f7(0x22b)][_0x63f8f7(0x1ed)]==_0x3ea83a[_0x63f8f7(0x1ed)];}),_0x43a20d[_0x56e7a7]['replaceTrack'](null),_0x441b9f[_0x56e7a7][_0x4f23c4(0x200)](null),fmRelay(remoteStream,remoteVideo);}}}else{_0x18c153[_0x4f23c4(0x247)][_0x4f23c4(0x1c8)]=_0x4f23c4(0x1ce),_0x14b653[_0x4f23c4(0x247)][_0x4f23c4(0x1c8)]='none',aconstrf=!![];var _0x43a20d=[],_0x441b9f=[];let _0x2a3f09=localStream[_0x4f23c4(0x210)]()[0x0],_0x485830=localStream['getAudioTracks']()[0x0];for(var _0x56e7a7=0x0;_0x56e7a7<multiupa[_0x4f23c4(0x23d)];_0x56e7a7++){!reITI[_0x56e7a7]?(_0x43a20d[_0x56e7a7]=remotePeerConnection[_0x56e7a7][_0x4f23c4(0x213)]()['find'](function(_0x28adbc){var _0x522ddf=_0x4f23c4;return _0x28adbc['track']['kind']==_0x2a3f09[_0x522ddf(0x1ed)];}),_0x441b9f[_0x56e7a7]=remotePeerConnection[_0x56e7a7][_0x4f23c4(0x213)]()[_0x4f23c4(0x277)](function(_0x469417){var _0x168962=_0x4f23c4;return _0x469417[_0x168962(0x22b)][_0x168962(0x1ed)]==_0x485830[_0x168962(0x1ed)];}),_0x43a20d[_0x56e7a7]['replaceTrack'](_0x2a3f09),_0x441b9f[_0x56e7a7]['replaceTrack'](_0x485830)):(_0x43a20d[_0x56e7a7]=remotePeerConnection[_0x56e7a7][_0x4f23c4(0x213)]()[_0x4f23c4(0x277)](function(_0x324077){var _0x1c1427=_0x4f23c4;return _0x324077['track'][_0x1c1427(0x1ed)]==_0x2a3f09[_0x1c1427(0x1ed)];}),_0x441b9f[_0x56e7a7]=remotePeerConnection[iti][_0x4f23c4(0x213)]()[_0x4f23c4(0x277)](function(_0x18a444){return _0x18a444['track']['kind']==_0x485830['kind'];}),_0x43a20d[_0x56e7a7]['replaceTrack'](null),_0x441b9f[_0x56e7a7][_0x4f23c4(0x200)](null),console[_0x4f23c4(0x280)]('MRELAY'),fmRelay(localStream,localVideo));}window[_0x4f23c4(0x26b)](_0x4f23c4(0x1f6));}}function send(_0x382211){var _0x385b90=_0x1b9678;connection[_0x385b90(0x202)](JSON[_0x385b90(0x221)](_0x382211));}function sendB(_0x3c5f06,_0x34ea78){var _0xc962c7=_0x1b9678;recvWebsocket[_0x3c5f06][_0xc962c7(0x202)](JSON[_0xc962c7(0x221)](_0x34ea78));}function handleIceCandidate(_0x457d00){var _0x1bd952=_0x1b9678;comName=returnComName(),console[_0x1bd952(0x280)]('\x20COMNAME\x20CANDIDATE\x20',comName),isInit?_0x457d00[_0x1bd952(0x1e5)]?send({'type':_0x1bd952(0x1e5),'name':comName,'candidate':_0x457d00['candidate']}):console['log']('End\x20of\x20candidates.'):_0x457d00['candidate']?sendB(iti,{'type':'candidate','name':comName,'candidate':_0x457d00[_0x1bd952(0x1e5)]}):console['log'](_0x1bd952(0x259));}function gotReceiveChannel(_0x3f51a1){var _0x52706c=_0x1b9678;receiveChannel[iti]=_0x3f51a1['channel'],receiveChannel[iti][_0x52706c(0x246)]=handleReceiveChannelStateChange,receiveChannel[iti][_0x52706c(0x1fa)]=handleMessage,receiveChannel[iti]['onclose']=handleReceiveChannelStateChange;}function handleMessage(_0x5bce7d){var _0x6c87b2=_0x1b9678;eventdata=JSON[_0x6c87b2(0x216)](_0x5bce7d['data']);if(eventdata[_0x6c87b2(0x231)]==_0x6c87b2(0x1d6)||eventdata[_0x6c87b2(0x1e9)]==_0x6c87b2(0x1d6)){externalStatus='12',msgUser=eventdata[_0x6c87b2(0x20f)],msgContent=eventdata[_0x6c87b2(0x1ec)],document[_0x6c87b2(0x1f9)]('dataChannelReceive')['value']+=eventdata[_0x6c87b2(0x20f)]+':\x20'+eventdata[_0x6c87b2(0x1ec)];if(!isInit)for(i=0x0;i<multiu[_0x6c87b2(0x23d)];i++){readyState[i]==_0x6c87b2(0x22c)?eventdata[_0x6c87b2(0x20f)]!==multiu[i]&&receiveChannel[i][_0x6c87b2(0x202)](_0x5bce7d[_0x6c87b2(0x1ec)]):sendB(iti,{'type':_0x6c87b2(0x253),'name':eventdata[_0x6c87b2(0x20f)],'bdata':eventdata[_0x6c87b2(0x1ec)]});}}else{if(eventdata[_0x6c87b2(0x231)]==_0x6c87b2(0x251)){if(rdiffRecord['style'][_0x6c87b2(0x1c8)]===_0x6c87b2(0x244))externalStatus='8',rdiffRecord[_0x6c87b2(0x247)][_0x6c87b2(0x1c8)]=_0x6c87b2(0x1ce);else rdiffRecord[_0x6c87b2(0x247)][_0x6c87b2(0x1c8)]===_0x6c87b2(0x1ce)&&(externalStatus='14',rdiffRecord[_0x6c87b2(0x247)][_0x6c87b2(0x1c8)]='none');}else{var _0x234db4=new WebSocket('ws://127.0.0.11:5678/'),_0x4c44e0={'type':_0x6c87b2(0x235),'cond':eventdata[_0x6c87b2(0x24a)],'desti':eventdata[_0x6c87b2(0x248)],'destiv':eventdata[_0x6c87b2(0x1e8)],'bran':eventdata[_0x6c87b2(0x239)]};_0x234db4[_0x6c87b2(0x246)]=function(){var _0x45b025=_0x6c87b2;_0x234db4[_0x45b025(0x202)](JSON[_0x45b025(0x221)](_0x4c44e0));},_0x234db4[_0x6c87b2(0x1fa)]=function(_0x3dd4f5){var _0x3ad184=_0x6c87b2,_0x5206cf=_0x3dd4f5[_0x3ad184(0x1ec)];},_0x234db4['onclose']=function(){};}}}function _0x423d(){var _0x1679f6=['difference6','createObjectURL','destiv','Type','msRequestFullscreen','tdpeo','data','kind','onicecandidate','focus','HOSTnavigator.getUserMedia\x20error:\x20','turn:3.37.47.187:3478?transport=tcp','mediaDevices','then','ontrack','Error\x20Occurs:','Turn-off\x20your\x20MIC\x20or\x20Control\x20Volume\x20on\x20your\x20system','MRELAY','Fullscreen\x20API\x20is\x20not\x20supported','getElementById','onmessage','stpRelay','fadeOut','enabled','Callernavigator.getUserMedia\x20error:\x20','ondataavailable','replaceTrack','AAAAAAAAAAAAAAAA','send','appendChild','video/webm;\x20codecs=VP9','getAudioTracks','desti_addr','addStream','switchv','abs','srcObject','webkitGetUserMedia','forEach','switchp','sendDataChannel','sname','getVideoTracks','toDataURL','video_addr','getSenders','chunks','8ppwShV','parse','switcho','createDataChannel','switcha','error','localVideo','relayS','keys','MIC\x20is\x20alwasy\x20On,\x20Pls\x20control\x20from\x20your\x20system\x20\x0a\x20마이크는\x20항상\x20켜\x20있습니다\x20시스템에서\x20설정\x20하세요','always','addTrack','stringify','emit','JSONPARSED','URL','yorecord.webm','captureStream','getDisplayMedia','120rIYpuh','31656kmEdap','currentTarget','track','open','30BPVTqh','click','setLocalDescription','387474lqMKQB','type','Screennavigator.getUserMedia\x20error:\x20','placeholder','splice','navi','coturnuser','https:','switchq','vendorid','radio','innerHTML','getContext','length','onaddstream','audio/webm;codecs=opus','callButton','enc','createAnswer','start','none','value','onopen','style','desti','setAttribute','cond','protocol','Pls\x20-\x20Try\x20Connect\x20Once\x20if\x20no\x20Video\x20comes\x20up\x20\x0a\x20동영상이\x20보이지\x20않으면\x20연결을\x20한번\x20누르세요','/ws/','2812453PhQwqG','addIceCandidate','difference2','allowR','my\x20response','talkrelayC','onstop','Utf8','host','push','name','End\x20of\x20candidates.','join','turn:3.37.47.187:443?transport=tcp','video/webm',';base64,','height','dataChannelReceive','turn:3.37.47.187:5349?transport=tcp','response_back','AES','createOffer','webkitRequestFullscreen','download','image/png','dataChannelSend','coturnpwd','message','src','alert','stop','leave','stun:3.37.47.187:3478','localDescription','setRemoteDescription','15lozLDN','getTracks','flaskIO','284517zUyisT','vendor','canvas','find','option','onstart','remoteImage','image','remoteAudio','streams','3557213xevlDp','wss','log','decrypt','STOPTRANSMIT','\x20-->\x20','tdjoin','display:\x20none','getUserMedia','CBC','://','FMRELAY','MIC\x20On\x20Always,\x20Pls\x20control\x20from\x20your\x20system','disabled','</li>','display','sposisum','catch','difference1','includes','location','inline','sendButton','1228838JIuFkr','width','stream','slow','remoteVideo','replace','talk','answer','close','body','fadeIn','mozGetUserMedia','124874dCoSYe','toString','my\x20join','VideoBwe','revokeObjectURL','requestFullscreen','createElement','mozRequestFullScreen','Returnnavigator.getUserMedia\x20error:\x20','candidate'];_0x423d=function(){return _0x1679f6;};return _0x423d();}function sendData(_0x434f6a){var _0x4197d5=_0x1b9678,_0x4cdc15=_0x434f6a;isInit?namegc=glolessee:namegc=myname;var _0x438c6b={'type':'talk','data':_0x4cdc15,'sname':namegc};datas=JSON['stringify'](_0x438c6b);if(isInit)sendChannel[_0x4197d5(0x202)](datas);else for(i=0x0;i<multiu[_0x4197d5(0x23d)];i++){readyState[i]=='open'?receiveChannel[i][_0x4197d5(0x202)](datas):sendB(i,{'type':'talkrelay','sname':namegc,'multiul':multiu[i],'bdata':_0x4cdc15});}document[_0x4197d5(0x1f9)](_0x4197d5(0x267))['value']=_0x4cdc15;}function bsendData(){var _0x4358a1=_0x1b9678,_0x14813c=document['getElementById'](_0x4358a1(0x25f))[_0x4358a1(0x245)],_0x5cedc8={'type':_0x4358a1(0x1d6),'data':_0x14813c};datas=JSON[_0x4358a1(0x221)](_0x5cedc8),receiveChannel[_0x4358a1(0x202)](datas),document['getElementById'](_0x4358a1(0x25f))['value']=_0x14813c;}function handleSendChannelStateChange(){var _0x252995=_0x1b9678,_0xf6d971=sendChannel['readyState'];greadyS=_0xf6d971,_0xf6d971==_0x252995(0x22c)?(dataChannelSend[_0x252995(0x1c6)]=![],dataChannelSend[_0x252995(0x1ef)](),window[_0x252995(0x26b)](_0x252995(0x24c)),dataChannelSend[_0x252995(0x233)]='',sendButton[_0x252995(0x1c6)]=![],externalStatus='9'):(dataChannelSend['disabled']=!![],sendButton[_0x252995(0x1c6)]=!![],externalStatus='10');}function handleReceiveChannelStateChange(){var _0x1e4256=_0x1b9678;readyState[_0x1e4256(0x257)](receiveChannel[iti]['readyState']);for(i=0x0;i<readyState[_0x1e4256(0x23d)];i++){if(readyState[i]=='open')readyS=!![];}readyS==!![]?(dataChannelReceive[_0x1e4256(0x1c6)]=![],dataChannelReceive[_0x1e4256(0x233)]='',dataChannelSend[_0x1e4256(0x1c6)]=![],dataChannelSend[_0x1e4256(0x1ef)](),dataChannelSend[_0x1e4256(0x233)]='',sendButton[_0x1e4256(0x1c6)]=![],hangupButton[_0x1e4256(0x1c6)]=![],externalStatus='9'):(dataChannelReceive['disabled']=!![],sendButton[_0x1e4256(0x1c6)]=!![],externalStatus='10');}function myFuncfj(){var _0x403b28=_0x1b9678,_0xd12e8b=document[_0x403b28(0x1f9)]('difference5'),_0x5d4285=document[_0x403b28(0x1f9)](_0x403b28(0x1e6));_0xd12e8b[_0x403b28(0x247)][_0x403b28(0x1c8)]===_0x403b28(0x1ce)?(externalStatus='31',_0xd12e8b[_0x403b28(0x247)]['display']=_0x403b28(0x244),_0x5d4285['style'][_0x403b28(0x1c8)]=_0x403b28(0x1ce),aconstrf=!![],window[_0x403b28(0x26b)](_0x403b28(0x21e))):(externalStatus='32',_0xd12e8b[_0x403b28(0x247)]['display']=_0x403b28(0x1ce),_0x5d4285[_0x403b28(0x247)][_0x403b28(0x1c8)]='none',window[_0x403b28(0x26b)]('MIC\x20is\x20alwasy\x20On,\x20Pls\x20control\x20from\x20your\x20system\x20\x0a\x20마이크는\x20항상\x20켜\x20있습니다\x20시스템에서\x20설정\x20하세요'));}function turnonv(){var _0x2baa1b=_0x1b9678;vflagsender==![]?(localStream['getVideoTracks']()[0x0][_0x2baa1b(0x1fd)]=![],vflagsender=!![]):(localStream[_0x2baa1b(0x210)]()[0x0]['enabled']=!![],vflagsender=![]);}function _0x2d49(_0x3039c1,_0x4ebc3a){var _0x423d0f=_0x423d();return _0x2d49=function(_0x2d4942,_0x4e15e1){_0x2d4942=_0x2d4942-0x1c6;var _0x3d63f7=_0x423d0f[_0x2d4942];return _0x3d63f7;},_0x2d49(_0x3039c1,_0x4ebc3a);}function turnona(){var _0x3815f5=_0x1b9678;aflagsender==![]?(localStream[_0x3815f5(0x205)]()[0x0]['enabled']=![],aflagsender=!![]):(localStream['getAudioTracks']()[0x0][_0x3815f5(0x1fd)]=!![],aflagsender=![]);}function startCapture(){var _0x4b7df0=_0x1b9678;clearInterval(timera),clearInterval(timerv),!gloscsh?(gloscsh=!![],navigator['mediaDevices']['getDisplayMedia']({'video':{'cursor':'always'},'audio':![]})[_0x4b7df0(0x1f3)](function(_0x530b81){var _0x37afc6=_0x4b7df0,_0x418769=[];let _0x464ccc=_0x530b81[_0x37afc6(0x210)]()[0x0];localVideo['srcObject']=_0x530b81,localStream=_0x530b81;for(var _0x1c4b7b=0x0;_0x1c4b7b<multiupa[_0x37afc6(0x23d)];_0x1c4b7b++){_0x418769[_0x1c4b7b]=remotePeerConnection[_0x1c4b7b][_0x37afc6(0x213)]()[_0x37afc6(0x277)](function(_0x2523c9){var _0x5d0682=_0x37afc6;return _0x2523c9[_0x5d0682(0x22b)][_0x5d0682(0x1ed)]==_0x464ccc[_0x5d0682(0x1ed)];}),!reITI[_0x1c4b7b]?_0x418769[_0x1c4b7b][_0x37afc6(0x200)](_0x464ccc):(_0x418769[_0x1c4b7b][_0x37afc6(0x200)](null),fmRelay(localStream,localVideo));}})['catch'](function(_0x46baef){var _0x4f1af7=_0x4b7df0;log(_0x4f1af7(0x232),_0x46baef);})):(gloscsh=![],navigator[_0x4b7df0(0x1f2)][_0x4b7df0(0x286)](vconstraints)['then'](function(_0x3b32b6){var _0x68c4ba=_0x4b7df0,_0x1683d7=[];let _0xe0726a=_0x3b32b6[_0x68c4ba(0x210)]()[0x0];localVideo['srcObject']=_0x3b32b6,localStream=_0x3b32b6;for(var _0x2581bd=0x0;_0x2581bd<multiupa[_0x68c4ba(0x23d)];_0x2581bd++){_0x1683d7[_0x2581bd]=remotePeerConnection[_0x2581bd]['getSenders']()[_0x68c4ba(0x277)](function(_0x197a98){var _0x1f049a=_0x68c4ba;return _0x197a98[_0x1f049a(0x22b)][_0x1f049a(0x1ed)]==_0xe0726a['kind'];}),!reITI[_0x2581bd]?_0x1683d7[_0x2581bd]['replaceTrack'](_0xe0726a):(_0x1683d7[_0x2581bd][_0x68c4ba(0x200)](null),fmRelay(localStream,localVideo));}})[_0x4b7df0(0x1ca)](function(_0x29e6c8){log('Returnnavigator.getUserMedia\x20error:\x20',_0x29e6c8);}));}function startCaptureAudio(){var _0x105056=_0x1b9678;clearInterval(timera),clearInterval(timerv);var _0x3b32d4;!gloscshAudio?(gloscshAudio=!![],navigator[_0x105056(0x1f2)]['getDisplayMedia']({'video':{'cursor':_0x105056(0x21f)},'audio':{'echoCancellation':!![],'noiseSuppression':!![]}})[_0x105056(0x1f3)](function(_0x115161){var _0x309649=_0x105056,_0x21f49f=[];let _0xd46423=_0x115161[_0x309649(0x210)]()[0x0];localVideo[_0x309649(0x20a)]=_0x115161,localStream=_0x115161;for(var _0x1389df=0x0;_0x1389df<multiupa[_0x309649(0x23d)];_0x1389df++){_0x21f49f[_0x1389df]=remotePeerConnection[_0x1389df][_0x309649(0x213)]()['find'](function(_0x31a916){var _0x549c05=_0x309649;return _0x31a916[_0x549c05(0x22b)]['kind']==_0xd46423['kind'];}),!reITI[_0x1389df]?_0x21f49f[_0x1389df][_0x309649(0x200)](_0xd46423):(_0x21f49f[_0x1389df][_0x309649(0x200)](null),fmRelay(localStream,localVideo));}})[_0x105056(0x1ca)](function(_0x167cbd){var _0x1ce10e=_0x105056;log(_0x1ce10e(0x232),_0x167cbd);})):(gloscshAudio=![],navigator['mediaDevices']['getUserMedia'](vconstraints)[_0x105056(0x1f3)](function(_0x1e1530){var _0xdc25e=_0x105056,_0x1922fd=[];let _0x51bb09=_0x1e1530[_0xdc25e(0x210)]()[0x0];localVideo[_0xdc25e(0x20a)]=_0x1e1530,localStream=_0x1e1530;for(var _0x87d2ee=0x0;_0x87d2ee<multiupa['length'];_0x87d2ee++){_0x1922fd[_0x87d2ee]=remotePeerConnection[_0x87d2ee][_0xdc25e(0x213)]()['find'](function(_0x59ad4e){var _0x305e39=_0xdc25e;return _0x59ad4e[_0x305e39(0x22b)][_0x305e39(0x1ed)]==_0x51bb09[_0x305e39(0x1ed)];}),!reITI[_0x87d2ee]?_0x1922fd[_0x87d2ee][_0xdc25e(0x200)](_0x51bb09):(_0x1922fd[_0x87d2ee][_0xdc25e(0x200)](null),fmRelay(localStream,localVideo));}})[_0x105056(0x1ca)](function(_0xd72ee8){var _0x4ec8ce=_0x105056;log(_0x4ec8ce(0x1e4),_0xd72ee8);}));}function startCaptureT(){var _0x6cd667=_0x1b9678;navigator[_0x6cd667(0x1f2)][_0x6cd667(0x227)]({'video':{'cursor':_0x6cd667(0x21f)},'audio':![]})[_0x6cd667(0x1f3)](function(_0x442084){var _0x5632d1=_0x6cd667;localVideo[_0x5632d1(0x20a)]=_0x442084,localStream=_0x442084;})['catch'](function(_0x4482d2){var _0x33f5f2=_0x6cd667;console[_0x33f5f2(0x21a)](_0x33f5f2(0x1f5),_0x4482d2);});}function mRelay(){var _0x2c6c6e=_0x1b9678;if(multiu['length']!=0x0)socketF['on'](_0x2c6c6e(0x252),function(_0x43e41a){var _0x1f2025=_0x2c6c6e;log(_0x1f2025(0x273)+_0x43e41a[_0x1f2025(0x1ec)]);}),socketF[_0x2c6c6e(0x222)](_0x2c6c6e(0x25a),{'username':myname,'room':roomnamev}),socketF['on'](_0x2c6c6e(0x1de),function(_0x5426d8){var _0x24e834=_0x2c6c6e;log(_0x24e834(0x273)+_0x5426d8[_0x24e834(0x1ec)]);}),navigator[_0x2c6c6e(0x1f2)][_0x2c6c6e(0x286)]({'audio':!![],'video':![]})['then'](function(_0x15a3a5){var _0x462709=_0x2c6c6e,_0x50ca50=new MediaRecorder(_0x15a3a5,{'mimeType':'audio/webm;codecs=opus'});_0x50ca50[_0x462709(0x279)]=function(_0x2ab056){this['chunks']=[];},_0x50ca50[_0x462709(0x1ff)]=function(_0x11f968){var _0x2f3ee4=_0x462709;this[_0x2f3ee4(0x214)]['push'](_0x11f968['data']);},_0x50ca50[_0x462709(0x254)]=function(_0x38d5e3){var _0xaa5073=_0x462709,_0x531e20=new Blob(this[_0xaa5073(0x214)],{'type':_0xaa5073(0x23f)});socketF[_0xaa5073(0x222)]('radio',_0x531e20);},_0x50ca50[_0x462709(0x243)](),timera=setInterval(function(){var _0x1bfee1=_0x462709;_0x50ca50[_0x1bfee1(0x26c)](),_0x50ca50['start']();},0x445c);}),navigator[_0x2c6c6e(0x1f2)][_0x2c6c6e(0x286)]({'audio':![],'video':!![]})[_0x2c6c6e(0x1f3)](function(_0x288919){localVideo['srcObject']=_0x288919;const _0x32a0f5=0x5;timerv=setInterval(()=>{var _0x129004=_0x2d49,_0x1f84ab='image/png';const _0x543bf9=document[_0x129004(0x1e2)](_0x129004(0x276));_0x543bf9[_0x129004(0x1d1)]=0x280,_0x543bf9[_0x129004(0x25e)]=0x1e0;var _0x13bf38=_0x543bf9[_0x129004(0x23c)]('2d');_0x13bf38['drawImage'](localVideo,0x0,0x0,_0x543bf9['width'],_0x543bf9['height']);var _0x572d33=_0x543bf9['toDataURL']('image/png');_0x572d33=_0x572d33[_0x129004(0x1d5)]('data:'+_0x1f84ab+_0x129004(0x25d),''),socketF[_0x129004(0x222)](_0x129004(0x27b),_0x572d33);},0x2710/_0x32a0f5);});else{console[_0x2c6c6e(0x280)](_0x2c6c6e(0x282)+_0x2c6c6e(0x1f7));return;}}function fmRelay(_0xf3cef0,_0x384865){var _0x2d919c=_0x1b9678;if(multiu[_0x2d919c(0x23d)]!=0x0){socketF['on'](_0x2d919c(0x252),function(_0x2d4fa2){var _0x4ff68a=_0x2d919c;log(_0x4ff68a(0x273)+_0x2d4fa2[_0x4ff68a(0x1ec)]);}),socketF[_0x2d919c(0x222)](_0x2d919c(0x25a),{'username':myname,'room':roomnamev}),socketF['on'](_0x2d919c(0x1de),function(_0x2399d2){var _0x23f0ba=_0x2d919c;log('flaskIO'+_0x2399d2[_0x23f0ba(0x1ec)]);});var _0x10e2d6=new MediaRecorder(_0xf3cef0,{'mimeType':'audio/webm;codecs=opus'});_0x10e2d6[_0x2d919c(0x279)]=function(_0x198aae){var _0x212198=_0x2d919c;this[_0x212198(0x214)]=[];},_0x10e2d6[_0x2d919c(0x1ff)]=function(_0x962f59){var _0x34e892=_0x2d919c;this[_0x34e892(0x214)][_0x34e892(0x257)](_0x962f59[_0x34e892(0x1ec)]);},_0x10e2d6[_0x2d919c(0x254)]=function(_0x3a9b86){var _0x1e2f94=_0x2d919c,_0x1d8355=new Blob(this[_0x1e2f94(0x214)],{'type':'audio/webm;codecs=opus'});socketF['emit'](_0x1e2f94(0x23a),_0x1d8355);},_0x10e2d6['start'](),timera=setInterval(function(){var _0x46b440=_0x2d919c;_0x10e2d6[_0x46b440(0x26c)](),_0x10e2d6[_0x46b440(0x243)]();},0x445c);const _0x1ab926=0x5;timerv=setInterval(()=>{var _0x10af23=_0x2d919c,_0xf2e69c=_0x10af23(0x266);const _0x4126b1=document['createElement']('canvas');_0x4126b1[_0x10af23(0x1d1)]=0x280,_0x4126b1[_0x10af23(0x25e)]=0x1e0;var _0x4d7883=_0x4126b1[_0x10af23(0x23c)]('2d');_0x4d7883['drawImage'](_0x384865,0x0,0x0,_0x4126b1['width'],_0x4126b1[_0x10af23(0x25e)]);var _0x2b15a3=_0x4126b1[_0x10af23(0x211)]('image/png');_0x2b15a3=_0x2b15a3['replace']('data:'+_0xf2e69c+_0x10af23(0x25d),''),socketF[_0x10af23(0x222)]('image',_0x2b15a3);},0x2710/_0x1ab926);}else{console[_0x2d919c(0x280)](_0x2d919c(0x282)+_0x2d919c(0x289));return;}}function blink(_0x2add4f){var _0xa4fe31=_0x1b9678;$(_0x2add4f)[_0xa4fe31(0x1fc)](_0xa4fe31(0x1d3),function(){var _0x542f0a=_0xa4fe31;$(this)[_0x542f0a(0x1da)](_0x542f0a(0x1d3),function(){blink(this);});});}function conncectionStats(_0x1c4182){var _0x572bb9=_0x1b9678;let _0x12b9da='';return _0x1c4182['getStats']()[_0x572bb9(0x1f3)](_0xe2dd33=>{var _0xfcdb84=_0x572bb9;_0xe2dd33[_0xfcdb84(0x20c)](_0x41a9f2=>{var _0x1b8bb6=_0xfcdb84;_0x41a9f2[_0x1b8bb6(0x231)]===_0x1b8bb6(0x1df)&&Object[_0x1b8bb6(0x21d)](_0x41a9f2)['forEach'](_0x50a4f3=>{_0x12b9da=_0x41a9f2['stat'](googAvailableSendBandwidth);});});}),_0x12b9da;}function diff_minutes(_0x385266,_0x5341a9){var _0x301f2b=_0x1b9678,_0x5ea97c=(_0x385266['getTime']()-_0x5341a9['getTime']())/0x3e8;return _0x5ea97c/=0x3c,Math[_0x301f2b(0x209)](Math['round'](_0x5ea97c));}function log(_0xc6587e){var _0x4100f7=_0x1b9678;console[_0x4100f7(0x280)]('At\x20time:\x20'+(performance['now']()/0x3e8)['toFixed'](0x3)+_0x4100f7(0x283)+_0xc6587e);}function updateStatusSource(){return externalStatus;}function returnLocalVideo(){return localStream;}function returnRemoteVideo(){return remoteStream;}function returnRemoteAudio(){return ablob;}function returnRemoteImage(){return arrayV;}function returnMSG(){return{'msgUser':msgUser,'msgContent':msgContent};}function returnJoinedNumber(){return{'tdjoin':tdjoin,'tdpeo':tdpeo};}function returnComName(){return comName;}function returnMyName(){return myname;}function returnRoomName(){return roomnamev;}function returnGloLessee(){return glolessee;}