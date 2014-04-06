$(document).ready(function(){

//When script loads
API.sendChat("/me BEM VINDO A ETD (AUTO REGRAS LIGADO) V 1.0 EDITADO POR AVENGERS !")
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
msgs = ["/me Welcome to Electro, Trap & Dubstep Brasil:  Join the group https://www.facebook.com/groups/ETD.plug/", "/me Música no máximo 5 minutos, quanto menor melhor/ Proibido: Funk, axé, pagode, sertanejo, paródia, rock ,rap, putarias/ Fan for fan liberado/ Entrou na Lista de Espera,o voto é OBRIGATÓRIO, caso contrário, serás retirado da lista de espera/ Não ficar pedindo cargos ",  "/me Cant ask for staff positions/Não peça cargos na STAFF!", "/me Respeite os STAFF da sala/Respect the moderators of the room.", "/me sem spam ou flood no chat/No flooding the chat.", "/me Allowed genres/gêneros permitidos: Electro, Dubstep, Techno, Trap, EDM, Hardstyle , Trance , House", "/me Ola eu falo as regras da sala , porfavor respeite todas as regras ! para nao ser banido da sala! ", "/me Esta com duvidas? peça ajuda a um STAFF/Do you have questions? ask a STAFF", "/me Não crie brigas , ajude sempre a sala ", ];

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

