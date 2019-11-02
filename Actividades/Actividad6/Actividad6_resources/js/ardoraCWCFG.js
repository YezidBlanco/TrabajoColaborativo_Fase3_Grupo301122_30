//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkNg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Rg","Tw","Tg","VA","Uw","VA","WQ","TA","RQ","","",""],["Tw","","","","","","","RQ","","","QQ",""],["Tg","","","","","","","VA","","","TA",""],["VA","","Qw","","","","","VA","","","UA",""],["Rg","","TA","SQ","Tg","RQ","SA","RQ","SQ","Rw","SA","VA"],["QQ","","RQ","","","","","Ug","","","QQ",""],["TQ","","QQ","","","","","Uw","","","",""],["SQ","","Ug","","","","","UA","","","",""],["TA","","","","","","","QQ","","","",""],["WQ","","","","","","","Qw","","TQ","",""],["","Qg","Tw","Ug","RA","RQ","Ug","SQ","TQ","QQ","Rw","RQ"],["","","","","","","","Tg","","Ug","",""],["","","","","","","","Rw","","Rw","",""],["","","","","","","","","","SQ","",""],["","","","","","","","","","Tg","",""]];
var x1=[1,8,3,3,2,1,11,10];
var y1=[1,1,5,4,11,1,2,10];
var x2=[9,8,12,3,12,1,11,10];
var y2=[1,13,5,8,11,10,6,15];
var imaCW=["","","","","","","",""];
var audioCW=["","","","","","","",""];
var defCW=["¿Qué propiedad de CSS se emplea para indicar que un texto se debe mostrar en cursiva (itálica)?","¿Qué propiedad de CSS se emplea para definir el espacio entre caracteres en el texto?","¿Qué propiedad de CSS se emplea para definir la altura de una línea de texto?","En CSS, para cancelar los efectos de los elementos \"flotantes\" se emplea la propiedad","En CSS3, ¿qué propiedad se emplea para definir un borde con imagen?","¿Qué propiedad de CSS se emplea para cambiar el tipo de letra de un elemento?","En CSS3, ¿qué significa la \"A\" en RGBA?","En CSS, para definir el espacio entre el borde de un elemento y los elementos que lo rodean se emplea la propiedad"];
var colNum=12;
var rowNum=15;
