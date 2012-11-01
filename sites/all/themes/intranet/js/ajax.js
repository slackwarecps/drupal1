var xmlHttp

function trocaConteudo(pagina){
	
xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)	{
		alert ("Este browser não suporta HTTP Request")
		return
	}

var url="paginas.php"
url=url+"?op="+pagina
url=url+"&sidjs="+Math.random()
xmlHttp.onreadystatechange=stateChanged
xmlHttp.open("GET",url,true)
xmlHttp.send(null)
}

function trocaConteudo(pagina,variavel){
	
xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)	{
		alert ("Este browser não suporta HTTP Request")
		return
	}

var url="paginas.php"
url=url+"?op="+pagina
url=url+"&id="+variavel
url=url+"&sidjs="+Math.random()
xmlHttp.onreadystatechange=stateChanged
xmlHttp.open("GET",url,true)
xmlHttp.send(null)
}

/* Essa função irá exibir o resultado na DIV */
function stateChanged()
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		document.getElementById("conteudo").innerHTML=xmlHttp.responseText
	}
}


/* Instancia */
function GetXmlHttpObject()
{
var objXMLHttp=null

	if (window.XMLHttpRequest)
	{
		objXMLHttp=new XMLHttpRequest()
	}
	else if (window.ActiveXObject)
	{
		objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
	}
return objXMLHttp
}