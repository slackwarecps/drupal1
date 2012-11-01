<?
session_start();

function envia_email($destinatario, $assunto, $msg)
{
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-15\n";
	$headers .= "From: "; 
	$headers .= "Web @ CLARUS Technology <web@clarusbrasil.com.br>\n";

	if (@mail($destinatario, $assunto, $msg, $headers)) 
		echo " ::  ".date('H:i:s')."\n";
	else 
		echo " ::  ".date('H:i:s')."\n";
	
	sleep(5);

}


function entra()
{	 
//	include(DIRETORIO_PHP.'conf.php');
	nin_db("acesso");	
	
	$tipo = $_GET['tipo'];
	$id   = $_GET['id'];
	
	if($_GET['id']=="")
		echo"<script language=javascript>location.href='index.php?op=ac_mov&op2=es_magic'</script>";
	else
	{
		
		if ($tipo=='fun')
			$res = mysql_query("select tipo, depto_destino, veiculo, placa, id_empresa from nin_funcionario where id = '".$id."'");
		else if ($tipo=='pes')
			$res = mysql_query("select tipo, depto_destino, veiculo, placa, id_empresa from nin_pessoa where id = '".$id."'");
		
		$lin = mysql_fetch_array($res);
		
		$data_now = date("Y-m-d");
		
		mysql_query ("insert into nin_movimentacao (id_tipo, id_individuo, data_entrada, hora_entrada, depto_destino, id_veiculo, placa, status, id_empresa) values ('".$lin['tipo']."', '$id', now(),  now(), '".$lin['depto_destino']."', '".$lin['veiculo']."', '".$lin['placa']."', '1', '".$lin['id_empresa']."')");
	
		if ($tipo=='fun')
			$query1="update nin_funcionario set presente = 's' where id = '".$id."'";
		else
			$query1="update nin_pessoa set presente = 's' where id = '".$id."'";	
	
		mysql_query($query1);
		
		if (($id == "2194")&&($tipo=='fun'))
			//envia_email ("testelink@clarus.ind.br", "LINK ONLINE!", "LINK ONLINE! <br><img src='http://intranet2.clarus.ind.br/img_est/netojust.jpg' width=50% height=50%><br>- meu vô chegou...");	
			envia_email ("testelink@clarus.ind.br", "LINK ONLINE!", "LINK ONLINE! ");				
		
		
		echo"<script language=javascript>location.href='../index.php?op=ac_mov&op2=es_magic'</script>";
		
	}

}

include(DIRETORIO_PHP.'func_check.php');
$menu = array();
$menu = pega_perm_menu();

//echo $menu['ac_mov'];

if ($menu['ac_mov'] == 0)
	echo "Área de acesso restrito! <br>";
else if ($menu['ac_mov'] > 0)
	entra();


?>