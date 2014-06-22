var version = "0.2.1";

var lockDown = false,
    lockRoom = false,
    banMeh   = false,
    chatLog  = false,
    ldperm   = 2;

var chatCount   = 0,
    logCount    = 0,
    deleteCount = 0,
    banCount    = 0;
    
var perms = new Array();
    perms[0]  = new Array(),    perms[0][0]  = "0",     perms[0][1]  = "User",           perms[0][2]  = API.ROLE.USER;
    perms[1]  = new Array(),    perms[1][0]  = "1",     perms[1][1]  = "Resident DJ",    perms[1][2]  = API.ROLE.RESIDENTDJ;
    perms[2]  = new Array(),    perms[2][0]  = "2",     perms[2][1]  = "Bouncer",        perms[2][2]  = API.ROLE.BOUNCER;
    perms[3]  = new Array(),    perms[3][0]  = "3",     perms[3][1]  = "Manager",        perms[3][2]  = API.ROLE.MANAGER;
    perms[4]  = new Array(),    perms[4][0]  = "4",     perms[4][1]  = "Host",           perms[4][2]  = API.ROLE.COHOST;
    perms[8]  = new Array(),    perms[8][0]  = "8",     perms[8][1]  = "Ambassador",     perms[8][2]  = API.ROLE.AMBASSADOR;
    perms[10] = new Array(),    perms[10][0] = "10",    perms[10][1] = "Admin",          perms[10][2] = API.ROLE.ADMIN;

var H = API.BAN.HOUR,
    D = API.BAN.DAY,
    P = API.BAN.PERMA;
    
var mutes = [];

API.on(API.CHAT_COMMAND, chatCommand);
API.on(API.CHAT, chatEvent);
API.on(API.VOTE_UPDATE, voteUpdate); 

_$context.trigger('notify', 'icon-plug-dj', 'AntiTroll Script activated');
console.log("[AntiTroll] Script v" + version + " loaded.");

function chatCommand(value) {
    var res = value.split(" ");
        res[0].toLowerCase();
    
    switch(res[0]) {
        case "/commands":
            API.chatLog("Command list: https://github.com/IgorAntun/plug.dj/blob/master/README.md", true);
            break;

        case "/lockdown":
            console.log(res[1]);
            if(lockDown && res[1] == undefined) {
                API.sendChat("/me Chat lockdown disabled");
                _$context.trigger('notify', 'icon-chat', 'Chat lockdown disabled');
                lockDown = false;
            }
            else {
                if(res[1] == "1" || res[1] == "2" || res[1] == "3" || res[1] == "4" || res[1] == "8")
                    ldperm = res[1];
                else
                    ldperm = 2;
                
                API.sendChat("/me Chat lockdown enabled. Rank needed: " + perms[ldperm][1]);
                _$context.trigger('notify', 'icon-chat', 'Chat lockdown enabled');
                lockDown = true;
            }
            break;

        case "/lockroom":
            if(lockRoom) {
                API.moderateLockWaitList(false);
                _$context.trigger('notify', 'icon-unlocked', 'Room unlocked');
                lockRoom = false;
            }
            else {
                 API.m/oderateLockWaitList(true, true);
                _$context.trigger('notify', 'icon-locked', 'Room locked');
                API.moderateRemoveDJ(API.getDJ().id);
                lockRoom = true;
            }
            break;

        case "/vote":
            if(banMeh) {
                API.sendChat("/me Ban on meh disabled");
                _$context.trigger('notify', 'icon-meh', 'Ban on meh disabled');
                banMeh = false;
            }
            else {
                API.sendChat("/me Ban on meh enabled");
                _$context.trigger('notify', 'icon-meh', 'Ban on meh enabled');
                banMeh = true;
            }
            break;

        case "/mute":
            var name = res[1].substr(1);
                id   = getUser(name);
                
            if(id == null)
                API.chatLog("User not found", true);
            else if(res[2] == undefined)
                muteUser(id);
            else {
                var time = res[2]*1000*60;
                muteUser(name, id, time);
            }
            break;

        case "/unmute":
            var name = res[1].substr(1),
                id   = getUser(name);

            if(id == null)
                API.chatLog("User not found", true);
            else {
                unmuteUser(name, id);
            }
            break;

        case "/ban":
            var name = res[1].substr(1);
                id = getUser(name);

            if(name == null)
                API.chatLog("User not found", true);
            else
                API.moderateBanUser(id, 4, P);
            break;

        case "/chatlog":
            if(chatLog){
                _$context.trigger('notify', 'icon-chat', 'Chat log disabled');
                chatLog = false;
            }
            else {
                _$context.trigger('notify', 'icon-chat', 'Chat log enabled');
                chatLog = true;
            }
            break;

        case "/clearchat":
            var messages = $('#chat-messages').children();
            for (var i = 0; i < messages.length; i++) {
                for (var j = 0; j < messages[i].classList.length; j++) {
                    if (messages[i].classList[j].indexOf('cid-') == 0) {
                        API.moderateDeleteChat(messages[i].classList[j].substr(4));
                        break;
                    }
                }
            }
            break;

        case "/status":
            API.chatLog(chatCount   + " messages sent (Chat)", true);
            API.chatLog(logCount    + " messages logged (ChatLog)", true);
            API.chatLog(deleteCount + " messages deleted (LockDown)", true);
            API.chatLog(banCount    + " users banned (BanOnMeh)", true);
            break;

        case "/unload":
            var reload = res[1];
            console.log(reload);
            shutDown(res[1]);
            break;
    }   
}

function chatEvent(data) {
    chatCount++;

    if(chatLog) {
        var d = new Date(),
            h = addZero(d.getHours()),
            m = addZero(d.getMinutes()),
            s = addZero(d.getSeconds());

        console.log("[LOG] " + data.from + ": " + data.message + " [" + h + ":" + m + ":" + s +"]");
        logCount++;
    }
    
    if(mutes.indexOf(data.fromID) != "-1")
        API.moderateDeleteChat(data.chatID);
        
    if(lockDown) {
        if(API.getUser(data.fromID).permission < perms[ldperm][2]) {
            API.moderateDeleteChat(data.chatID);
            deleteCount++;
        }
    }
}

function voteUpdate(obj) {
    if(banMeh) {
        if(obj.vote == -1) {
            API.moderateBanUser(obj.user.id, 0, API.BAN.HOUR);
            banCount++;
        }
    }
}

function getUser(name) {
    var users = API.getUsers();
    for(var i in users)
        if(users[i].username == name)
            return users[i].id;

    return null;
}

function addZero(i) {
    if (i < 10)
        i = "0" + i;
    return i;
}

function muteUser(name, id, time) {
    var timetxt = time/60000;

    if(mutes.indexOf(id) == "-1") {
        mutes.push(id);
        
        if(time > 0) {
            API.sendChat("/me @" + name + " muted for " + timetxt + " minutes");
            setTimeout(function(){unmuteUser(name, id)}, time);
        }
        else {
            API.sendChat("/me @" + name + " muted");
        }
    }
    else {
        API.chatLog(name + " already muted", true);
    }
}

function unmuteUser(name, id) {
    if(mutes.indexOf(id) != "-1") {
        mutes.splice(mutes.indexOf(id), 1);
        API.sendChat("/me @" + name + " unmuted");
    }
    else {
        API.chatLog(name + " not muted", true);
    }
}

function shutDown(reload) {
    console.log(reload);

    if(reload == "true" || reload == "false") {
        API.off(API.CHAT_COMMAND, chatCommand);
        API.off(API.CHAT, chatEvent);
        API.off(API.VOTE_UPDATE, voteUpdate);

        lockDown = false,
        lockRoom = false,
        banMeh   = false,
        chatLog  = false,
        ldperm   = 2;

        chatCount   = 0,
        logCount    = 0,
        deleteCount = 0,
        banCount    = 0;

        mutes = [];

        if(reload == "true") {
            _$context.trigger('notify', 'icon-refresh-video', 'Reloading AntiTroll Script');
            console.log("[AntiTroll] Reloading");

            setTimeout(function(){ 
                $.getScript('https://raw.githubusercontent.com/IgorAntun/plug.dj/master/antitroll.js')
            }, 1500);
        }
    
        if(reload == "false") {
            _$context.trigger('notify', 'icon-delete', 'AntiTroll Script unloaded');
            console.log("[AntiTroll] Unloaded");
        }
    }
}
//
