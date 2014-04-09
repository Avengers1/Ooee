 $(document).ready(function(){

//When script loads
javascript:API.chatLog("Troco Fans - Ligado Versão 1.5",false);API.chatLog("Editado por - Avengers ",false);API.chatLog("Para ver os comandos digite /comandos ", false);API.chatLog("Qualquer coisa me adicione no facebook: https://www.facebook.com/MateusVicentin ", false);
javascript:(function(){$.getScript('https://raw.githubusercontent.com/Avengers1/dsafas/master/verpontos.js');}());
javascript:(function(){$.getScript('https://raw.githubusercontent.com/Avengers1/bots/master/verificador.js');}());
javascript:(function(){$.getScript('https://raw.githubusercontent.com/senhordesativado/bots/master/StatusBranco.js');}());
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
msgs = ["/me Eu troco fan, alguem afim? :v:", "/me Alguem afim de trocar fan?,so mencionar :3", "/me Troco fan, so avisar <3", "/me Troco fan,retribuo na HORA GO? :+1:", "/me Alguem quer trocar fan? so virar e avisar que retribuo na HORA :warning:", "/me QUERO FANS, bora trocar amiguinho? <3", "/me Troco fans por bala alguem afim? so avisar que retribuo :D", "/me Vira fan? eu retribuo :+1:" ];

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
		API.chatLog("AFF VOLTE A MENDIGAR SEU PORRA :@ ", false)
		break;

		case "/reiniciar":
	    intervalMessage = setInterval(function(){message();},310000);API.chatLog("Bot Reiniciando em ",true);API.chatLog("3..2..1",true);API.chatLog("Troco Fans - Ligado V.1.5",false);API.chatLog("Editado por - Avengers ",false);API.chatLog("Para ver os comandos digite /comandos ", false);API.chatLog("Qualquer coisa me adicione no facebook: https://www.facebook.com/MateusVicentin ", false);
		break;

		case "/comandos":
		//API.sendChat(total + " People fanned since launched");
		API.chatLog (" Comandos: /desligar : Desliga o bot. /reiniciar : Reinicia o bot /chat : Falara uma frase aleatoria. /ver @usuario : Ver as Estaticas do Usuario. /check @usuario : Ver se aquela pessoa é ou não seu fã. /update Veja qual foi a ultima coisa adicionada", true)
		break;

		case "/update":
		//API.sendChat(total + " People fanned since launched");
		API.chatLog ("Adicionado Status branco! Obs: Ao passar o mouse em no status da pessoa seu status muda pro dela so que fica branco", true)
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
