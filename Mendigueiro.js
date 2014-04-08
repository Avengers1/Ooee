$(document).ready(function(){

//When script loads
javascript:API.chatLog("Troco Fans - Ligado V.1.2",false);API.chatLog("Editado por - Avengers ",false);API.chatLog("Para ver os comandos digite /comandos ", false);API.chatLog("Qualquer coisa me adicione no facebook: https://www.facebook.com/MateusVicentin ", false);

//global var
var total = 0;


if (localStorage.usData === undefined) {
    localStorage.usData = JSON.stringify({
        counter: 0,
    })
}

function fanEveryone(data) {
    var relationship = require('app/models/TheUserModel');
    if (relationship.getRelationship(data.id) < 2) {
       
    }
}
API.on(API.USER_FAN, fanEveryone);

//chat commands and so on below here 
var intervalMessage = setInterval(function(){message();},280000);

function message(){
var m, msgs;
msgs = ["/me Eu troco fan, alguem afim? :v:", "/me Alguem afim de trocar fan?,so mencionar :3", "/me Troco fan, so avisar <3", "/meTroco fan,retribuo na HORA GO? :+1:", "/me Alguem quer trocar fan? so virar e avisar que retribuo na HORA :warning:", "QUERO FANS, bora trocar amiguinho? <3", "Troco fans por bala alguem afim? so avisar que retribuo :D" ];

m = Math.floor(Math.random() * msgs.length);
API.sendChat(msgs[m]);		  
			  
}


API.on(API.CHAT_COMMAND, command);
function command(value)
{
	switch(value)
	{
		case "/desligar":
		clearInterval(intervalMessage);
		API.chatLog("Oque? Voce quis parar de mendigar?, espero que mendigue logo denovo T_T ", false)
		break;
		
		case "/reiniciar":
	    intervalMessage = setInterval(function(){message();},280000);
		break;
		
		case "/comandos":
		//API.sendChat(total + " People fanned since launched");
		API.chatLog (" Comandos: /desligar : Desliga o bot /reiniciar Reinicia o bot /chat Falara uma frase aleatoria. Para ver novamente digite /comandos ~Novos Comandos em BREVE~", true)
		break;
		
		case "/chat":
		message();
		break;
		
	}
}

API.on(API.DJ_ADVANCE, woot);
function woot()
{
	$('#button-vote-positive').click();
}


});

