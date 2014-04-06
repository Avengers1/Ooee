$(document).ready(function(){

//When script loads
API.sendChat("/me BEM VINDO A ETD :v: (AUTO REGRAS LIGADO) V 1.1 EDITADO POR AVENGERS ! :smile: ")
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
msgs = ["/me Welcome to Electro, Trap & Dubstep Brasil:  Join the group https://www.facebook.com/groups/ETD.plug/ :+1: ", "/me Música no máximo 5 minutos, quanto menor melhor/ Proibido: Funk, axé, pagode, sertanejo, paródia, rock ,rap, putarias/ Fan for fan liberado/ Entrou na Lista de Espera,o voto é OBRIGATÓRIO, caso contrário, serás retirado da lista de espera/ Não ficar pedindo cargos :laughing: ",  "/me Cant ask for staff positions/Não peça cargos na STAFF! :thumbsup: ", "/me Respeite os STAFF da sala/Respect the moderators of the room. :angel: ", "/me :warning: sem spam ou flood no chat/No flooding the chat. :warning: ", "/me :warning: Allowed genres/gêneros permitidos: Electro, Dubstep, Techno, Trap, EDM, Hardstyle , Trance , House :warning: ", "/me :thumbsup: Ola eu falo as regras da sala , porfavor respeite todas as regras ! para nao ser banido da sala! :warning:", "/me :question: Esta com duvidas? peça ajuda a um STAFF/Do you have questions? ask a STAFF :question:", "/me Não crie brigas , ajude sempre a sala ", ];

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

