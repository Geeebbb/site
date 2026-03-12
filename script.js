window.onload = function(){


var map = new ol.Map({
target: "map",

layers: [
new ol.layer.Tile({
source: new ol.source.OSM()
})
],

view: new ol.View({
center: ol.proj.fromLonLat([37.648, 55.752]), 
zoom: 14
})

});



var input = document.getElementById("chatInput");
var sendBtn = document.getElementById("sendBtn");
var voiceBtn = document.getElementById("voiceBtn");
var messages = document.getElementById("chatMessages");


function addMessage(text, type){

var div = document.createElement("div");
div.className = "message " + type;

div.innerText = text;

messages.appendChild(div);

messages.scrollTop = messages.scrollHeight;

}



function botReply(text){

var lower = text.toLowerCase();

var answers = [];

if(lower.includes("привет")){

answers = [
"Привет!",
"Здравствуйте!",
"Рад вас видеть!"
];

}

else if(lower.includes("вшэ")){

answers = [
"ВШЭ - один из лучших университетов России.",
"Я учусь в МИЭМ НИУ ВШЭ.",
"Это отличный университет!"
];

}

else if(lower.includes("матем")){

answers = [
"Математика - основа многих IT-направлений.",
"Я люблю прикладную математику!"
];

}

else{

answers = [
"Интересный вопрос)",
"Расскажите подробнее.",
"Я пока не знаю что ответить."
];

}

var random = Math.floor(Math.random() * answers.length);

setTimeout(function(){

addMessage("Бот: " + answers[random], "bot");

},1000);

}



sendBtn.onclick = function(){

var text = input.value.trim();

if(text === "") return;

addMessage("Вы: " + text, "user");

botReply(text);

input.value = "";

};



if('webkitSpeechRecognition' in window){

var recognition = new webkitSpeechRecognition();

recognition.lang = "ru-RU";

voiceBtn.onclick = function(){

recognition.start();

};

recognition.onresult = function(event){

var text = event.results[0][0].transcript;

input.value = text;

};

}

};