var totalPrijmyOstatni;
var totalVydajeOstatni;

function najem_procenta() {
	$(document).ready(function(){
	    var prijmyZnajmu =$("#prijmyZnajmu1");

	    $("#prijmyZnajmu1").keyup(function(){

					var total = isNaN(parseInt(prijmyZnajmu.val() /100 * 30)) ? 0 : (prijmyZnajmu.val() /100 * 30);
					var trunc = Math.round(total);
					$("#vydajeNaNajem1").val(trunc);
			});
	});
}


function celkem_vydaje_ostatni() {

	$(document).ready(function(){
		var vydaj1=$("#vydajeOstatni");
		var vydaj2=$("#vydajeOstatni2");
		var vydaj3=$("#vydajeOstatni3");
		var vydaj4=$("#vydajeOstatni4");

		$(".vypocet").mouseover(function(){

			if ($("#vydajeOstatni").val() !="") {
				totalVydajeOstatni = parseInt(vydaj1.val());
				$("#celkemVydajeOstatni").val(totalVydajeOstatni);
				}

			if ($("#vydajeOstatni2").val() !="") {
				totalVydajeOstatni = parseInt(vydaj1.val()) + parseInt(vydaj2.val());
				$("#celkemVydajeOstatni").val(totalVydajeOstatni);
				}

			if ($("#vydajeOstatni3").val() !="") {
				totalVydajeOstatni = parseInt(vydaj1.val()) + parseInt(vydaj2.val())  + parseInt(vydaj3.val());
				$("#celkemVydajeOstatni").val(totalVydajeOstatni);
					}

			if ($("#vydajeOstatni4").val() !="") {
				totalVydajeOstatni = parseInt(vydaj1.val()) + parseInt(vydaj2.val())  + parseInt(vydaj3.val()) + parseInt(vydaj4.val());
				$("#celkemVydajeOstatni").val(totalVydajeOstatni);
					}

				return totalVydajeOstatni;
		});
	});

}


function celkem_prijmy_ostatni() {
	$(document).ready(function(){
		var prijem1=$("#prijmyOstatni");
		var prijem2=$("#prijmyOstatni2");
		var prijem3=$("#prijmyOstatni3");
		var prijem4=$("#prijmyOstatni4");

	  $(".vypocet").mouseover(function(){

			if ($("#prijmyOstatni").val() !="") {
				totalPrijmyOstatni = parseInt(prijem1.val());
				$("#celkemPrijemOstatni").val(totalPrijmyOstatni);
				}

			if ($("#prijmyOstatni2").val() !="") {
				totalPrijmyOstatni = parseInt(prijem1.val()) + parseInt(prijem2.val());
				$("#celkemPrijemOstatni").val(totalPrijmyOstatni);
				}

			if ($("#prijmyOstatni3").val() !="") {
				totalPrijmyOstatni = parseInt(prijem1.val()) + parseInt(prijem2.val())  + parseInt(prijem3.val());
				$("#celkemPrijemOstatni").val(totalPrijmyOstatni);
					}

			if ($("#prijmyOstatni4").val() !="") {
				totalPrijmyOstatni = parseInt(prijem1.val()) + parseInt(prijem2.val())  + parseInt(prijem3.val()) + parseInt(prijem4.val());
				$("#celkemPrijemOstatni").val(totalPrijmyOstatni);
					}

			return totalPrijmyOstatni;
	  });
	});
}


function rozdil_prijmy_vydaje_ostatni() {
	$(document).ready(function(){

	  $(".vypocet").mouseover(function(){

			var totalRozdilOstatni = totalPrijmyOstatni - totalVydajeOstatni;
			$("#rozdilPrijemVydajeOstatni").val(totalRozdilOstatni);
	  });
	});
}
