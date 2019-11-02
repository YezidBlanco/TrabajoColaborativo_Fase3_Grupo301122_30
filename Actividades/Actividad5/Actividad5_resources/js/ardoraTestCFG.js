//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkNQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Integrar en una única hoja de CSS todos los estilos de una web, ¿supone una reducción del tiempo de carga?","Integrar en unica hoja de  CSS todos los estilo de una web, ¡supone una reducción del tiempo de Carga?","¿Es necesario el atributo \"type\" con el valor \"text/css\" en la etiqueta <style>, tal y como se muestra aquí? <br><style type=\"text/css\">","¿Cuál de las siguientes afirmaciones sobre el selector universal de CSS, representado por el asterisco (*), es corecta?","Un elemento con esta propiedad, ¿Que altura tendra?"];
var answers1=["MVN1IG5pdmVsIGRlIHJldXNhYmlsaWRhZCBlcyBudWxvIHkgZGlmaWN1bHRhbiBlbCBtYW50ZW5pbWllbnRvIGRlIGxhIHDhZ2luYS4","MFN1cG9uZW4gdW5hIHBlbmFsaXphY2nzbiBwb3IgcGFydGUgZGUgbG9zIG1vdG9yZXMgZGUgYvpzcXVlZGE","MEFwb3J0YW4gb3JkZW5hIHkgbGVnaWJpbGlkYWQgYWwgZG9jdW1lbnRv"];
var answers2=["MVPtLCB5YSBxdWUgcmVkdWNpcu1hIGVsIG76bWVybyBkZSBwZXRpY2lvbmVzIGFsIHNlcnZpZG9yLg","ME5vIG5lY2VzYXJpYW1lbnRlLCB5YSBxdWUgZWwgcGVzbyB0b3RhbCBkZSBsYSBob2phIPpuaWNhIHF1ZSBpbnRlZ3JhIHRvZG9zIGxvcyBlc3RpbG9zIHNlcu1hIGVsIG1pc21vIHF1ZSBzdW1hcu1hbiwgZW4gdG90YWwsIGxvcyBkaWZlcmVudGVzIGFyY2hpdm9zIGRlIENTUyBpbmRlcGVuZGllbnRlcy4","MFNpLCB5YSBxdWUgc3UgcGVzbyBzZXLtYSBpbmZlcmlvciBkZSBsYSBzdW1hIGRlIHRvZGFzIGxhcyBob2phcyBkZSBDU1MgaW5kZXBlbmRpZW50ZXM"];
var answers3=["MUVsIHZhbG9yIHBvciBkZWZlY3RvIGRlIGVzdGUgYXRyaWJ1dG8gb3BjaW9uYWwgZXMgInRleHQvY3NzIiwgcG9yIGxvIHF1ZSBlcyBpbm5lY2VzYXJpbyBpbmRpY2FybG8","MEVzIHBhcnRlIG5lY2VzYXJpYSBkZSBsYSBldGlxdWV0YSA8c3R5bGU+IHlhIHF1ZSBkZWZpbmUgZWwgdGlwbyBNSU1FIGRlbCBsZW5ndWFqZSBkZSBlc3RpbG8geSBwZXJtaXRlIGFsIG5hdmVnYWRvb3IgaW50ZXJwcmV0YXIgc3UgY29udGVuaWRv"];
var answers4=["MUFtYmFzIGFmaXJtYWNpb25lcyBzb24gY2llcnRhcw","MEFmZWN0YSBhIHRvZG9zIGxvcyBlbGVtZW50b3MgZGUgc3UgYWxjYW5jZSBkZSBmb3JtYSBpbmRpc2NyaW1pbmFkYQ","MFN1cG9uZSB1biBtZW5vciByZW5kaW1pZW50byB5IHJhbGVudGl6YSBsYSBhcGxpY2FjafNuIGRlIGxvcyBlc3RpbG9z","MEFmZWN0YSBhIHRvZG9zIGxvcyBlbGVtZW50b3MgZGUgdXMgYWxjYW5jZSBkZSBmb3JtYSBpbmRpc2NyaW1pbmFkYQ"];
var answers5=["MUVsIGFsdG8gdG90YWwgZGUgbGEgcGFudGFsbGEgZGVsIGRpc3Bvc2l0aXZv","MEVsIGFsdG8gdG90YWwgZGUgc3UgY29udGVuZWRvcg","MCJ2aCIgbm8gZXMgdW5hIHVuaWRhZCBkZSBtZWRpZGEgZW4gQ1NT"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["","","","",""];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad5_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
