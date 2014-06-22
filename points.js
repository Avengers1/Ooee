//Throw this in your console tab, F12 at browser then console tab. Refresh your page to unload the script.
//commands = /uid @:name:, example: /uid @Isly | chat reply 'User @Isly statistics: djPoints: 10691 | listenerPoints: 11415 | fans: 289 | grabPoints: 513'
API.on(API.CHAT_COMMAND, command); 
function command(value) {

	if(value.indexOf("/ver @") >=0)
	{
		userIdCommand(value);
	}
}
 
	function userIdCommand(data)
	{
		var name = data.substr(6).trim();
		var pos = checkUsername(name);
		if(pos != null){
			var id = getUserId(name);
			var points = API.getUser(id).djPoints;
	   		var listenerPoints = API.getUser(id).listenerPoints;
	   		var fans = API.getUser(id).fans;
	   		var curatorPoints = API.getUser(id).curatorPoints;
			API.chatLog(" O Id do usuario " + name + " é : " + id);
			API.chatLog("Usuario @" + name + "  Pontos Tocando: " + points + " / Pontos Avaliando: " + listenerPoints + " / Fans: " + fans + " / Pontos de Grab: " + curatorPoints);
		}
	}

	function checkUsername(name)
	{
		var userlist = API.getUsers();
	
		for(var i=0; i < userlist.length; i++)
		{
			if(userlist[i].username == name)
			{
				var pos = i;
				break;
			}else{
				var pos = null;
			}
		}
		return pos;
	}

	function getUserId(name)
	{
		var userlist = API.getUsers();
	
		for(var i=0; i < userlist.length; i++)
		{
			if(userlist[i].username == name)
			{
				var userid = userlist[i].id;
				break;
			}
		}
		return userid;
	}
