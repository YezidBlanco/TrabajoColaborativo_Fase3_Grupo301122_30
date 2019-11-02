//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Es un sistema de control de versiones","Git se distribuye","¿Qué comando es necesario para crear un repositorio?","Si deseas obtener una copia de un repositorio Git existente en GitHub, el comando que necesitas es :","¿Cuál es el comando utilizado para listar los cambios (commits) que han producido en el repositorio?","Para añadir contenido al área de preparación (staging area), utilizo el siguiente comando:"];
var answers1=["MWdpdA","MEdpdGh1Yg","MEhUTUw1","MENTUzM"];
var answers2=["MUdyYXR1aXRhbWVudGUgeSBj82RpZ28gYWJpZXJ0bw","MFZlcnNpb24gcGFnbyB5IGPzZGlnbyBjZXJyYWRvLg","MEVuIHVuIGFyY2hpdm8gcGFyYSBkZXNjYXJnYXI","MEdyYXRpcyB5IGNvZGlnbyBjZXJyYWRv"];
var answers3=["MWdpdCBpbml0","MGdpdCBjb25maWc","MGdpdCBzdGF0dXM","MGdpdCBhZGQ"];
var answers4=["MWdpdCBjbG9uZQ","MGdpdCBjb21taXQ","MGdpdCBhZGQ","MGdpdCBsb2c"];
var answers5=["MWdpdCBsb2c","MGdpdCBpbml0","MGdpdCB0YWc","MGdpdCBzdGF0dXM"];
var answers6=["MWdpdCBhZGQ","MGdpdCBwdXNo","MGdpdCBkaWZm","MGdpdCBjb21taXQ"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6];
var err=["No es la resppuesta correcta","No es la resppuesta correcta","No es la resppuesta correcta","No es la resppuesta correcta","No es la resppuesta correcta","No es la resppuesta correcta"];
var ima=["","","","","",""];
var mp4=["","","","","",""];
var ogv=["","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad1_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
