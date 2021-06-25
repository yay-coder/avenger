var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
  function start() { 
      document.getElementById("textbox").innerHTML = "";
   recognition.start();
 }
  recognition.onresult = function(event) {
       console.log(event);
        var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
     console.log(Content);
     if(Content=="take my selfie"){
        speak();console.log("take my SELFIe");
     }
  }
    function speak(){
         var synth = window.speechSynthesis;
          speak_data = "Taking your Selfie in 5 seconds";
           var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             Webcam.attach(camera);
             setTimeout(function(){
            snapshot();
        data_save();
             },5000);
            }
    camera = document.getElementById("camera");
     Webcam.set({ width:360,
         height:250,
          image_format : 'png',
           png_quality:100 });
function snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='snapshot'>";

});


}
function data_save(){
    link=document.getElementById("link");
    img=document.getElementById("snapshot").src;
    link.href=img;
    link.click();
}

