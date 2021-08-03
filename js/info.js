function uzemni_pracoviste() {
	$(document).ready(function () {
	    $("#kraj").change(function () {
	        var val = $(this).val();

	        if (val == "hlavní město Prahu") {
	            $("#pracoviste").html("<option value='Prahu 1'>Praha 1</option><option value='Prahu 2'>Praha 2</option><option value='Prahu 3'>Praha 3</option><option value='Praha 4'>Prahu 4</option><option value='Prahu 5'>Praha 5</option><option value='Prahu 6'>Praha 6</option><option value='Prahu 7'>Praha 7</option><option value='Prahu 8'>Praha 8</option><option value='Prahu 9'>Praha 9</option><option value='Prahu 10'>Praha 10</option><option value='Prahu - Jižní Město'>Praha - Jižní Město</option><option value='Praze - Modřanech'>Praha - Modřany</option>");
	        }

					else if (val == "Středočeský kraj") {
	           $("#pracoviste").html("<option value='Praha - východ'>Praha - východ</option><option value='Praha - západ'>Praha - západ</option><option value='Benešově'>Benešov</option><option value='Berouně'>Beroun</option><option value='Brandýse nad Labem - Staré Boleslavi'>Brandýs nad Labem - Stará Boleslav</option><option value='Čáslavi'>Čáslav</option><option value='Českém Brodě'>Český Brod</option><option value='Dobříši'>Dobříš</option><option value='Hořovicích'>Hořovice</option><option value='Kladně'>Kladno</option><option value='Kolíně'>Kolín</option><option value='Kralupech nad Vltavou'>Kralupy nad Vltavou</option><option value='Kutné Hoře'>Kutná Hora</option><option value='Mělníce'>Mělník</option><option value='Mladé Boleslavi'>Mladá Boleslav</option><option value='Mnichově Hradišti'>Mnichovo Hradiště</option><option value='Neratovicích'>Neratovice</option><option value='Nymburku'>Nymburk</option><option value='Poděbradech'>Poděbrady</option><option value='Příbrami'>Příbram</option><option value='Rakovníku'>Rakovník</option><option value='Říčanech'>Říčany</option><option value='Sedlčanech'>Sedlčany</option><option value='Slaném'>Slaný</option><option value='Vlašimi'>Vlašim</option><option value='Voticích'>Votice</option>");
					  }

					else if (val == "Jihočeský kraj") {
	            $("#pracoviste").html("<option value='Českých Budějovicích'>České Budějovice</option><option value='Blatné'>Blatná</option><option value='Českém Krumlově'>Český Krumlov</option><option value='Dačicích'>Dačice</option><option value='Jindřichově Hradci'>Jindřichův Hradec</option><option value='Kaplici'>Kaplice</option><option value='Milvsku'>Milvsko</option><option value='Písku'>Písek</option><option value='Prachaticích'>Prachatice</option><option value='Soběslavi'>Soběslav</option><option value='Strakonicích'>Strakonice</option><option value='Táboře'>Tábor</option><option value='Trhových Svinech'>Trhové Sviny</option><option value='Třeboni'>Třeboň</option><option value='Týně nad Vltavou'>Týn nad Vltavou</option><option value='Vimperku'>Vimperk</option><option value='Vodňanech'>Vodňany</option>");
						}

					else if (val == "Plzeňský kraj") {
							$("#pracoviste").html("<option value='Plzni'>Plzeň</option><option value='Plzeň - sever'>Plzeň - sever</option><option value='Plzeň - jih'>Plzeň - jih</option><option value='Blovicích'>Blovice</option><option value='Domažlicích'>Domažlice</option><option value='Hražďovicích'>Hražďovice</option><option value='Horšovském Týně'>Horšovský Týn</option><option value='Klatovech'>Klatovy</option><option value='Kralovicích'>Kralovice</option><option value='Nepomuku'>Nepomuk</option><option value='Přešticích'>Přeštice</option><option value='Rokycanech'>Rokycany</option><option value='Tachově'>Tachov</option><option value='Stříbře'>Stříbro</option><option value='Sušici'>Sušice</option>");
					}

					else if (val == "Karlovarský kraj") {
							$("#pracoviste").html("<option value='Karlových Varech'>Karlovy Vary</option><option value='Aši'>Aš</option><option value='Chebu'>Cheb</option><option value='Kraslicích'>Kraslice</option><option value='Mariánských Lázních'>Mariánské Lázně</option><option value='Ostrově'>Ostrov</option><option value='Sokolově'>Sokolov</option>");
					}

					else if (val == "Ústecký kraj") {
							 $("#pracoviste").html("<option value='Ústí nad Labem'>Ústí nad Labem</option><option value='Bílině'>Bílina</option><option value='Děčíně'>Děčín</option><option value='Chomutově'>Chomutov</option><option value='Kadani'>Kadaň</option><option value='Libochovicích'>Libochovice</option><option value='Litoměřicích'>Litoměřice</option><option value='Litvínově'>Litvínov</option><option value='Lounech'>Louny</option><option value='Mostě'>Most</option><option value='Podbořanech'>Podbořany</option><option value='Roudnici nad Labem'>Roudnice nad Labem</option><option value='Rumburku'>Rumburk</option><option value='Teplicích'>Teplice</option><option value='Žatci'>Žatec</option>");
					}

					else if (val == "Liberecký kraj") {
						 $("#pracoviste").html("<option value='Liberci'>Liberec</option><option value='České Lípě'>Česká Lípa</option><option value='Frýdlantě'>Frýdlant</option><option value='Jablonci nad Nisou'>Jablonec nad Nisou</option><option value='Jilemnici'>Jilemnice</option><option value='Novém Boru'>Nový Bor</option><option value='Semilech'>Semily</option><option value='Tanvaldě'>Tanvald</option><option value='Turnově'>Turnov</option><option value='Železném Brodě'>Železný Brod</option>");
					 	}

					else if (val == "Královéhradecký kraj") {
						 $("#pracoviste").html("<option value='Hradci Králové'>Hradec Králové</option><option value='Broumově'>Broumov</option><option value='Dobruška'>Dobrušce</option><option value='Dvoře Králové nad Labem'>Dvůr Králové nad Labem</option><option value='Hořicích'>Hořice</option><option value='Jaroměři'>Jaroměř</option><option value='Jičíně'>Jičín</option><option value='Kostelci nad Orlicí'>Kostelec nad Orlicí</option><option value='Náchodě'>Náchod</option><option value='Nové Pace'>Nová Paka</option><option value='Novém Bydžově'>Nový Bydžov</option><option value='Rychnově nad Kněžnou'>Rychnov nad Kněžnou</option><option value='Trutnově'>Trutnov</option><option value='Vrchlabí'>Vrchlabí</option>");
					 }

					else if (val == "Pardubický kraj") {
							$("#pracoviste").html("<option value='Pardubicích'>Pardubice</option><option value='Hlinsku'>Hlinsko</option><option value='Holicích'>Holice</option><option value='Chrudimi'>Chrudim</option><option value='Litomyšli'>Litomyšl</option><option value='Moravské Třebové'>Moravská Třebové</option><option value='Přelouči'>Přelouč</option><option value='Svitavách'>Svitavy</option><option value='Ústí nad Orlicí'>Ústí nad Orlicí</option><option value='Vysokém Mýtě'>Vysoké Mýto</option><option value='Žamberku'>Žamberk</option>");
												}

					else if (val == "Kraj Vysočina") {
						 	$("#pracoviste").html("<option value='Jihlavě'>Jihlava</option><option value='Bystřici nad Perštejnem'>Bystřice nad Perštejnem</option><option value='Havlíčkově Brodě'>Havlíčkův Brod</option><option value='Humpolci'>Humpolec</option><option value='Chotěboři'>Chotěboř</option><option value='Ledči nad Sázavou'>Ledeč nad Sázavou</option><option value='Moravských Budejovicích'>Moravské Budejovice</option><option value='Náměšti nad Oslavou'>Náměšť nad Oslavou</option><option value='Pacově'>Pacov</option><option value='Pelhřimově'>Pelhřimov</option><option value='Telči'>Telč</option><option value='Třebíči'>Třebíč</option><option value='Velkém Meziříčí'>Velké Meziříčí</option><option value='Ždáru nad Sázavou'>Ždár nad Sázavou</option>");
												}

					else if (val == "Jihomoravský kraj") {
						  $("#pracoviste").html("<option value='Brno I.'>Brno I.</option><option value='Brno II.'>Brno II.</option><option value='Brno III.'>Brno III.</option><option value='Brno IV.'>Brno IV.</option><option value='Brno - venkov'>Brno - venkov</option><option value='Blansku'>Blansko</option><option value='Boskovicích'>Boskovice</option><option value='Břeclavi'>Břeclav</option><option value='Bučovicích'>Bučovice</option><option value='Hodoníně'>Hodonín</option><option value='Hustopečích'>Hustopeče</option><option value='Ivančicích'>Ivančice</option><option value='Kyjově'>Kyjov</option><option value='Mikulově'>Mikulov</option><option value='Moravském Krumlově'>Moravský Krumlov</option><option value='Slavkově u Brna'>Slavkov u Brna</option><option value='Tišnově'>Tišnov</option><option value='Veselí nad Moravou'>Veselí nad Moravou</option><option value='Vyškově'>Vyškov</option><option value='Znojmě'>Znojmo</option>");
											}

					else if (val == "Olomoucký kraj") {
							$("#pracoviste").html("<option value='Olomouci'>Olomouc</option><option value='Hranicích'>Hranice</option><option value='Jeseníku'>Jeseník</option><option value='Konici'>Konice</option><option value='Litovli'>Litovel</option><option value='Prostějově'>Prostějov</option><option value='Přerově'>Přerov</option><option value='Šternberku'>Šternberk</option><option value='Šumperku'>Šumperk</option><option value='Zábřehu'>Zábřeh</option>");
												}

					else if (val == "Moravskoslezský kraj") {
						$("#pracoviste").html("<option value='Ostrava I.'>Ostrava I.</option><option value='Ostrava II.'>Ostrava II.</option><option value='Ostrava III.'>Ostrava III.</option><option value='Bohumíně'>Bohumín</option><option value='Bruntále'>Bruntál</option><option value='Českém Těšíně'>Český Těšín</option><option value='Frýdku-Místku'>Frýdek-Místek</option><option value='Frýdlantě nad Ostravicí'>Frýdlant nad Ostravicí</option><option value='Fulneku'>Fulnek</option><option value='Havířově'>Havířov</option><option value='Hlučíně'>Hlučín</option><option value='Karviné'>Karviná</option><option value='Kopřivnici'>Kopřivnice</option><option value='Krnově'>Krnov</option><option value='Novém Jičíně'>Nový Jičín</option><option value='Opavě'>Opava</option><option value='Třinci'>Třinec</option>");
					 }

					else if (val == "Zlínský kraj") {
							$("#pracoviste").html("<option value='Zlíně'>Zlín</option><option value='Bystřici pod Hostýnem'>Bystřice pod Hostýnem</option><option value='Holešově'>Holešov</option><option value='Kroměříži'>Kroměříž</option><option value='Luhačovicích'>Luhačovice</option><option value='Otrokovicích'>Otrokovice</option><option value='Rožnově pod Radhoštěm'>Rožnov pod Radhoštěm</option><option value='Uherském Brodě'>Uherský Brod</option><option value='Uherském Hradišti'>Uherské Hradiště</option><option value='Valašském Meziříčí'>Valašské Meziříčí</option><option value='Valašských Kloboukách'>Valašské Klobouky</option><option value='Vsetíně'>Vsetín</option>");
														}

					else if (val == "Specializovaný finančí úřad") {
							$("#pracoviste").html("<option value=''></option>");
					}

					else {
	            $("#pracoviste").html("<option value=''>Vyberte územní pracoviště...</option>");
	        }
	    });
	})
}

function searchForms() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("forms");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }
	}
  }

function searchDocuments() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("search2");
	filter = input.value.toUpperCase();
	table = document.getElementById("documents");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }
	}
  }

function show_srazkova_dan() {
	if($('#typUvazku1').val() === "Dohoda o provedení práce"){
		$("#SD").show()
	}
	else{
	 	$("#SD").hide()
	}
}

function show_srazkova_dan2() {
	if($('#typUvazku2').val() === "Dohoda o provedení práce"){
		$("#SD2").show()
	}
	else{
	 	$("#SD2").hide()
	}
}

function show_srazkova_dan3() {
	if($('#typUvazku3').val() === "Dohoda o provedení práce"){
		$("#SD3").show()
	}
	else{
	 	$("#SD3").hide()
	}
}

function show_srazkova_dan4() {
	if($('#typUvazku4').val() === "Dohoda o provedení práce"){
		$("#SD4").show()
	}
	else{
	 	$("#SD4").hide()
	}
}

function show_srazkova_dan5() {
	if($('#typUvazku5').val() === "Dohoda o provedení práce"){
		$("#SD5").show()
	}
	else{
	 	$("#SD5").hide()
	}
}

function show_KU() {
	if($('#zdrojPrijmu').val() === "B – prodej nemovitostí"){
		$("#KU").show()
	}
	else{
	 	$("#KU").hide()
	}
}

function show_KU2() {
	if($('#zdrojPrijmu2').val() === "B – prodej nemovitostí"){
		$("#KU2").show()
	}
	else{
	 	$("#KU2").hide()
	}
}

function show_KU3() {
	if($('#zdrojPrijmu3').val() === "B – prodej nemovitostí"){
		$("#KU3").show()
	}
	else{
	 	$("#KU3").hide()
	}
}

function show_KU4() {
	if($('#zdrojPrijmu4').val() === "B – prodej nemovitostí"){
		$("#KU4").show()
	}
	else{
	 	$("#KU4").hide()
	}
}

function show_KU4() {
	if($('#zdrojPrijmu4').val() === "B – prodej nemovitostí"){
		$("#KU4").show()
	}
	else{
	 	$("#KU4").hide()
	}
}

function pojisteni() {
	if($('#castkaZivotniPojisteni').val() > 24000){
		$("#castkaZivotniPojisteni").val(24000);
	}
}

function pojisteni2() {
	if($('#castkaPenzijniPojisteni').val() > 24000){
		$("#castkaPenzijniPojisteni").val(24000);
	}
}

function hypoteka() {

	if ($('#pocetMesicuHypotek').val() == "1") {
		if($('#castkaHypoteky').val() > 25000){
			$("#castkaHypoteky").val(25000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "2") {
		if($('#castkaHypoteky').val() > 50000){
			$("#castkaHypoteky").val(50000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "3") {
		if($('#castkaHypoteky').val() > 75000){
			$("#castkaHypoteky").val(75000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "4") {
		if($('#castkaHypoteky').val() > 100000){
			$("#castkaHypoteky").val(100000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "5") {
		if($('#castkaHypoteky').val() > 125000){
			$("#castkaHypoteky").val(125000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "6") {
		if($('#castkaHypoteky').val() > 150000){
			$("#castkaHypoteky").val(150000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "7") {
		if($('#castkaHypoteky').val() > 175000){
			$("#castkaHypoteky").val(175000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "8") {
		if($('#castkaHypoteky').val() > 200000){
			$("#castkaHypoteky").val(200000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "9") {
		if($('#castkaHypoteky').val() > 225000){
			$("#castkaHypoteky").val(225000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "10") {
		if($('#castkaHypoteky').val() > 250000){
			$("#castkaHypoteky").val(250000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "11") {
		if($('#castkaHypoteky').val() > 275000){
			$("#castkaHypoteky").val(275000);
		}
	}

	if ($('#pocetMesicuHypotek').val() == "12") {
		if($('#castkaHypoteky').val() > 300000){
			$("#castkaHypoteky").val(300000);
		}
	}

}

function vzdelani1() {
	if($('#vzdelaniBezOmezeni').val() > 10000){
		$("#vzdelaniBezOmezeni").val(10000);
	}
}

function vzdelani2() {
	if($('#vzdelaniSOmezenim').val() > 13000){
		$("#vzdelaniSOmezenim").val(13000);
	}
}

function vzdelani3() {
	if($('#vzdelanisTezsimOmezeni').val() > 15000){
		$("#vzdelanisTezsimOmezeni").val(15000);
	}
}

function prispevky() {
	if($('#castkaPrispevky').val() > 3000){
		$("#castkaPrispevky").val(3000);
	}
}

function prispevky2() {
	if($('#celkemPrijemZamestnani').val() <= 0){
		$("#castkaPrispevky").val(0);
	}
}

function darCheck() {
	if($('#dar').val() < 1000){
		$("#dar").val(1000);
	}
}

function check_skolka() {

	if ($('#pocetDetiSkolka').val() == "1") {
		if($('#vydajeZaSkolku').val() > 12200){
			$("#vydajeZaSkolku").val(12200);
		}
	}

	if ($('#pocetDetiSkolka').val() == "2") {
		if($('#vydajeZaSkolku').val() > 24400){
			$("#vydajeZaSkolku").val(24400);
		}
	}

	if ($('#pocetDetiSkolka').val() == "3") {
		if($('#vydajeZaSkolku').val() > 36600){
			$("#vydajeZaSkolku").val(36800);
		}
	}

	if ($('#pocetDetiSkolka').val() == "4") {
		if($('#vydajeZaSkolku').val() > 48800){
			$("#vydajeZaSkolku").val(48800);
		}
	}

	if ($('#pocetDetiSkolka').val() == "5") {
		if($('#vydajeZaSkolku').val() > 61000){
			$("#vydajeZaSkolku").val(61000);
		}
	}

	if ($('#pocetDetiSkolka').val() == "6") {
		if($('#vydajeZaSkolku').val() > 73200){
			$("#vydajeZaSkolku").val(73200);
		}
	}

	if ($('#pocetDetiSkolka').val() == "7") {
		if($('#vydajeZaSkolku').val() > 85400){
			$("#vydajeZaSkolku").val(85400);
		}
	}

	if ($('#pocetDetiSkolka').val() == "8") {
		if($('#vydajeZaSkolku').val() > 97600){
			$("#vydajeZaSkolku").val(97600);
		}
	}

}


function vzdelani() {
	if($('#zdravotniOmezeni').val() === "bez postižení"){
		$("#vzdelani1").show()
		$("#vzdelani2").hide()
		$("#vzdelani3").hide()
		$("#vzdelaniSOmezenim").val('0');
		$("#vzdelanisTezsimOmezeni").val('0');
	}
	else if($('#zdravotniOmezeni').val() === "se zdravotním postižením"){
		$("#vzdelani2").show()
		$("#vzdelani1").hide()
		$("#vzdelani3").hide()
		$("#vzdelaniBezOmezeni").val('0');
		$("#vzdelanisTezsimOmezeni").val('0');
	}

	else if($('#zdravotniOmezeni').val() === "s těžším zdravotním postižením"){
		$("#vzdelani3").show()
		$("#vzdelani1").hide()
		$("#vzdelani2").hide()
		$("#vzdelaniBezOmezeni").val('0');
		$("#vzdelaniSOmezenim").val('0');
	}

	else {
		$("#vzdelani1").hide()
		$("#vzdelani2").hide()
		$("#vzdelani3").hide()
	}
}

function procenta() {

	if($('#vysePodiluVOS').val() > 100){
			$("#vysePodiluVOS").val(100);
	}

	if($('#podilNaPrijmechSpolecnika1').val() > 100){
		$("#podilNaPrijmechSpolecnika1").val(100);
	}

	if($('#podilNaVydajichSpolecnika1').val() > 100){
		$("#podilNaVydajichSpolecnika1").val(100);
	}

	if($('#podilNaPrijmechSpolecnika2').val() > 100){
		$("#podilNaPrijmechSpolecnika2").val(100);
	}

	if($('#podilNaVydajichSpolecnika2').val() > 100){
		$("#podilNaVydajichSpolecnika2").val(100);
	}

	if($('#podilNaPrijmechSpolecnika3').val() > 100){
		$("#podilNaPrijmechSpolecnika3").val(100);
	}

	if($('#podilNaVydajichSpolecnika3').val() > 100){
		$("#podilNaVydajichSpolecnika3").val(100);
	}

}

function toggle(input) {
	var x = document.getElementById(input);
	$(x).slideToggle("slow");
}