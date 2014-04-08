$(document).ready(function(){

//When script loads
API.sendChat("/me Troco fans :v:  Ligado v.1.0 ")
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
msgs = ["Eu troco fan, alguem afim? :v:", "Alguem afim de trocar fan?,so mencionar :3", "Troco fan, so avisar <3", "Troco fan,retribuo na HORA GO? :+1:" ];

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
		API.chatLog("BOT DA ETD => DESLIGADO", alert)
		break;
		
		case "/restart":
	    intervalMessage = setInterval(function(){message();},260000);
		break;
		
		case "/falar":
		//API.sendChat(total + " People fanned since launched");
		API.chatLog(total + " People fanned since launched", alert)
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

