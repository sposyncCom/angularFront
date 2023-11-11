
var callMedia = document.getElementById("callMedia");
var buttonnt;
var selecttt = document.getElementById('selectt');
var aconstr = true;
var externalStatus;
var localStream;
var aconstraints = { echoCancellation: true, noiseSuppression: true };


function callM(){
   
   var callMedia = document.getElementById("callMedia");
   const buttonnt = document.getElementById('buttonn');
   var selecttt = document.getElementById('selectt');
   var localVideo = document.getElementById("localVideo");
   
   navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
   navigator.webkitGetUserMedia || navigator.mozGetUserMedia;    

   navigator.mediaDevices.enumerateDevices().then(function(mediaDevices){

      console.log("Enumerating");
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

                     localVideo.srcObject = stream;
                     localStream = stream;
                     externalStatus = "21";
                     callMedia.disabled = false;
                     console.log("Received local stream");  

                     }).catch( function(error){
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


   