
var callMedia = document.getElementById("callMedia");
var buttonnt;
var selecttt = document.getElementById('selectt');
var localStream;
var externalStatus;
aconstraints = true;


function callM(){

      var callMedia = document.getElementById("callMedia");
      const buttonnt = document.getElementById('buttonn');
      var selecttt = document.getElementById('selectt');
      var localVideo = document.getElementById("localVideo");
      
      navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
      navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      
      navigator.mediaDevices.enumerateDevices().then(function(mediaDevices){

         selecttt.innerHTML = '';
         selecttt.appendChild(document.createElement('option'));
         let count = 1;

         mediaDevices.forEach(function(mediaDevice){
     
            if (mediaDevice.kind === 'videoinput'){

               const option = document.createElement('option');
               option.value = mediaDevice.deviceId;
               const label = mediaDevice.label || `Camera ${count++}`;
               const textNode = document.createTextNode(label);
               option.appendChild(textNode);                
               selecttt.appendChild(option);    
                        
               buttonnt.addEventListener('click', event => {
                  let constraints = { video: {deviceId: {exact: selecttt.value}}, audio: aconstraints };
                  navigator.mediaDevices.getUserMedia(constraints).then(function (stream){ 

                        externalStatus = "21";
                        localVideo.srcObject = stream;
                        localStream = stream;
                        
                        var sender = [];
                        var cSender = [];
                        var asender = [];
                        var cAsender = [];  
                        
                        let videoTrack = stream.getVideoTracks()[0];
                        let audioTrack = stream.getAudioTracks()[0];
               
                        for (i = 0; i < connectedUser.length; i++){

                              cSender[i] = localPeerConnection[i].getSenders().find(function (s){
                              return s.track.kind == videoTrack.kind;
                           });
            
                           if (readyStateSend[i] == "open"){

                              cSender[i].replaceTrack(videoTrack);
                           }
                           else{
                              
                              cSender[i].replaceTrack(null);
                              cfmRelay(localStream, localVideo);
                           }
            
                        }
            
                        for (j = 0; j < multiu.length; j++){

                              sender[j] = remotePeerConnection[j].getSenders().find(function (s) {
                              return s.track.kind == videoTrack.kind;
                           });
            
                           if (readyState[j] == "open"){
                              
                              sender[j].replaceTrack(videoTrack);
                           }
                           else{

                              sender[j].replaceTrack(null);
                              fmRelay(localStream, localVideo);
                           }
                        }
                        
                        for (i = 0; i < connectedUser.length; i++){

                              cAsender[i] = localPeerConnection[i].getSenders().find(function (s) {
                              return s.track.kind == audioTrack.kind;
                           });

                           if (readyStateSend[i] == "open"){

                              cAsender[i].replaceTrack(audioTrack);
                           }
                           else{

                              cAsender[i].replaceTrack(null);
                              cfmRelay(localStream, localVideo);
                           }
                        }

                        for (j = 0; j < multiu.length; j++){

                              asender[j] = remotePeerConnection[j].getSenders().find(function (s) {
                              return s.track.kind == audioTrack.kind;
                           });

                           if (readyState[j] == "open"){

                              asender[j].replaceTrack(audioTrack);
                           }
                           else{

                              asender[j].replaceTrack(null);
                              fmRelay(localStream, localVideo);
                           }
                        }
                     

                     callMedia.disabled = false;
                     console.log("Received local stream");  

                  }).catch( function(error) {
                     console.log("Init Media getUserMedia error: ", error);
                  });

               }); 
            }            
         });
      })
      .catch(function(err){ 
         console.log(err.name + ": " + err.message);
      }); 
} 


if(selecttt.value){ 
   
   localStorage.setItem('selected',selecttt.value);
}
else{
   
   localStorage.setItem('selected',null);
}


      
function updateStatusSourceInit(){            
      
      return externalStatus; 
}


function returnLocalVideoInit(){

      return localStream; 
}


      