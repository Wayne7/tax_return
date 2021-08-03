var totalPrijmy;
var totalVydaje;
var celkovaDan;
var totalRozdil;

function celkem_vydaje() {

	$(document).ready(function(){
		var vydaj1=$("#vydajeSazba");
		var vydaj2=$("#vydajeSazba2");
		var vydaj3=$("#vydajeSazba3");
		var vydaj4=$("#vydajeSazba4");
		var vydaj5=$("#vydajeEvidence");
		var vydaj6=$("#vydajeEvidence2");
		var vydaj7=$("#vydajeEvidence3");
		var vydaj8=$("#vydajeEvidence4");

		$(".vypocet").mouseover(function(){

			if ($("#vydajeSazba").val() !="") {
				totalVydaje = parseInt(vydaj1.val());
				$("#celkemVydajeSazba").val(totalVydaje);
				}

			if ($("#vydajeSazba2").val() !="") {
				totalVydaje = parseInt(vydaj1.val()) + parseInt(vydaj2.val());
				$("#celkemVydajeSazba").val(totalVydaje);
				}

			if ($("#vydajeSazba3").val() !="") {
				totalVydaje = parseInt(vydaj1.val()) + parseInt(vydaj2.val())  + parseInt(vydaj3.val());
				$("#celkemVydajeSazba").val(totalVydaje);
					}

			if ($("#vydajeSazba4").val() !="") {
				totalVydaje = parseInt(vydaj1.val()) + parseInt(vydaj2.val())  + parseInt(vydaj3.val()) + parseInt(vydaj4.val());
				$("#celkemVydajeSazba").val(totalVydaje);
					}

			if ($("#vydajeEvidence").val() !="") {
				totalVydaje = parseInt(vydaj5.val());
				$("#celkemVydajeSazba").val(totalVydaje);
				}

			if ($("#vydajeEvidence2").val() !="") {
				totalVydaje = parseInt(vydaj5.val()) + parseInt(vydaj6.val());
				$("#celkemVydajeSazba").val(totalVydaje);
				}

			if ($("#vydajeEvidence3").val() !="") {
				totalVydaje = parseInt(vydaj5.val()) + parseInt(vydaj6.val())  + parseInt(vydaj7.val());
				$("#celkemVydajeSazba").val(totalVydaje);
					}

			if ($("#vydajeEvidence4").val() !="") {
				totalVydaje = parseInt(vydaj5.val()) + parseInt(vydaj6.val())  + parseInt(vydaj7.val()) + parseInt(vydaj8.val());
				$("#celkemVydajeSazba").val(totalVydaje);
				}

			if ($("#prijmyUcet").val() !="") {
					totalVydaje = 0;
					$("#celkemVydajeSazba").val(totalVydaje);
					}


				return totalVydaje;
		});
	});

}

function celkem_prijmy() {
	$(document).ready(function(){
		var prijem1=$("#prijmySazba");
		var prijem2=$("#prijmySazba2");
		var prijem3=$("#prijmySazba3");
		var prijem4=$("#prijmySazba4");
		var prijem5=$("#prijmyEvidence");
		var prijem6=$("#prijmyEvidence2");
		var prijem7=$("#prijmyEvidence3");
		var prijem8=$("#prijmyEvidence4");
		var prijem9=$("#prijmyUcet");
		var prijem10=$("#prijmyUcet2");
		var prijem11=$("#prijmyUcet3");
		var prijem12=$("#vprijmyUcet4");

	  $(".vypocet").mouseover(function(){

			if ($("#prijmySazba").val() !="") {
				totalPrijmy = parseInt(prijem1.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
				}

			if ($("#prijmySazba2").val() !="") {
				totalPrijmy = parseInt(prijem1.val()) + parseInt(prijem2.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
				}

			if ($("#prijmySazba3").val() !="") {
				totalPrijmy = parseInt(prijem1.val()) + parseInt(prijem2.val())  + parseInt(prijem3.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
					}

			if ($("#prijmySazba4").val() !="") {
				totalPrijmy = parseInt(prijem1.val()) + parseInt(prijem2.val())  + parseInt(prijem3.val()) + parseInt(prijem4.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
					}

			if ($("#prijmyEvidence").val() !="") {
				totalPrijmy = parseInt(prijem5.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
			}

			if ($("#prijmyEvidence2").val() !="") {
				totalPrijmy = parseInt(prijem5.val()) + parseInt(prijem6.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
			}

			if ($("#prijmyEvidence3").val() !="") {
				totalPrijmy = parseInt(prijem5.val()) + parseInt(prijem6.val())  + parseInt(prijem7.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
			}

			if ($("#prijmyEvidence4").val() !="") {
				totalPrijmy = parseInt(prijem5.val()) + parseInt(prijem6.val())  + parseInt(prijem7.val()) + parseInt(prije8.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
			}

			if ($("#prijmyUcet").val() !="") {
				totalPrijmy = parseInt(prijem9.val());
				$("#celkemPrijemSazba").val(totalPrijmy);
			}
			return totalPrijmy;
	  });
	});
}

function rozdil_prijmy_vydaje2() {
	$(document).ready(function(){

	  $(".vypocet").mouseover(function(){

			totalRozdil = totalPrijmy - totalVydaje;
			totalRozdil = totalRozdil ? totalRozdil : 0;
			$("#rozdilPrijemVydaje").val(totalRozdil);
			return totalRozdil;
	  });
	});
}

function celkova_dan() {
	$(document).ready(function(){
		var totalDan;
		var slevaNaPoplatnika = 24840;
		var zalohyUcet = $("#zalohyUcet");
		var zalohySazba = $("#zalohySazba");
		var zalohyEvidence = $("#zalohyEvidence");
		var prijmyZnajmu1 = $("#prijmyZnajmu1");
		var vydajeNaNajem1 = $("#vydajeNaNajem1");
		var prijmyZnajmu2 = $("#prijmyZnajmu2");
		var vydajeNaNajem2 = $("#vydajeNaNajem2");
		var kapitalovyMajetek = $("#kapitalMajetekPrijem");
		var prijemOst1 = $("#prijmyOstatni");
		var vydajeOst1 = $("#vydajeOstatni");
		var prijemOst2 = $("#prijmyOstatni2");
		var vydajeOst2 = $("#vydajeOstatni2");
		var prijemOst3 = $("#prijmyOstatni3");
		var vydajeOst3 = $("#vydajeOstatni3");
		var prijemOst4 = $("#prijmyOstatni4");
		var vydajeOst4 = $("#vydajeOstatni4");
		var zalohyNajem1 = $("#zaplaceneZalohyNajem1");
		var zalohyNajem2 = $("#zaplaceneZalohyNajem2");
		var manzelstvi1 = $('#pocetMesicuManzelstvi');
		var manzelstvi2 = $('#pocetMesicuZTPmanzel');
		var pocetDarcovstviKrve = $('#darcovstviKrve');
		var pocetDarcovstviOrganu = $('#darcovstviOrganu');
		var vydajeZaSkolku = $('#vydajeZaSkolku');
		var pocetMesicuStudia = $('#pocetMesicuStudia');
		var dar = $('#dar');
		var eet = $('#eet');
		var castecnyDuchod = $('#pocetMesicuZTPcastecnyInvalidni');
		var uplnyDuchod = $('#pocetMesicuZTPuplnyInvalidni');
		var poplatnikZTP = $('#pocetMesicuZTPpoplatnik');
		var podil = $('#vysePodiluVOS');
		var vysledekHospodareniVOS = $('#vysledekHospodareniVOS');
		var dite1 = $('#pocetMesicuDite1');
		var dite1ZTP = $('#pocetMesicuDite1SeZTP');
		var dite2 = $('#pocetMesicuDite2');
		var dite2ZTP = $('#pocetMesicuDite2SeZTP');
		var dite3 = $('#pocetMesicuDite3');
		var dite3ZTP = $('#pocetMesicuDite3SeZTP');
		var dite4 = $('#pocetMesicuDite4');
		var dite4ZTP = $('#pocetMesicuDite4SeZTP');
		var dite5 = $('#pocetMesicuDite5');
		var dite5ZTP = $('#pocetMesicuDite5SeZTP');
		var dite6 = $('#pocetMesicuDite6');
		var dite6ZTP = $('#pocetMesicuDite6SeZTP');
		var pojisteni = $('#castkaZivotniPojisteni');
		var pojisteni2 = $('#castkaPenzijniPojisteni');
		var hypoteka = $('#castkaHypoteky');
		var vzdelani1 = $('#vzdelaniBezOmezeni');
		var vzdelani2 = $('#vzdelaniSOmezenim');
		var vzdelani3 = $('#vzdelanisTezsimOmezeni');
		var prispevky = $('#castkaPrispevky');
		var ztrata1 = $('#ztrataCastka1');
		var ztrata2 = $('#ztrataCastka2');
		var ztrata3 = $('#ztrataCastka3');
		var ztrata4 = $('#ztrataCastka4');
		var ztrata5 = $('#ztrataCastka5');
		var ztrata6 = $('#ztrataCastka6');
		var ztrataCast1 = $('#odectenaCast1');
		var ztrataCast2 = $('#odectenaCast2');
		var ztrataCast3 = $('#odectenaCast3');
		var ztrataCast4 = $('#odectenaCast4');
		var ztrataCast5 = $('#odectenaCast5');
		var ztrataCast6 = $('#odectenaCast6');
		var zvyseniCastka1 = $('#castkaZvyseni1');
		var zvyseniCastka2 = $('#castkaZvyseni2');
		var zvyseniCastka3 = $('#castkaZvyseni3');
		var zvyseniCastka4 = $('#castkaZvyseni4');
		var snizeniCastka1 = $('#castkaSnizeni1');
		var snizeniCastka2 = $('#castkaSnizeni2');
		var snizeniCastka3 = $('#castkaSnizeni3');
		var snizeniCastka4 = $('#castkaSnizeni4');

		var hrubyPrijem1 = $('#hrubyPrijem1');
		var zalohaZamestnani1 = $('#zalohaZamestnani1');
		var pojisteniZamestnavatel1 = $('#pojisteniZamestnavatel1');
		var danBonus1 = $('#danBonus1');
		var srazkovaDan1 = $('#srazkovaDan1');

		var hrubyPrijem2 = $('#hrubyPrijem2');
		var zalohaZamestnani2 = $('#zalohaZamestnani2');
		var pojisteniZamestnavatel2 = $('#pojisteniZamestnavatel2');
		var danBonus2 = $('#danBonus2');
		var srazkovaDan2 = $('#srazkovaDan2');

		var hrubyPrijem3 = $('#hrubyPrijem3');
		var zalohaZamestnani3 = $('#zalohaZamestnani3');
		var pojisteniZamestnavatel3 = $('#pojisteniZamestnavatel3');
		var danBonus3 = $('#danBonus3');
		var srazkovaDan3 = $('#srazkovaDan3');

		var hrubyPrijem4 = $('#hrubyPrijem4');
		var zalohaZamestnani4 = $('#zalohaZamestnani4');
		var pojisteniZamestnavatel4 = $('#pojisteniZamestnavatel4');
		var danBonus4 = $('#danBonus4');
		var srazkovaDan4 = $('#srazkovaDan4');

		var hrubyPrijem5 = $('#hrubyPrijem5');
		var zalohaZamestnani5 = $('#zalohaZamestnani5');
		var pojisteniZamestnavatel5 = $('#pojisteniZamestnavatel5');
		var danBonus5 = $('#danBonus5');
		var srazkovaDan5 = $('#srazkovaDan5');

		var hrubyPrijem6 = $('#hrubyPrijem6');
		var zalohaZamestnani6 = $('#zalohaZamestnani6');
		var pojisteniZamestnavatel6 = $('#pojisteniZamestnavatel6');
		var danBonus6 = $('#danBonus6');
		var srazkovaDan6 = $('#srazkovaDan6');

		var hrubyPrijem7 = $('#hrubyPrijem7');
		var zalohaZamestnani7 = $('#zalohaZamestnani7');
		var pojisteniZamestnavatel7 = $('#pojisteniZamestnavatel7');
		var danBonus7 = $('#danBonus7');
		var srazkovaDan7 = $('#srazkovaDan7');

		var hrubyPrijem8 = $('#hrubyPrijem8');
		var zalohaZamestnani8 = $('#zalohaZamestnani8');
		var pojisteniZamestnavatel8 = $('#pojisteniZamestnavatel8');
		var danBonus8 = $('#danBonus8');
		var srazkovaDan8 = $('#srazkovaDan8');

	  $(".vypocet").mouseover(function(){

		if($("#prijmySazba").val() == "") {
			$("#prijmySazba").val('0');
		}

		if($("#rozdilPrijemVydaje").val() == "") {
			$("#rozdilPrijemVydaje").val('0');
		}

			if($("#zalohyUcet").val() == "") {
				$("#zalohyUcet").val('0');
			}

			if($("#zalohySazba").val() == "") {
				$("#zalohySazba").val('0');
			}

			if($("#zaplaceneZalohyNajem1").val() == "") {
				$("#zaplaceneZalohyNajem1").val('0');
			}

			if($("#zaplaceneZalohyNajem2").val() == "") {
				$("#zaplaceneZalohyNajem2").val('0');
			}

			if($("#zalohyEvidence").val() == "") {
				$("#zalohyEvidence").val('0');
			}

			if($("#prijmyZnajmu1").val() == "") {
				$("#prijmyZnajmu1").val('0');
			}

			if($("#vydajeNaNajem1").val() == "") {
				$("#vydajeNaNajem1").val('0');
			}

			if($("#prijmyZnajmu2").val() == "") {
				$("#prijmyZnajmu2").val('0');
			}

			if($("#vydajeNaNajem2").val() == "") {
				$("#vydajeNaNajem2").val('0');
			}

			if($("#kapitalMajetekPrijem").val() == "") {
				$("#kapitalMajetekPrijem").val('0');
			}

			if($("#celkemPrijemOstatni").val() == "") {
				$("#celkemPrijemOstatni").val('0');
			}

			if($("#celkemVydajeOstatni").val() == "") {
				$("#celkemVydajeOstatni").val('0');
			}

			if($("#darcovstviKrve").val() == "") {
				$("#darcovstviKrve").val('0');
			}

			if($("#darcovstviOrganu").val() == "") {
				$("#darcovstviOrganu").val('0');
			}

			if($("#dar").val() == "") {
				$("#dar").val('0');
			}

			if($("#vydajeZaSkolku").val() == "") {
				$("#vydajeZaSkolku").val('0');
			}

			if($("#vysePodiluVOS").val() == "") {
				$("#vysePodiluVOS").val('0');
			}

			if($("#vysledekHospodareniVOS").val() == "") {
				$("#vysledekHospodareniVOS").val('0');
			}

			if($("#castkaZivotniPojisteni").val() == "") {
				$("#castkaZivotniPojisteni").val('0');
			}

			if($("#castkaPenzijniPojisteni").val() == "") {
				$("#castkaPenzijniPojisteni").val('0');
			}

			if($("#castkaHypoteky").val() == "") {
				$("#castkaHypoteky").val('0');
			}

			if($("#vzdelaniBezOmezeni").val() == "") {
				$("#vzdelaniBezOmezeni").val('0');
			}

			if($("#vzdelaniSOmezenim").val() == "") {
				$("#vzdelaniSOmezenim").val('0');
			}

			if($("#vzdelanisTezsimOmezeni").val() == "") {
				$("#vzdelanisTezsimOmezeni").val('0');
			}

			if($("#castkaPrispevky").val() == "") {
				$("#castkaPrispevky").val('0');
			}

			if($("#ztrataCastka1").val() == "") {
				$("#ztrataCastka1").val('0');
			}

			if($("#odectenaCast1").val() == "") {
				$("#odectenaCast1").val('0');
			}

			if($("#ztrataCastka2").val() == "") {
				$("#ztrataCastka2").val('0');
			}

			if($("#odectenaCast2").val() == "") {
				$("#odectenaCast2").val('0');
			}

			if($("#ztrataCastka3").val() == "") {
				$("#ztrataCastka3").val('0');
			}

			if($("#odectenaCast3").val() == "") {
				$("#odectenaCast3").val('0');
			}

			if($("#ztrataCastka4").val() == "") {
				$("#ztrataCastka4").val('0');
			}

			if($("#odectenaCast4").val() == "") {
				$("#odectenaCast4").val('0');
			}

			if($("#ztrataCastka5").val() == "") {
				$("#ztrataCastka5").val('0');
			}

			if($("#odectenaCast5").val() == "") {
				$("#odectenaCast5").val('0');
			}

			if($("#ztrataCastka6").val() == "") {
				$("#ztrataCastka6").val('0');
			}

			if($("#odectenaCast6").val() == "") {
				$("#odectenaCast6").val('0');
			}

			if($("#castkaZvyseni1").val() == "") {
				$("#castkaZvyseni1").val('0');
			}

			if($("#castkaZvyseni2").val() == "") {
				$("#castkaZvyseni2").val('0');
			}

			if($("#castkaZvyseni3").val() == "") {
				$("#castkaZvyseni3").val('0');
			}

			if($("#castkaZvyseni4").val() == "") {
				$("#castkaZvyseni4").val('0');
			}

			if($("#castkaSnizeni1").val() == "") {
				$("#castkaSnizeni1").val('0');
			}

			if($("#castkaSnizeni2").val() == "") {
				$("#castkaSnizeni2").val('0');
			}

			if($("#castkaSnizeni3").val() == "") {
				$("#castkaSnizeni3").val('0');
			}

			if($("#castkaSnizeni4").val() == "") {
				$("#castkaSnizeni4").val('0');
			}

			if($("#hrubyPrijem1").val() == "") {
				$("#hrubyPrijem1").val('0');
			}

			if($("#zalohaZamestnani1").val() == "") {
				$("#zalohaZamestnani1").val('0');
			}

			if($("#pojisteniZamestnavatel1").val() == "") {
				$("#pojisteniZamestnavatel1").val('0');
			}

			if($("#danBonus1").val() == "") {
				$("#danBonus1").val('0');
			}

			if($("#srazkovaDan1").val() == "") {
				$("#srazkovaDan1").val('0');
			}

			if($("#hrubyPrijem2").val() == "") {
				$("#hrubyPrijem2").val('0');
			}

			if($("#zalohaZamestnani2").val() == "") {
				$("#zalohaZamestnani2").val('0');
			}

			if($("#pojisteniZamestnavatel2").val() == "") {
				$("#pojisteniZamestnavatel2").val('0');
			}

			if($("#danBonus2").val() == "") {
				$("#danBonus2").val('0');
			}

			if($("#srazkovaDan2").val() == "") {
				$("#srazkovaDan2").val('0');
			}

			if($("#hrubyPrijem3").val() == "") {
				$("#hrubyPrijem3").val('0');
			}

			if($("#zalohaZamestnani3").val() == "") {
				$("#zalohaZamestnani3").val('0');
			}

			if($("#pojisteniZamestnavatel3").val() == "") {
				$("#pojisteniZamestnavatel3").val('0');
			}

			if($("#danBonus3").val() == "") {
				$("#danBonus3").val('0');
			}

			if($("#srazkovaDan3").val() == "") {
				$("#srazkovaDan3").val('0');
			}

			if($("#hrubyPrijem4").val() == "") {
				$("#hrubyPrijem4").val('0');
			}

			if($("#zalohaZamestnani4").val() == "") {
				$("#zalohaZamestnani4").val('0');
			}

			if($("#pojisteniZamestnavatel4").val() == "") {
				$("#pojisteniZamestnavatel4").val('0');
			}

			if($("#danBonus4").val() == "") {
				$("#danBonus4").val('0');
			}

			if($("#srazkovaDan4").val() == "") {
				$("#srazkovaDan4").val('0');
			}

			if($("#hrubyPrijem5").val() == "") {
				$("#hrubyPrijem5").val('0');
			}

			if($("#zalohaZamestnani5").val() == "") {
				$("#zalohaZamestnani5").val('0');
			}

			if($("#pojisteniZamestnavatel5").val() == "") {
				$("#pojisteniZamestnavatel5").val('0');
			}

			if($("#danBonus5").val() == "") {
				$("#danBonus5").val('0');
			}

			if($("#srazkovaDan5").val() == "") {
				$("#srazkovaDan5").val('0');
			}

			if($("#hrubyPrijem6").val() == "") {
				$("#hrubyPrijem6").val('0');
			}

			if($("#zalohaZamestnani6").val() == "") {
				$("#zalohaZamestnani6").val('0');
			}

			if($("#pojisteniZamestnavatel6").val() == "") {
				$("#pojisteniZamestnavatel6").val('0');
			}

			if($("#danBonus6").val() == "") {
				$("#danBonus6").val('0');
			}

			if($("#srazkovaDan6").val() == "") {
				$("#srazkovaDan6").val('0');
			}

			if($("#hrubyPrijem7").val() == "") {
				$("#hrubyPrijem7").val('0');
			}

			if($("#zalohaZamestnani7").val() == "") {
				$("#zalohaZamestnani7").val('0');
			}

			if($("#pojisteniZamestnavatel7").val() == "") {
				$("#pojisteniZamestnavatel7").val('0');
			}

			if($("#danBonus7").val() == "") {
				$("#danBonus7").val('0');
			}

			if($("#srazkovaDan7").val() == "") {
				$("#srazkovaDan7").val('0');
			}

			if($("#hrubyPrijem8").val() == "") {
				$("#hrubyPrijem8").val('0');
			}

			if($("#zalohaZamestnani8").val() == "") {
				$("#zalohaZamestnani8").val('0');
			}

			if($("#pojisteniZamestnavatel8").val() == "") {
				$("#pojisteniZamestnavatel8").val('0');
			}

			if($("#danBonus8").val() == "") {
				$("#danBonus8").val('0');
			}

			if($("#srazkovaDan8").val() == "") {
				$("#srazkovaDan8").val('0');
			}

			if($("#prijmyOstatni").val() == "") {
				$("#prijmyOstatni").val('0');
			}

			if($("#vydajeOstatni").val() == "") {
				$("#vydajeOstatni").val('0');
			}

			if($("#prijmyOstatni2").val() == "") {
				$("#prijmyOstatni2").val('0');
			}

			if($("#vydajeOstatni2").val() == "") {
				$("#vydajeOstatni2").val('0');
			}

			if($("#prijmyOstatni3").val() == "") {
				$("#prijmyOstatni3").val('0');
			}

			if($("#vydajeOstatni3").val() == "") {
				$("#vydajeOstatni3").val('0');
			}

			if($("#prijmyOstatni4").val() == "") {
				$("#prijmyOstatni4").val('0');
			}

			if($("#vydajeOstatni4").val() == "") {
				$("#vydajeOstatni4").val('0');
			}

			var rozdilNajem1 = parseInt(prijmyZnajmu1.val() - vydajeNaNajem1.val());
			var rozdilNajem2 = parseInt(prijmyZnajmu2.val() - vydajeNaNajem2.val());
			var kapital = parseInt(kapitalovyMajetek.val());
			var ostatni1 = parseInt(prijemOst1.val() - vydajeOst1.val());
			var ostatni2 = parseInt(prijemOst2.val() - vydajeOst2.val());
			var ostatni3 = parseInt(prijemOst3.val() - vydajeOst3.val());
			var ostatni4 = parseInt(prijemOst4.val() - vydajeOst4.val());
			var ostatniPrijmy =  parseInt(prijemOst1.val()) + parseInt(prijemOst2.val()) + parseInt(prijemOst3.val()) + parseInt(prijemOst4.val());
			var ostatniVydaje =  parseInt(vydajeOst1.val()) + parseInt(vydajeOst2.val()) + parseInt(vydajeOst3.val()) + parseInt(vydajeOst4.val());
			var ostatni = ostatni1 + ostatni2 + ostatni3 + ostatni4;
			var VOS = parseInt((vysledekHospodareniVOS.val() /100) * podil.val());
			var zvyseniSoucet = parseInt(zvyseniCastka1.val()) + parseInt(zvyseniCastka2.val()) + parseInt(zvyseniCastka3.val()) + parseInt(zvyseniCastka4.val());
			var snizeniSoucet = parseInt(snizeniCastka1.val()) + parseInt(snizeniCastka2.val()) + parseInt(snizeniCastka3.val()) + parseInt(snizeniCastka4.val());
			var radek113 = totalRozdil + zvyseniSoucet - snizeniSoucet + VOS;
			//SLEVA MANZELSTVI
			var manzelstviBezZTP = parseInt(manzelstvi1.val() * 2070);
			var manzelstviSeZTP = parseInt(manzelstvi2.val() * 4140);
			//SLEVA STUDENT
			var slevaStudent = parseInt(pocetMesicuStudia.val()* 335);
			//SLEVA INVALIDITA
			var slevaCastecnyDuchod = parseInt(castecnyDuchod.val()* 210);
			var slevaUplnyDuchod = parseInt(uplnyDuchod.val()* 420);
			var slevaZTP = parseInt(poplatnikZTP.val()* 1345);
			//DARCOVSTVI KRVE A ORGANU
			var krev = parseInt(pocetDarcovstviKrve.val()) * (3000 / 100 * 15);
			var organ = parseInt(pocetDarcovstviOrganu.val()) * (20000 / 100 * 15);
			//DAR
			var slevaDar = parseInt(dar.val() / 100 * 15);
			var celkemDary = parseInt(dar.val()) + parseInt(pocetDarcovstviKrve.val() * 3000) + parseInt(pocetDarcovstviOrganu.val()) * 20000;

			//SLEVA NA EET
			var slevaEET = parseInt(eet.val());
			//SLEVA NA DETI
			var slevaDite1 = parseInt(dite1.val() * 1267);
			var slevaDite1ZTP = parseInt(dite1ZTP.val() * 2534);
			var slevaDite2 = parseInt(dite2.val() * 1617);
			var slevaDite2ZTP = parseInt(dite2ZTP.val() * 3234);
			var slevaDite3 = parseInt(dite3.val() * 2017);
			var slevaDite3ZTP = parseInt(dite3ZTP.val() * 4034);
			var slevaDite4 = parseInt(dite4.val() * 2017);
			var slevaDite4ZTP = parseInt(dite4ZTP.val() * 4034);
			var slevaDite5 = parseInt(dite5.val() * 2017);
			var slevaDite5ZTP = parseInt(dite5ZTP.val() * 4034);
			var slevaDite6 = parseInt(dite6.val() * 2017);
			var slevaDite6ZTP = parseInt(dite6ZTP.val() * 4034);
			var soucet3a4 = parseInt(dite3.val()) + parseInt(dite4.val());
			var soucet3a4ZTP = parseInt(dite3ZTP.val()) + parseInt(dite4ZTP.val());
			var celkemSlevaDite = slevaDite1 + slevaDite1ZTP + slevaDite2 + slevaDite2ZTP + slevaDite3 + slevaDite3ZTP + slevaDite4 + slevaDite4ZTP + slevaDite5 + slevaDite5ZTP + slevaDite6 + slevaDite6ZTP;

			//VZDELANI
			var celkemVzdelani = parseInt(vzdelani1.val()) + parseInt(vzdelani2.val()) + parseInt(vzdelani3.val());
			//ZAMESTNANI
			var zamestnani1 = parseInt(hrubyPrijem1.val()) + parseInt(pojisteniZamestnavatel1.val());
			var zamestnani2 = parseInt(hrubyPrijem2.val()) + parseInt(pojisteniZamestnavatel2.val());
			var zamestnani3 = parseInt(hrubyPrijem3.val()) + parseInt(pojisteniZamestnavatel3.val());
			var zamestnani4 = parseInt(hrubyPrijem4.val()) + parseInt(pojisteniZamestnavatel4.val());
			var zamestnani5 = parseInt(hrubyPrijem5.val()) + parseInt(pojisteniZamestnavatel5.val());
			var zamestnani6 = parseInt(hrubyPrijem6.val()) + parseInt(pojisteniZamestnavatel6.val());
			var zamestnani7 = parseInt(hrubyPrijem7.val()) + parseInt(pojisteniZamestnavatel7.val());
			var zamestnani8 = parseInt(hrubyPrijem8.val()) + parseInt(pojisteniZamestnavatel8.val());
			var celkemZamestnani = parseInt(hrubyPrijem1.val()) + parseInt(hrubyPrijem2.val()) + parseInt(hrubyPrijem3.val()) + parseInt(hrubyPrijem4.val()) + parseInt(hrubyPrijem5.val()) + parseInt(hrubyPrijem6.val()) + parseInt(hrubyPrijem7.val()) + parseInt(hrubyPrijem8.val());
			var celkemPojisteniZamestnani = parseInt(pojisteniZamestnavatel1.val()) + parseInt(pojisteniZamestnavatel2.val()) + parseInt(pojisteniZamestnavatel3.val()) + parseInt(pojisteniZamestnavatel4.val()) + parseInt(pojisteniZamestnavatel5.val()) + parseInt(pojisteniZamestnavatel6.val()) + parseInt(pojisteniZamestnavatel7.val()) + parseInt(pojisteniZamestnavatel8.val());
			var soucetPrijemPojistne = zamestnani1 + zamestnani2 + zamestnani3 + zamestnani4 + zamestnani5 + zamestnani6 + zamestnani7 + zamestnani8;
			var radek41 = radek113 + kapital + rozdilNajem1 + rozdilNajem2 + ostatni;
			var zakladDane = soucetPrijemPojistne + radek113 + kapital + rozdilNajem1 + rozdilNajem2 + ostatni;
			var soucetZtrat = parseInt(ztrata1.val() - ztrataCast1.val()) + parseInt(ztrata2.val() - ztrataCast2.val()) + parseInt(ztrata3.val() - ztrataCast3.val()) + parseInt(ztrata4.val() - ztrataCast4.val()) + parseInt(ztrata5.val() - ztrataCast5.val()) + parseInt(ztrata6.val() - ztrataCast6.val());
			var rozdilZtrata1 = parseInt(ztrata1.val() - ztrataCast1.val());
			var rozdilZtrata2 = parseInt(ztrata2.val() - ztrataCast2.val());
			var rozdilZtrata3 = parseInt(ztrata3.val() - ztrataCast3.val());
			var rozdilZtrata4 = parseInt(ztrata4.val() - ztrataCast4.val());
			var rozdilZtrata5 = parseInt(ztrata5.val() - ztrataCast5.val());
			var rozdilZtrata6 = parseInt(ztrata6.val() - ztrataCast6.val());

			var zakladBezZtrat = zakladDane - soucetZtrat;

			var checkDary = (zakladBezZtrat / 100) * 15;
			if (celkemDary > checkDary) {
				celkemDary = checkDary;
			}

			var soucetNezdanitelCasti = celkemDary + parseInt(hypoteka.val()) + parseInt(pojisteni2.val()) + parseInt(pojisteni.val()) + celkemVzdelani + parseInt(prispevky.val());
			var zakladSnizenyOnezdanitCasti = zakladBezZtrat - soucetNezdanitelCasti;
			var zakladNaSto = Math.floor(zakladSnizenyOnezdanitCasti / 100) * 100;
			var danRadek57 = (zakladNaSto / 100) * 15;
			var solidarniDan = parseFloat(((celkemZamestnani + radek113 - 1438992) /100) * 7).toFixed(2);
			var danCelkemZaokr = Math.round(solidarniDan) + danRadek57;
			var totalPrijmy = celkemZamestnani + radek113;
			var castkaSlevy = slevaNaPoplatnika + manzelstviBezZTP + manzelstviSeZTP + slevaCastecnyDuchod + slevaUplnyDuchod + slevaZTP + slevaStudent + parseInt(eet.val()) + parseInt(vydajeZaSkolku.val());

			var celkemDanBonus = parseInt(danBonus1.val()) + parseInt(danBonus2.val()) + parseInt(danBonus3.val()) + parseInt(danBonus4.val()) + parseInt(danBonus5.val()) + parseInt(danBonus6.val()) + parseInt(danBonus7.val()) + parseInt(danBonus8.val());
			var zalohyOSVC = parseInt(zalohySazba.val()) + parseInt(zalohyEvidence.val()) + parseInt(zalohyUcet.val());
			var zalohyOstatni = parseInt(zalohaZamestnani1.val()) + parseInt(zalohaZamestnani2.val()) + parseInt(zalohaZamestnani3.val()) + parseInt(zalohaZamestnani4.val()) + parseInt(zalohaZamestnani5.val()) + parseInt(zalohaZamestnani6.val()) + parseInt(zalohaZamestnani7.val()) + parseInt(zalohaZamestnani8.val()) + parseInt(zalohyNajem1.val()) + parseInt(zalohyNajem2.val());
			var celkemSrazkovaDan = parseInt(srazkovaDan1.val()) + parseInt(srazkovaDan2.val()) + parseInt(srazkovaDan3.val()) + parseInt(srazkovaDan4.val()) + parseInt(srazkovaDan5.val()) + parseInt(srazkovaDan6.val()) + parseInt(srazkovaDan7.val()) + parseInt(srazkovaDan8.val());
			var slevaBezDeti;
			var slevaSDetmi;
			slevaBezDeti = danRadek57 - castkaSlevy;

			var celkemSlevaDiteDoVyse = celkemSlevaDite;
				if(slevaBezDeti < celkemSlevaDite) {
					celkemSlevaDiteDoVyse = slevaBezDeti;
				}

			slevaSDetmi = danRadek57 - castkaSlevy - celkemSlevaDiteDoVyse;
			var radek75 = celkemSlevaDite - celkemSlevaDiteDoVyse;
			var rozdilDanBonus = radek75 - celkemDanBonus;

			if (solidarniDan <= 0) {
				solidarniDan = 0;
				danCelkemZaokr = Math.round(solidarniDan) + danRadek57;
			}

			if($("#hrubyPrijemPP").val() == "") {
				slevaPrispevky = 0;
			}

			if (radek113 == 0) {
				radek113 = 0;
			}

			if($("#prijmySazba").val() == "" && $("#prijmyEvidence").val() == "" && $("#prijmyUcet").val() == "") {
				slevaZtrata1 = 0;
				slevaZtrata2 = 0;
				slevaZtrata3 = 0;
				slevaZtrata4 = 0;
				slevaZtrata5 = 0;
				slevaZtrata6 = 0;
			}

			totalRozdil = totalRozdil ? totalRozdil : 0;
			danRadek57 = danRadek57 ? danRadek57 : 0;
			totalDan = danRadek57 - castkaSlevy - celkemSlevaDiteDoVyse - zalohyOSVC - zalohyOstatni - celkemSrazkovaDan - rozdilDanBonus;
			if (totalDan == -24840) {
				totalDan = 0;
			}
			if (totalDan < 0) {
				totalDan = 0;
			}
			totalDan = totalDan ? totalDan : 0;

			if (totalPrijmy > 1438992) {
				slevaBezDeti = danCelkemZaokr - castkaSlevy;
				slevaSDetmi = danCelkemZaokr - castkaSlevy - celkemSlevaDiteDoVyse;
				totalDan = danCelkemZaokr - castkaSlevy - celkemSlevaDiteDoVyse - zalohyOSVC - zalohyOstatni - celkemSrazkovaDan - rozdilDanBonus;
				if (totalDan == -24840) {
					totalDan = 0;
				}
				totalDan = totalDan ? totalDan : 0;
				}

			if(totalDan < 0) {
				var preplatek = Math.abs(totalDan);
			}

			$("#celkovaDan").val(totalDan);
			$("#celkovaDanZobraz").val(totalDan + " Kč");
			$("#preplatek").val(preplatek);
			$("#celkemPrijemZamestnani").val(celkemZamestnani);
			$("#celkemPojisteniZamestnani").val(celkemPojisteniZamestnani);
			$("#soucetPrijemPojistne").val(soucetPrijemPojistne);
			$("#celkemSlevaZaManzelku").val(manzelstviBezZTP);
			$("#celkemSlevaZaManzelkuZTP").val(manzelstviSeZTP);
			$("#celkemCastecnyDuchod").val(slevaCastecnyDuchod);
			$("#celkemUplnyDuchod").val(slevaUplnyDuchod);
			$("#celkemSlevaZTP").val(slevaZTP);
			$("#celkemSlevaStudent").val(slevaStudent);

			$("#celkemSlevy").val(castkaSlevy);
			$("#dite3a4").val(soucet3a4);
			$("#dite3a4ZTP").val(soucet3a4ZTP);
			$("#celkemSlevaDite").val(celkemSlevaDite);
			$("#rozdilNajem1").val(rozdilNajem1);
			$("#rozdilNajem2").val(rozdilNajem2);
			$("#celkemOstatni").val(ostatni);
			$("#rozdilOstatni1").val(ostatni1);
			$("#rozdilOstatni2").val(ostatni2);
			$("#rozdilOstatni3").val(ostatni3);
			$("#rozdilOstatni4").val(ostatni4);
			$("#ostatniPrijmy").val(ostatniPrijmy);
			$("#ostatniVydaje").val(ostatniVydaje);
			$("#radek41").val(radek41);
			$("#zakladDane").val(zakladDane);
			$("#soucetZtrat").val(soucetZtrat);
			$("#zakladBezZtrat").val(zakladBezZtrat);
			$("#celkemDary").val(celkemDary);
			$("#celkemVzdelani").val(celkemVzdelani);
			$("#soucetNezdanitelCasti").val(soucetNezdanitelCasti);
			$("#zakladSnizenyOnezdanitCasti").val(zakladSnizenyOnezdanitCasti);
			$("#zakladNaSto").val(zakladNaSto);
			$("#danRadek57").val(danRadek57);
			$("#solidarniDan").val(solidarniDan);
			$("#danCelkemZaokr").val(danCelkemZaokr);
			$("#slevaBezDeti").val(slevaBezDeti);
			$("#slevaSDetmi").val(slevaSDetmi);
			$("#VOSprijem").val(VOS);
			$("#zvyseniSoucet").val(zvyseniSoucet);
			$("#snizeniSoucet").val(snizeniSoucet);
			$("#radek113").val(radek113);
			$("#radek75").val(radek75);
			$("#celkemDanBonus").val(celkemDanBonus);
			$("#rozdilDanBonus").val(rozdilDanBonus);
			$("#zalohyOSVC").val(zalohyOSVC);
			$("#zalohyOstatni").val(zalohyOstatni);
			$("#celkemSrazkovaDan").val(celkemSrazkovaDan);
			$("#celkemSlevaDiteDoVyse").val(celkemSlevaDiteDoVyse);
			$("#rozdilZtrata1").val(rozdilZtrata1);
			$("#rozdilZtrata2").val(rozdilZtrata2);
			$("#rozdilZtrata3").val(rozdilZtrata3);
			$("#rozdilZtrata4").val(rozdilZtrata4);
			$("#rozdilZtrata5").val(rozdilZtrata5);
			$("#rozdilZtrata6").val(rozdilZtrata6);
	  });
	});
}
