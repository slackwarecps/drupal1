<?php
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="<?php print $language->language ?>" xml:lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">

<head>
  <?php print $head ?>
  <title><?php print $head_title ?></title>
  <?php print $styles ?>
  <?php print $scripts ?>
  <script type="text/javascript"><?php /* Needed to avoid Flash of Unstyle Content in IE */ ?> </script>
</head>
<body>
<!--body inicio Clarus-->


<div id="pagina">
	<div id="esquerda">
      <!--logo-->
       <?php if ($logo) { ?><a href="<?php print $front_page ?>" title="<?php print t('Home') ?>"><img src="<?php print $logo ?>" alt="<?php print t('Home') ?>" /></a><?php } ?>        
		<!-- Menu -->
      <?php if ($left) { ?>
      <?php print $left ?>
      <?php } ?>
      <?php if (isset($principal)) { ?><?php print theme('links', $principal, array('class' => 'links', 'id' => 'navlist')) ?><?php } ?>
      <?php print $search_box ?>
      		
      <?php if (isset($secondary_links)) { ?><?php print theme('links', $secondary_links, array('class' => 'links', 'id' => 'subnavlist')) ?><?php } ?>
      <?php if (isset($primary_links)) { ?><?php print theme('links', $primary_links, array('class' => 'links', 'id' => 'navlist')) ?><?php } ?>


		
		<!--Admin Information Box -->        
        <div id="adminarea" ><?php if ($adminarea) { ?>
			<?php print $adminarea ?>
            <?php } ?>
        </div>        
	</div>
    
    
	<div id="direita">	
        <div class="bug"><?php if ($bug) { ?>
			<?php print $bug ?>
            <?php } ?>
        </div>
	    <!--Header-->
        <div><?php print $header ?></div>
		
        <div class="topo">
			<div style="width: 100%; height:20px; text-align:right; font-size:11px; border-bottom:1px solid #DDD;">
                <a style="line-height: 20px; width: 100px; text-align:center; display:block; float:right;background: #DDD; color:#CC0000;" href="logout.php">Logout</a>
                <div style="float:right; margin-right: 20px;">
				campinas,12,de, fff, de 1012
                </div>
            </div>
			<img src="<?php print path_to_theme(); ?>/imagens/img_sistema.gif" style="margin: 35px 0 10px 20px; float:left;" />
			<img class="foto" height="100px" style="margin:1px;" src="<?php print path_to_theme(); ?>/imagens<?php if (isset($_SESSION['foto'])) echo $_SESSION['foto'];?>" />
	        <?php if ($topo) { ?>
				<?php print $topo ?>
            <?php } ?>            
		</div>
		
		<div class="info">
			<div style="float:left; color:#FFF;">
            Bem vindo 
                  
	        <?php if ($info) { ?>
				<?php print $info ?>
            <?php } ?>          
            <!--breadcumb here -->   
            <?php print $breadcrumb ?>    
			</div>
			<!--vendas/alertaoco.php here -->
		</div>
		<div id="conteudo">     
        <?php if ($conteudo) { ?>
			<?php print $conteudo ?>
            <?php } ?>
                
			<!-- Representantes Area-->	
            <h1 class="title"><?php print $title ?></h1>
            <div class="tabs"><?php print $tabs ?></div>
            <?php if ($show_messages) { print $messages; } ?>
            <?php print $help ?>
            <?php print $content; ?>
            <?php print $feed_icons; ?>            		
		</div>		        
		</div>
</div>	

<?php print $closure ?>
</body>
</html>