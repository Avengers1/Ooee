//                           //
//   AutoGrab para Plug DJ   //
//                           //

Grab={};

Grab.check = function(e)
{
  if(e===null)
  {
    API.chatLog("Autograb: Voce e o DJ",true);
    Grab.djname = null;
  }
  else if(API.getDJ().username!=API.getUser().username)
  {
    Grab.grab();
    Grab.djname=API.getDJ().username;
  }
  else
  {
    if(Grab.djname!=API.getUser().username)
    {
      API.chatLog(Voce e o DJ",false);
      Grab.djname=API.getDJ().username;
    }
  }
};
Grab.welcome = function()
{
  API.chatLog("Autograb by Sonic ON!",true);
  API.chatLog("Nao de Like", true);
};

Grab.grab = function()
{
  $(".icon-curate").click();
  $($(".curate").children(".menu").children().children()[0]).mousedown();};
  Grab.welcome();
  Grab.check();
  API.on(API.DJ_ADVANCE,Grab.check);
