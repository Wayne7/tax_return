function clear_najem1() {
	$(document).ready(function(){
	  $("#najem1").focus(function(){
			$('#prijmyZnajmu2').val('');
 		 	$('#prijmyZnajmuNemovitychVeci2').val('');
 		 	$('#vydajeNaNajem2').val('');
			$('#zaplaceneZalohyNajem2').val('');
	 });
	});
}

function clear_najem2() {
	$(document).ready(function(){
	  $("#najem2").click(function(){
			$('#prijmyZnajmu1').val('');
 		 	$('#prijmyZnajmuNemovitychVeci1').val('');
 		 	$('#vydajeNaNajem1').val('');
			$('#zaplaceneZalohyNajem1').val('');
	 });
	});
}

function clear_ostatni2() {
	$(document).ready(function(){
	  $("#odebratOstatni2").click(function(){
	   $('#prijmyOstatni2').val('');
	   $('#vydajeOstatni2').val('');
	   $('#cisloRozhodnutiKU2').val('');
	   $('select[name=zdrojPrijmuOstatni2]').val('');
		 $('select[name=kodOstatni2]').val('');
	 });
	});
}

function clear_ostatni3() {
	$(document).ready(function(){
	  $("#odebratOstatni3").click(function(){
			$('#prijmyOstatni3').val('');
 	   	$('#vydajeOstatni3').val('');
 	   	$('#cisloRozhodnutiKU3').val('');
 	   	$('select[name=zdrojPrijmuOstatni3]').val('');
 		 	$('select[name=kodOstatni3]').val('');
	 });
	});
}

function clear_ostatni4() {
	$(document).ready(function(){
	  $("#odebratOstatni4").click(function(){
			$('#prijmyOstatni4').val('');
 	   	$('#vydajeOstatni4').val('');
 	   	$('#cisloRozhodnutiKU4').val('');
 	   	$('select[name=zdrojPrijmuOstatni4]').val('');
 		 	$('select[name=kodOstatni4]').val('');
	 });
	});
}

function clear_sazba_cinnost2() {
	$(document).ready(function(){
	  $("#odebrat2").click(function(){
	   $('#prijmySazba2').val('');
	   $('#vydajeSazba2').val('');
	   $('#cinnostSazba2').val('');
	   $('select[name=sazba2]').val('');
	 });
	});
}

function clear_sazba_cinnost3() {
	$(document).ready(function(){
	  $("#odebrat3").click(function(){
	   $('#prijmySazba3').val('');
	   $('#vydajeSazba3').val('');
	   $('#cinnostSazba3').val('');
	   $('select[name=sazba3]').val('');
	 });
	});
}

function clear_sazba_cinnost4() {
	$(document).ready(function(){
	  $("#odebrat4").click(function(){
	   $('#prijmySazba4').val('');
	   $('#vydajeSazba4').val('');
	   $('#cinnostSazba4').val('');
	   $('select[name=sazba4]').val('');
	 });
	});
}

function clear_evidence_cinnost2() {
	$(document).ready(function(){
	  $("#odebrat_evidence2").click(function(){
			$('#prijmyEvidence2').val('');
 		 $('#vydajeEvidence2').val('');
 		 $('#cinnostEvidence2').val('');
	 });
	});
}

function clear_evidence_cinnost3() {
	$(document).ready(function(){
	  $("#odebrat_evidence3").click(function(){
			$('#prijmyEvidence3').val('');
 		 $('#vydajeEvidence3').val('');
 		 $('#cinnostEvidence3').val('');
	 });
	});
}

function clear_evidence_cinnost4() {
	$(document).ready(function(){
	  $("#odebrat_evidence4").click(function(){
			$('#prijmyEvidence4').val('');
 		 $('#vydajeEvidence4').val('');
 		 $('#cinnostEvidence4').val('');
	 });
	});
}

function clear_zamestnani() {
	$(document).ready(function(){
	  $("#zamestnani").click(function(){
	   $('#hrubyPrijemPP').val('');
	   $('#zalohaNaDanPP').val('');
	   $('#danovyBonusPP').val('');
		 $('#pojisteniPP').val('');
	   $('select[name=typPracPomeru]').val('');
	 });
	});
}
