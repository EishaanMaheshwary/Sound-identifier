cat = null;
dog = null;
function identify(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dWZsjvURR/model.json',modelReady);
}
function modelReady(){
    console.log("Model Ready!");
    classifier.classify(gotResults);
}