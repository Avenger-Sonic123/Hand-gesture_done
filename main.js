var prediction1="";
var prediction2="";

Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/06-D89N_V/model.json",modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!");
}

function speak()
{
    var synth=window.speechSynthesis;
    var speak_data1="Prediction 1 is "+prediction1;
    var speak_data2="Prediction 2 is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterthis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(results[0].label == "Peace")
        {
            document.getElementById("result_emoji1").innerHTML = "&#9996;";
        }
        if(results[0].label == "Ok")
        {
            document.getElementById("result_emoji1").innerHTML = "&#128076;";
        }
        if(results[0].label == "Thumbs-Down")
        {
            document.getElementById("result_emoji1").innerHTML = "&#128078;";
        }
        if(results[0].label == "Thumbs-Up")
        {
            document.getElementById("result_emoji1").innerHTML = "&#128077;";
        }
        if(results[0].label == "High-Five")
        {
            document.getElementById("result_emoji1").innerHTML = "&#128400;";
        }
        if(results[0].label == "Vulcan salute")
        {
            document.getElementById("result_emoji1").innerHTML = "&#128406;";
        }
        if(results[0].label == "Fist")
        {
            document.getElementById("result_emoji1").innerHTML = "&#9994;";
        }

        if(results[1].label == "Peace")
        {
            document.getElementById("result_emoji2").innerHTML = "&#9996;";
        }
        if(results[1].label == "Ok")
        {
            document.getElementById("result_emoji2").innerHTML = "&#128076;";
        }
        if(results[1].label == "Thumbs-Down")
        {
            document.getElementById("result_emoji2").innerHTML = "&#128078;";
        }
        if(results[1].label == "Thumbs-Up")
        {
            document.getElementById("result_emoji2").innerHTML = "&#128077;";
        }
        if(results[1].label == "High-Five")
        {
            document.getElementById("result_emoji2").innerHTML = "&#128400;";
        }
        if(results[1].label == "Vulcan salute")
        {
            document.getElementById("result_emoji2").innerHTML = "&#128406;";
        }
        if(results[1].label == "Fist")
        {
            document.getElementById("result_emoji2").innerHTML = "&#9994;";
        }
    }
}