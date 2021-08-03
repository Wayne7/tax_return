function ostatni_procenta1() {

				var qty=$("#prijmyOstatni");
					var total = isNaN(parseInt(qty.val() /100 * 80)) ? 0 :(qty.val() /100 * 80);
					var trunc = Math.round(total);

					if($('#kodOstatni').val() === "p") {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeOstatni").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeOstatni").val(trunc);
						}
					}
}

function ostatni_procenta2() {

				var qty=$("#prijmyOstatni2");
					var total = isNaN(parseInt(qty.val() /100 * 80)) ? 0 :(qty.val() /100 * 80);
					var trunc = Math.round(total);

					if($('#kodOstatni2').val() === "p") {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeOstatni2").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeOstatni2").val(trunc);
						}
					}
}

function ostatni_procenta3() {

				var qty=$("#prijmyOstatni3");
					var total = isNaN(parseInt(qty.val() /100 * 80)) ? 0 :(qty.val() /100 * 80);
					var trunc = Math.round(total);

					if($('#kodOstatni3').val() === "p") {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeOstatni3").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeOstatni3").val(trunc);
						}
					}
}

function ostatni_procenta4() {

	var qty=$("#prijmyOstatni4");
	var total = isNaN(parseInt(qty.val() /100 * 80)) ? 0 :(qty.val() /100 * 80);
	var trunc = Math.round(total);

	if($('#kodOstatni4').val() === "p") {

		if (trunc > 800000) {
			trunc = 800000;
			$("#vydajeOstatni4").val(trunc);
		}

		else if (trunc <= 800000) {
			$("#vydajeOstatni4").val(trunc);
		}
	}
}
