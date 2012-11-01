$(".distritos").hide();
$(".hoteis").hide();

$("#hoteis").addClass('seta_down');
$("#distritos").addClass('seta_down');


$("#distritos").click(function() {
	if ($(".distritos").is(':visible')){
		$(".distritos").slideUp('fast');
		$("#distritos").removeClass('seta_up');
	} else{;
		$(".distritos").slideDown('fast');
		$("#distritos").addClass('seta_up');
	};
});

$("#hoteis").click(function() {
	if ($(".hoteis").is(':visible')){
		$(".hoteis").slideUp('fast');
		$("#hoteis").removeClass('seta_up');
	} else{;
		$(".hoteis").slideDown('fast');
		$("#hoteis").addClass('seta_up');
	};
});


//The goal of this rule is handle the beahavior of cad_usuario page
function frmcaduser_save(){	

	$('#div_retorno_ajax').html(' ');
	var passou = true;
	//only if this user is a Vendor type
	if ($('#id_depto').val()=='VENDA'){		
		$.ajaxSetup({
		async: false
		});
		//validate the field if it has empty spaces or if it has not initialized.	
		if ($.trim($('#cod_crm').val()).length==0){
			alert('CRM vazio por favor informe o CRM');
			$('#div_retorno_ajax').append('<img src="../imagens/alerta.png"> Falta o CRM!!');
			passou = false;
		}else{			
			//valida CRM no Banco
			$.getJSON('../php/validacoes_dinamicas.php',{pcrm: $('#cod_crm').val(),plogin: $('#login').val()},function(retorno) {
			console.log(retorno);
			var scrm = retorno[0];
			var slogin = retorno[1];
			if (scrm>0){
				$('#div_retorno_ajax').append('<img src="../imagens/alerta.png"> Já existe um outro usuário '+slogin+' com esse CRM '+scrm+' tente outro CRM!!<br>');
				passou = false;
				}
			else{
				$('#div_retorno_ajax').append('<img src="../imagens/checkgreen.png"> CRM validado!<br>');
			}
    });			
			
		}
		//depto
		//validate the field if it has empty spaces or if it has not initialized.	
		if ($.trim($('#id_depto').val()).length==0){
			alert('ID DEPTO vazio por favor informe o ID DEPTO');
			passou = false;
		}
		//end of depto
		
		//new
				//validate the field if it has empty spaces or if it has not initialized.	
		if ($.trim($('#area').val()).length==0){
			alert('AREA vazio por favor informe o AREA');
			passou = false;
		}else{
			//valida Funcao/Area no Banco
			$.getJSON('../php/validacoes_dinamicas.php',{pcomando:'valida_funcao',pfuncao: $('#funcao').val(),plogin: $('#login').val()},function(retornof) {
			console.log(retornof);
			var sret = retornof[0];//retorno 0=Ok,1=veio alguma coisa
			var sfuncao = retornof[1];
			var slogin = retornof[2];
			if (sret>0){
				$('#div_retorno_ajax').append('<img src="../imagens/alerta.png"> Já existe um outro usuário '+slogin+' com essa Função/Area '+sfuncao+' tente outra Função/Area!!<br>');
				passou = false;
				}
			else{
				$('#div_retorno_ajax').append('<img src="../imagens/checkgreen.png"> Função/Area validado!<br>');
			}
			
			});
		}

		//end of new
		
	}//end of salesperson
	
	
	//senha
	if ($("#senha").val()!=$("#senha_confirmacao").val()){
		alert('senha diferente');	
		passou = false;
	}
	//retrive the condition
	return passou;
}

function frm_cad_usuario_separa_valores(combobox){
	var option = $('#cmb_area option:selected').html();	
    var sPart1=option.slice(0,1);
	var sPart2=option.slice(1,option.length);
	var sPart3 = sPart1+sPart2;
	//alert( sPart1 +' '+sPart2 +' '+option);
	$('#area','#form_edit_usuario').val(sPart1);
	$('#area_numero','#form_edit_usuario').val(sPart2);
	$('#funcao','#form_edit_usuario').val(sPart3);
}

function frm_cad_usuario_id_depto_Change(){
	//Modifica a tela conforme muda esse campo
	if ($('#id_depto','#form_edit_usuario').val() != 'VENDA'){
		$('#cod_crm','#form_edit_usuario').hide();
		$('#cmb_area','#form_edit_usuario').hide();
	}else{
		$('#cod_crm','#form_edit_usuario').show();
		$('#cmb_area','#form_edit_usuario').show();		
	}	
}

//End of CAD USUARIO FUNCTIONS




$(document).ready(function() {
						   
	//ZOOM Mapas
	hs.graphicsDir = 'imagens/mapas/graphics/';
	hs.wrapperClassName = 'wide-border';
						   
						   
	$("#l_clarus").hover(function() {
		document.getElementById("l_clarus").src = "imagens/l_clarus.gif";
	}, function() {
		document.getElementById("l_clarus").src = "imagens/l_clarus_cinza.gif";
	});
	$("#l_clarus_agro").hover(function() {
		document.getElementById("l_clarus_agro").src = "imagens/l_clarus_agro.gif";
	}, function() {
		document.getElementById("l_clarus_agro").src = "imagens/l_clarus_agro_cinza.gif";
	});
	$("#l_clarus_property").hover(function() {
		document.getElementById("l_clarus_property").src = "imagens/l_clarus_property.gif";
	}, function() {
		document.getElementById("l_clarus_property").src = "imagens/l_clarus_property_cinza.gif";
	});
	$("#l_clarus_image").hover(function() {
		document.getElementById("l_clarus_image").src = "imagens/l_clarus_image.gif";
	}, function() {
		document.getElementById("l_clarus_image").src = "imagens/l_clarus_image_cinza.gif";
	});
	$("#l_clarus_water").hover(function() {
		document.getElementById("l_clarus_water").src = "imagens/l_clarus_water.gif";
	}, function() {
		document.getElementById("l_clarus_water").src = "imagens/l_clarus_water_cinza.gif";
	});
	$("#l_clarus_green").hover(function() {
		document.getElementById("l_clarus_green").src = "imagens/l_clarus_green.gif";
	}, function() {
		document.getElementById("l_clarus_green").src = "imagens/l_clarus_green_cinza.gif";
	});
	$("#l_kelpie").hover(function() {
		document.getElementById("l_kelpie").src = "imagens/l_kelpie.gif";
	}, function() {
		document.getElementById("l_kelpie").src = "imagens/l_kelpie_cinza.gif";
	});
});



Date.dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

Date.abbrDayNames = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

Date.monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

Date.abbrMonthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

/**
 * The first day of the week for this locale.
 *
 * @name firstDayOfWeek
 * @type Number
 * @cat Plugins/Methods/Date
 * @author Kelvin Luck
 */
Date.firstDayOfWeek = 1;

Date.format = 'dd/mm/yyyy';
//Date.format = 'mm/dd/yyyy';
//Date.format = 'yyyy-mm-dd';
//Date.format = 'dd mmm yy';

/**
 * The first two numbers in the century to be used when decoding a two digit year. Since a two digit year is ambiguous (and date.setYear
 * only works with numbers < 99 and so doesn't allow you to set years after 2000) we need to use this to disambiguate the two digit year codes.
 *
 * @name format
 * @type String
 * @cat Plugins/Methods/Date
 * @author Kelvin Luck
 */
Date.fullYearStart = '20';

(function() {

	/**
	 * Adds a given method under the given name 
	 * to the Date prototype if it doesn't
	 * currently exist.
	 *
	 * @private
	 */
	function add(name, method) {
		if( !Date.prototype[name] ) {
			Date.prototype[name] = method;
		}
	};
	
	/**
	 * Checks if the year is a leap year.
	 *
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.isLeapYear();
	 * @result true
	 *
	 * @name isLeapYear
	 * @type Boolean
	 * @cat Plugins/Methods/Date
	 */
	add("isLeapYear", function() {
		var y = this.getFullYear();
		return (y%4==0 && y%100!=0) || y%400==0;
	});
	
	/**
	 * Checks if the day is a weekend day (Sat or Sun).
	 *
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.isWeekend();
	 * @result false
	 *
	 * @name isWeekend
	 * @type Boolean
	 * @cat Plugins/Methods/Date
	 */
	add("isWeekend", function() {
		return this.getDay()==0 || this.getDay()==6;
	});
	
	/**
	 * Check if the day is a day of the week (Mon-Fri)
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.isWeekDay();
	 * @result false
	 * 
	 * @name isWeekDay
	 * @type Boolean
	 * @cat Plugins/Methods/Date
	 */
	add("isWeekDay", function() {
		return !this.isWeekend();
	});
	
	/**
	 * Gets the number of days in the month.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getDaysInMonth();
	 * @result 31
	 * 
	 * @name getDaysInMonth
	 * @type Number
	 * @cat Plugins/Methods/Date
	 */
	add("getDaysInMonth", function() {
		return [31,(this.isLeapYear() ? 29:28),31,30,31,30,31,31,30,31,30,31][this.getMonth()];
	});
	
	/**
	 * Gets the name of the day.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getDayName();
	 * @result 'Saturday'
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getDayName(true);
	 * @result 'Sat'
	 * 
	 * @param abbreviated Boolean When set to true the name will be abbreviated.
	 * @name getDayName
	 * @type String
	 * @cat Plugins/Methods/Date
	 */
	add("getDayName", function(abbreviated) {
		return abbreviated ? Date.abbrDayNames[this.getDay()] : Date.dayNames[this.getDay()];
	});

	/**
	 * Gets the name of the month.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getMonthName();
	 * @result 'Janurary'
	 *
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getMonthName(true);
	 * @result 'Jan'
	 * 
	 * @param abbreviated Boolean When set to true the name will be abbreviated.
	 * @name getDayName
	 * @type String
	 * @cat Plugins/Methods/Date
	 */
	add("getMonthName", function(abbreviated) {
		return abbreviated ? Date.abbrMonthNames[this.getMonth()] : Date.monthNames[this.getMonth()];
	});

	/**
	 * Get the number of the day of the year.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getDayOfYear();
	 * @result 11
	 * 
	 * @name getDayOfYear
	 * @type Number
	 * @cat Plugins/Methods/Date
	 */
	add("getDayOfYear", function() {
		var tmpdtm = new Date("1/1/" + this.getFullYear());
		return Math.floor((this.getTime() - tmpdtm.getTime()) / 86400000);
	});
	
	/**
	 * Get the number of the week of the year.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getWeekOfYear();
	 * @result 2
	 * 
	 * @name getWeekOfYear
	 * @type Number
	 * @cat Plugins/Methods/Date
	 */
	add("getWeekOfYear", function() {
		return Math.ceil(this.getDayOfYear() / 7);
	});

	/**
	 * Set the day of the year.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.setDayOfYear(1);
	 * dtm.toString();
	 * @result 'Tue Jan 01 2008 00:00:00'
	 * 
	 * @name setDayOfYear
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("setDayOfYear", function(day) {
		this.setMonth(0);
		this.setDate(day);
		return this;
	});
	
	/**
	 * Add a number of years to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addYears(1);
	 * dtm.toString();
	 * @result 'Mon Jan 12 2009 00:00:00'
	 * 
	 * @name addYears
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addYears", function(num) {
		this.setFullYear(this.getFullYear() + num);
		return this;
	});
	
	/**
	 * Add a number of months to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addMonths(1);
	 * dtm.toString();
	 * @result 'Tue Feb 12 2008 00:00:00'
	 * 
	 * @name addMonths
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addMonths", function(num) {
		var tmpdtm = this.getDate();
		
		this.setMonth(this.getMonth() + num);
		
		if (tmpdtm > this.getDate())
			this.addDays(-this.getDate());
		
		return this;
	});
	
	/**
	 * Add a number of days to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addDays(1);
	 * dtm.toString();
	 * @result 'Sun Jan 13 2008 00:00:00'
	 * 
	 * @name addDays
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addDays", function(num) {
		//this.setDate(this.getDate() + num);
		this.setTime(this.getTime() + (num*86400000) );
		return this;
	});
	
	/**
	 * Add a number of hours to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addHours(24);
	 * dtm.toString();
	 * @result 'Sun Jan 13 2008 00:00:00'
	 * 
	 * @name addHours
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addHours", function(num) {
		this.setHours(this.getHours() + num);
		return this;
	});

	/**
	 * Add a number of minutes to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addMinutes(60);
	 * dtm.toString();
	 * @result 'Sat Jan 12 2008 01:00:00'
	 * 
	 * @name addMinutes
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addMinutes", function(num) {
		this.setMinutes(this.getMinutes() + num);
		return this;
	});
	
	/**
	 * Add a number of seconds to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addSeconds(60);
	 * dtm.toString();
	 * @result 'Sat Jan 12 2008 00:01:00'
	 * 
	 * @name addSeconds
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addSeconds", function(num) {
		this.setSeconds(this.getSeconds() + num);
		return this;
	});
	
	/**
	 * Sets the time component of this Date to zero for cleaner, easier comparison of dates where time is not relevant.
	 * 
	 * @example var dtm = new Date();
	 * dtm.zeroTime();
	 * dtm.toString();
	 * @result 'Sat Jan 12 2008 00:01:00'
	 * 
	 * @name zeroTime
	 * @type Date
	 * @cat Plugins/Methods/Date
	 * @author Kelvin Luck
	 */
	add("zeroTime", function() {
		this.setMilliseconds(0);
		this.setSeconds(0);
		this.setMinutes(0);
		this.setHours(0);
		return this;
	});
	
	/**
	 * Returns a string representation of the date object according to Date.format.
	 * (Date.toString may be used in other places so I purposefully didn't overwrite it)
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.asString();
	 * @result '12/01/2008' // (where Date.format == 'dd/mm/yyyy'
	 * 
	 * @name asString
	 * @type Date
	 * @cat Plugins/Methods/Date
	 * @author Kelvin Luck
	 */
	add("asString", function(format) {
		var r = format || Date.format;
		if (r.split('mm').length>1) { // ugly workaround to make sure we don't replace the m's in e.g. noveMber
			r = r.split('mmmm').join(this.getMonthName(false))
				.split('mmm').join(this.getMonthName(true))
				.split('mm').join(_zeroPad(this.getMonth()+1))
		} else {
			r = r.split('m').join(this.getMonth()+1);
		}
		r = r.split('yyyy').join(this.getFullYear())
			.split('yy').join((this.getFullYear() + '').substring(2))
			.split('dd').join(_zeroPad(this.getDate()))
			.split('d').join(this.getDate());
		return r;
	});
	
	/**
	 * Returns a new date object created from the passed String according to Date.format or false if the attempt to do this results in an invalid date object
	 * (We can't simple use Date.parse as it's not aware of locale and I chose not to overwrite it incase it's functionality is being relied on elsewhere)
	 *
	 * @example var dtm = Date.fromString("12/01/2008");
	 * dtm.toString();
	 * @result 'Sat Jan 12 2008 00:00:00' // (where Date.format == 'dd/mm/yyyy'
	 * 
	 * @name fromString
	 * @type Date
	 * @cat Plugins/Methods/Date
	 * @author Kelvin Luck
	 */
	Date.fromString = function(s)
	{
		var f = Date.format;
		
		var d = new Date('01/01/1970');
		
		if (s == '') return d;

		s = s.toLowerCase();
		var matcher = '';
		var order = [];
		var r = /(dd?d?|mm?m?|yy?yy?)+([^(m|d|y)])?/g;
		var results;
		while ((results = r.exec(f)) != null)
		{
			switch (results[1]) {
				case 'd':
				case 'dd':
				case 'm':
				case 'mm':
				case 'yy':
				case 'yyyy':
					matcher += '(\\d+\\d?\\d?\\d?)+';
					order.push(results[1].substr(0, 1));
					break;
				case 'mmm':
					matcher += '([a-z]{3})';
					order.push('M');
					break;
			}
			if (results[2]) {
				matcher += results[2];
			}
			
		}
		var dm = new RegExp(matcher);
		var result = s.match(dm);
		for (var i=0; i<order.length; i++) {
			var res = result[i+1];
			switch(order[i]) {
				case 'd':
					d.setDate(res);
					break;
				case 'm':
					d.setMonth(Number(res)-1);
					break;
				case 'M':
					for (var j=0; j<Date.abbrMonthNames.length; j++) {
						if (Date.abbrMonthNames[j].toLowerCase() == res) break;
					}
					d.setMonth(j);
					break;
				case 'y':
					d.setYear(res);
					break;
			}
		}

		return d;
	};
	
	// utility method
	var _zeroPad = function(num) {
		var s = '0'+num;
		return s.substring(s.length-2)
		//return ('0'+num).substring(-2); // doesn't work on IE :(
	};
	
})();


$(function(){
	$('.inputboxcal').datePicker({
		startDate: '01/01/1935',
		endDate: (new Date()).asString()
		}
	);
	$('.inputboxcal2').datePicker();
	$('.inputboxcal3').datePicker({
		startDate: '01/01/1935'
		}
	);
});


