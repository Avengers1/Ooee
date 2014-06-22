 $(document).ready(function(){

//When script loads
javascript:API.chatLog(AUTOFAN - Ligado Versão 1.6",false);API.chatLog("Editado por - Sonic ",true);API.chatLog("Para ver os comandos digite /comandos ", false);API.chatLog("Qualquer coisa me adicione no facebook: https://www.facebook.com/MateusVicentin ", false);
javascript:(function(){$.getScript('https://raw.githubusercontent.com/tiosonic/Scripts/scripitsonic/points.js');}());
javascript:(function(){$.getScript('https://raw.githubusercontent.com/tiosonic/Scripts/scripitsonic/verificador.js');}());
javascript:(function(){$.getScript('https://raw.githubusercontent.com/tiosonic/Scripts/scripitsonic/StatusBranco.js');}());
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
var intervalMessage = setInterval(function(){message();},310000);

function message(){
var m, msgs;
msgs = ["/me Eu troco fan, alguem afim? :v:", "/me Alguem afim de trocar fan?,so mencionar :3", "/me Troco fan, so avisar <3", "/me Troco fan,retribuo na HORA GO? :+1:", "/me Alguem quer trocar fan? so virar e avisar que retribuo na HORA :warning:", "/me QUERO FANS, bora trocar amiguinho? <3", "/me Vamos trocar fan? so avisar quem quiser", "/me Vira fan? eu retribuo :+1:", "/me Fan for fan,vira fan que eu retribuo", "/me Se você esta lendo isso, eu quero saber se você troca fan, so virar e avisar <3", "/me Ai amigo bora trocar um fan e pa?", "/me Fan 4 fan, gogogogo trocar fan?", "/me Quero trocar fans, ta afim?", "/me Ai eu troco fan, so avisar quem quiser ok?", "/me Fans... Alguem ai quer trocar?"];

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
		API.chatLog("Tem certeza que quer parar de mendigar?", true)
		break;

		case "/reiniciar":
	    intervalMessage = setInterval(function(){message();},310000);API.chatLog("Bot Reiniciando em ",true);API.chatLog("3..2..1",true);API.chatLog("Troco Fans - Ligado V.1.6",false);API.chatLog("Editado por - Avengers ",false);API.chatLog("Para ver os comandos digite /comandos ", false);API.chatLog("Qualquer coisa me adicione no facebook: https://www.facebook.com/MateusVicentin ", false);
		break;

		case "/comandos":
		//API.sendChat(total + " People fanned since launched");
		API.chatLog (" Comandos: /desligar : Desliga o bot. /reiniciar : Reinicia o bot /chat : Falara uma frase aleatoria. /ver @usuario : Ver as Estaticas do Usuario. /check @usuario : Ver se aquela pessoa é ou não seu fã. /update Veja qual foi a ultima coisa adicionada", true)
		break;

		case "/update":
		//API.sendChat(total + " People fanned since launched");
		API.chatLog ("5 Novas falas :D", true)
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
