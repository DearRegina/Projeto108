function startClassification()
{
  navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kFrScroNV/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var Gato = 0;
var Cachorro = 0;

function gotResults(error, results) {
  if (error){
    console.error(error);
  }else{
    console.log(results);
    
    random_number_red = Math.floor(Math.random() * 255)+1;
    random_number_green = Math.floor(Math.random() * 255)+1;
    random_number_blue = Math.floor(Math.random() * 255)+1;

    document.getElementById("result_label").innerHTML = "Estou te ouvindo " + results[0].label;
    document.getElementById("result_confidence").innerHTML = " Cachorro Detectado - " + Cachorro + " Gato Detectado -" + Gato;
    document.getElementById("result_label").style.color = "rgb(" + random_number_red + "," + random_number_green + "," + random_number_blue +")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_red + "," + random_number_green + "," + random_number_blue +")";

    img1 = document.getElementById("listen");
  
    
    if (results[0].label === "Latido"){
      img1.src = "bark.gif";
      Cachorro = Cachorro + 1;
    }else if (results[0].label === "Miado"){
      img1.src = "meow.gif";
     Gato = Gato + 1;
    }else{
      img1.src = "listen.gif";
      
    }
  }
 }
