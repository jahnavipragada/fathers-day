
var randomNumber1= (Math.floor(Math.random()*6));
var randomNumber2= (Math.floor(Math.random()*5));
var randomNumber3= (Math.floor(Math.random()*4));

var randomImage1 = "circle-cropped ("+ randomNumber1 +").png" ;
var randomImage2 = "img_" + randomNumber2 + ".jpg" ;

var randomImageSource1 =  randomImage1;
var randomImageSource2 =  randomImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

console.log(randomNumber1);
console.log(randomNumber2);

if(randomNumber3===0){
  document.querySelector("h1").innerHTML = "पिता दिवस की शुभकामना";
}
else if (randomNumber3===1){
  document.querySelector("h1").innerHTML =  "పితృ దినోత్సవ శుభాకాంక్షలు";
}
else if (randomNumber3===2){
  document.querySelector("h1").innerHTML =  "Happy Father,s Day";
}
else{
  document.querySelector("h1").innerHTML =" இனிய தந்தையர் தினம்";
}
