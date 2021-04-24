Webcam.set({
    height:350,
    width:300,
    image_format: 'png',
    png_quality:90,
})
;
camera=document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    console.log('ml5 version:',ml5.version);

    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OjTKRt4hI/model.json",modelloaded)
    

    function modelloaded(){
        console.log("modelloaded")
    }
    function speak(){
        var synth=window.speechSynthesis;
        speak_data_1="The First speak predcition is"+ predction_1;
        speak_data_1="The Second speak predction is"+ predction_2;
        var uttersynth= newspeaksynthesisuttrance(speak_data_1 + speak_data_2)
        synth.speak(utterthis)


    }
