var isDOM = (document.getElementById ? true : false); 
var isIE4 = ((document.all && !isDOM) ? true : false);
var isNS4 = (document.layers ? true : false);

function getRef(id)
{
	if (isDOM) return document.getElementById(id);
	if (isIE4) return document.all[id];
	if (isNS4) return document.layers[id];
}

var isNS = navigator.appName == "Netscape";

function moveRightEdge()
{
	var yMenuFrom, yMenuTo, yOffset, timeoutNextCheck;
	if (isNS4)
	{
		yMenuFrom   = esquerda.top;
		yMenuTo     = windows.pageYOffset + 100;   // up
	}
	else if (isDOM)
	{
		yMenuFrom   = parseInt (esquerda.style.top, 10);
		yMenuTo     = (isNS ? window.pageYOffset : document.body.scrollTop) + 5; // up
	}

	timeoutNextCheck = 500;

	if (yMenuFrom != yMenuTo)
	{
		yOffset = Math.ceil(Math.abs(yMenuTo - yMenuFrom) / 20);
		if (yMenuTo < yMenuFrom)
			yOffset = -yOffset;
		if (isNS4)
			esquerda.top += yOffset;
		else if (isDOM)
			esquerda.style.top = parseInt (esquerda.style.top, 10) + yOffset;
			timeoutNextCheck = 10;
	}
	setTimeout ("moveRightEdge()", timeoutNextCheck);
}