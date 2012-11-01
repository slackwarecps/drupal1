var req;
var xmlHttp;

function loadXMLDoc(url,valor)
{
    req = null;
    // Procura por um objeto nativo (Mozilla/Safari)
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
        req.onreadystatechange = processReqChange;
        req.open("GET", url+'?nome='+valor, true);
        req.send(null);
    // Procura por uma versao ActiveX (IE)
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) {
            req.onreadystatechange = processReqChange;
            req.open("GET", url+'?nome='+valor, true);
            req.send();
        }
    }
}

function processReqChange()
{
    // apenas quando o estado for "completado"
    if (req.readyState == 4) {
        // apenas se o servidor retornar "OK"
        if (req.status == 200) {
            // procura pela div id="atualiza" e insere o conteudo
            // retornado nela, como texto HTML
            document.getElementById('pessoa').innerHTML = req.responseText;
        } else {
            alert("Houve um problema ao obter os dados:\n" + req.statusText);
        }
    }
}

function Atualiza_pessoa(valor)
{
    loadXMLDoc("ac/con_pessoas.php",valor);
}

function selectLinha(valor)
{
xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)	{
		alert ("Este browser não suporta HTTP Request")
		return
	}
var url="ac/con_pessoas.php"
url=url+"?nome="+valor
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
		document.getElementById("pessoa").innerHTML=xmlHttp.responseText
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
