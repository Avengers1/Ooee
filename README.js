$(document).ready(function(){

//When script loads
API.sendChat("/me Welcome to EDT  <3 !")
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
var intervalMessage = setInterval(function(){message();},220000);

function message(){
var m, msgs;
msgs = ["/me Welcome to Electro Dubstep & Techno Room/ Join the group https://www.facebook.com/groups/EDTentertainment/", "/me nosso canal do Youtube se inscreva: http://www.youtube.com/user/EDTentertainment!", "/me Bem vindo a sala/ Welcome the room ;)! ", "/me Proibido o uso do Caps Lock/ Siga as regras da sala/ Evite pedir fans e cargos, obrigado por sua preferência de sala / Prohibited the use of the Caps Lock / Follow the rules of the room / Avoid asking fans and posts, thank you for your preference of room. ", "/me let's go curte as novas musicas da sala via soundcloud: https://soundcloud.com/rodrigues-wicked!", "/me Cant ask for staff positions/Não peça cargos na STAFF!", "/me Respeite os STAFF da sala/Respect the moderators of the room.", "/me Maximum Time 6 minutes and 30 seconds.", "/me sem spam ou flood no chat/No flooding the chat.", "/me Allowed genres/gêneros permitidos: Electro, Dubstep, Techno, Trap, EDM, Hardstyle , Trance , House", "/me Host e Co Host : WICKED , RODRIGUES e 4SharedPro , Managers : Aruan-e-Manuh , P€??€N? ÐØ ?R??N  e Kronos~ [Nattana S2] , Bouncers : Avengers , iHunter , CHUCK-LEE , iWalkerPro e Special-Agent-Wolf", "/me No Ask FAN , No use CAPS , Cant ask for staff positions", "/me Ola eu falo as regras da sala , porfavor respeite todas as regras ! para nao ser banido da sala! ", "/me Esta com duvidas? peça ajuda a um STAFF/Do you have questions? ask a STAFF", "/me Use AUTOWOOT e veja o tutorial dele  : goo.gl/bBTzrc", "/me Não crie brigas , ajude sempre a sala , ajudando os STAFF e tambem sendo amigalvel :D ", ];

m = Math.floor(Math.random() * msgs.length);
API.sendChat(msgs[m]);		  
			  
}


API.on(API.CHAT_COMMAND, command);
function command(value)
{
	switch(value)
	{
		case "/stopchat":
		clearInterval(intervalMessage);
		API.chatLog("FanBOT CHAT OFFLINE => BOT ONNLINE", alert)
		break;
		
		case "/restart":
	    intervalMessage = setInterval(function(){message();},240000);
		break;
		
		case "/fans?":
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

