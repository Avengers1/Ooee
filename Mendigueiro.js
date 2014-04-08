$(document).ready(function(){

//When script loads
API.sendChat("/me :warning: Troco fans - Ligado v.1.1 :warning:")
$('#button-vote-positive').click();

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
var intervalMessage = setInterval(function(){message();},260000);

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
		API.chatLog("Oque? Voce parou de mendigar? :(", alert)
		break;
		
		case "/reiniciar":
	    intervalMessage = setInterval(function(){message();},260000);
		break;
		
		case "/comandos":
		//API.sendChat(total + " People fanned since launched");
		API.chatLog(total + " Comandos: /desligar : Desliga o bot , /reiniciar Reinicia o bot, /chat Falara uma frase aleatoria, Para ver novamente digite /comandos ~Novos Comandos em BREVE~", alert)
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

