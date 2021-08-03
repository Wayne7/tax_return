function vydaje_procenta1() {
	$(document).ready(function(){
			var sel=$('select[name=sazba]');
	    var qty=$("#prijmySazba");

	    $('select[name=sazba]').change(function(){

					var total=isNaN(parseInt(qty.val() /100 * sel.val())) ? 0 :(qty.val() /100 * sel.val());
					var trunc = Math.round(total);

					if($('#sazba').val() == 30) {

							if (trunc > 300000) {
								trunc = 300000;
								$("#vydajeSazba").val(trunc);
							}

							else if (trunc <= 300000) {
								$("#vydajeSazba").val(trunc);
							}
					}

					if($('#sazba').val() == 40) {

							if (trunc > 400000) {
								trunc = 400000;
								$("#vydajeSazba").val(trunc);
							}

							else if (trunc <= 400000) {
								$("#vydajeSazba").val(trunc);
							}
					}

					if($('#sazba').val() == 60) {

							if (trunc > 600000) {
								trunc = 600000;
								$("#vydajeSazba").val(trunc);
							}

							else if (trunc <= 600000) {
								$("#vydajeSazba").val(trunc);
							}
					}

					if($('#sazba').val() == 80) {

							if (trunc > 800000) {
								trunc = 800000;
								$("#vydajeSazba").val(trunc);
							}

							else if (trunc <= 800000) {
								$("#vydajeSazba").val(trunc);
							}
					}
			});
	});
}

function vydaje_procenta2() {
	$(document).ready(function(){
			var sel=$('select[name=sazba]');
	    var qty=$("#prijmySazba");

	    $("#prijmySazba").keyup(function(){

					var total = isNaN(parseInt(qty.val() /100 * sel.val())) ? 0 :(qty.val() /100 * sel.val());
					var trunc = Math.round(total);

					if($('#sazba').val() == 30) {

							if (trunc > 300000) {
								trunc = 300000;
								$("#vydajeSazba").val(trunc);
							}

							else if (trunc <= 300000) {
								$("#vydajeSazba").val(trunc);
							}
					}

					if($('#sazba').val() == 40) {

							if (trunc > 400000) {
								trunc = 400000;
								$("#vydajeSazba").val(trunc);
							}

							else if (trunc <= 400000) {
								$("#vydajeSazba").val(trunc);
							}
					}

					if($('#sazba').val() == 60) {

							if (trunc > 600000) {
								trunc = 600000;
								$("#vydajeSazba").val(trunc);
							}

							else if (trunc <= 600000) {
								$("#vydajeSazba").val(trunc);
							}
					}

					if($('#sazba').val() == 80) {

							if (trunc > 800000) {
								trunc = 800000;
								$("#vydajeSazba").val(trunc);
							}

							else if (trunc <= 800000) {
								$("#vydajeSazba").val(trunc);
							}
					}
			});
	});
}

function vydaje_procenta1_2() {
	$(document).ready(function(){
			var sel=$('select[name=sazba2]');
	  	var qty=$("#prijmySazba2");

	    $('select[name=sazba2]').change(function(){

				var total=isNaN(parseInt(qty.val() /100 * sel.val())) ? 0 :(qty.val() /100 * sel.val());
				var trunc = Math.round(total);

				if($('#sazba2').val() == 30) {

						if (trunc > 300000) {
							trunc = 300000;
							$("#vydajeSazba2").val(trunc);
						}

						else if (trunc <= 300000) {
							$("#vydajeSazba2").val(trunc);
						}
				}

				if($('#sazba2').val() == 40) {

						if (trunc > 400000) {
							trunc = 400000;
							$("#vydajeSazba2").val(trunc);
						}

						else if (trunc <= 400000) {
							$("#vydajeSazba2").val(trunc);
						}
				}

				if($('#sazba2').val() == 60) {

						if (trunc > 600000) {
							trunc = 600000;
							$("#vydajeSazba2").val(trunc);
						}

						else if (trunc <= 600000) {
							$("#vydajeSazba2").val(trunc);
						}
				}

				if($('#sazba2').val() == 80) {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeSazba2").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeSazba2").val(trunc);
						}
				}

			});
	});
}

function vydaje_procenta2_2() {
	$(document).ready(function(){
			var sel=$('select[name=sazba2]');
	    var qty=$("#prijmySazba2");

	    $("#prijmySazba2").keyup(function(){

				var total = isNaN(parseInt(qty.val() /100 * sel.val())) ? 0 :(qty.val() /100 * sel.val());
				var trunc = Math.round(total);

				if($('#sazba2').val() == 30) {

						if (trunc > 300000) {
							trunc = 300000;
							$("#vydajeSazba2").val(trunc);
						}

						else if (trunc <= 300000) {
							$("#vydajeSazba2").val(trunc);
						}
				}

				if($('#sazba2').val() == 40) {

						if (trunc > 400000) {
							trunc = 400000;
							$("#vydajeSazba2").val(trunc);
						}

						else if (trunc <= 400000) {
							$("#vydajeSazba2").val(trunc);
						}
				}

				if($('#sazba2').val() == 60) {

						if (trunc > 600000) {
							trunc = 600000;
							$("#vydajeSazba2").val(trunc);
						}

						else if (trunc <= 600000) {
							$("#vydajeSazba2").val(trunc);
						}
				}

				if($('#sazba2').val() == 80) {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeSazba2").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeSazba2").val(trunc);
						}
				}

			});
	});
}

function vydaje_procenta1_3() {
	$(document).ready(function(){
			var sel=$('select[name=sazba3]');
	  	var qty=$("#prijmySazba3");

	    $('select[name=sazba3]').change(function(){

				var total=isNaN(parseInt(qty.val() /100 * sel.val())) ? 0 :(qty.val() /100 * sel.val());
				var trunc = Math.round(total);

				if($('#sazba3').val() == 30) {

						if (trunc > 300000) {
							trunc = 300000;
							$("#vydajeSazba3").val(trunc);
						}

						else if (trunc <= 300000) {
							$("#vydajeSazba3").val(trunc);
						}
				}

				if($('#sazba3').val() == 40) {

						if (trunc > 400000) {
							trunc = 400000;
							$("#vydajeSazba3").val(trunc);
						}

						else if (trunc <= 400000) {
							$("#vydajeSazba3").val(trunc);
						}
				}

				if($('#sazba3').val() == 60) {

						if (trunc > 600000) {
							trunc = 600000;
							$("#vydajeSazba3").val(trunc);
						}

						else if (trunc <= 600000) {
							$("#vydajeSazba3").val(trunc);
						}
				}

				if($('#sazba3').val() == 80) {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeSazba3").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeSazba3").val(trunc);
						}
				}

			});
	});
}

function vydaje_procenta2_3() {
	$(document).ready(function(){
			var sel=$('select[name=sazba3]');
	    var qty=$("#prijmySazba3");

	    $("#prijmySazba3").keyup(function(){

				var total = isNaN(parseInt(qty.val() /100 * sel.val())) ? 0 :(qty.val() /100 * sel.val());
				var trunc = Math.round(total);

				if($('#sazba3').val() == 30) {

						if (trunc > 300000) {
							trunc = 300000;
							$("#vydajeSazba3").val(trunc);
						}

						else if (trunc <= 300000) {
							$("#vydajeSazba3").val(trunc);
						}
				}

				if($('#sazba3').val() == 40) {

						if (trunc > 400000) {
							trunc = 400000;
							$("#vydajeSazba3").val(trunc);
						}

						else if (trunc <= 400000) {
							$("#vydajeSazba3").val(trunc);
						}
				}

				if($('#sazba3').val() == 60) {

						if (trunc > 600000) {
							trunc = 600000;
							$("#vydajeSazba3").val(trunc);
						}

						else if (trunc <= 600000) {
							$("#vydajeSazba3").val(trunc);
						}
				}

				if($('#sazba3').val() == 80) {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeSazba3").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeSazba3").val(trunc);
						}
				}

			});
	});
}


function vydaje_procenta1_4() {
	$(document).ready(function(){
			var sel=$('select[name=sazba4]');
	  	var qty=$("#prijmySazba4");

	    $('select[name=sazba4]').change(function(){

				var total=isNaN(parseInt(qty.val() /100 * sel.val())) ? 0 :(qty.val() /100 * sel.val());
				var trunc = Math.round(total);

				if($('#sazba4').val() == 30) {

						if (trunc > 300000) {
							trunc = 300000;
							$("#vydajeSazba4").val(trunc);
						}

						else if (trunc <= 300000) {
							$("#vydajeSazba4").val(trunc);
						}
				}

				if($('#sazba4').val() == 40) {

						if (trunc > 400000) {
							trunc = 400000;
							$("#vydajeSazba4").val(trunc);
						}

						else if (trunc <= 400000) {
							$("#vydajeSazba4").val(trunc);
						}
				}

				if($('#sazba4').val() == 60) {

						if (trunc > 600000) {
							trunc = 600000;
							$("#vydajeSazba4").val(trunc);
						}

						else if (trunc <= 600000) {
							$("#vydajeSazba4").val(trunc);
						}
				}

				if($('#sazba4').val() == 80) {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeSazba4").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeSazba4").val(trunc);
						}
				}

			});
	});
}

function vydaje_procenta2_4() {
	$(document).ready(function(){
			var sel=$('select[name=sazba4]');
	    var qty=$("#prijmySazba4");

	    $("#prijmySazba4").keyup(function(){

				var total = isNaN(parseInt(qty.val() /100 * sel.val())) ? 0 :(qty.val() /100 * sel.val());
				var trunc = Math.round(total);

				if($('#sazba4').val() == 30) {

						if (trunc > 300000) {
							trunc = 300000;
							$("#vydajeSazba4").val(trunc);
						}

						else if (trunc <= 300000) {
							$("#vydajeSazba4").val(trunc);
						}
				}

				if($('#sazba4').val() == 40) {

						if (trunc > 400000) {
							trunc = 400000;
							$("#vydajeSazba4").val(trunc);
						}

						else if (trunc <= 400000) {
							$("#vydajeSazba4").val(trunc);
						}
				}

				if($('#sazba4').val() == 60) {

						if (trunc > 600000) {
							trunc = 600000;
							$("#vydajeSazba4").val(trunc);
						}

						else if (trunc <= 600000) {
							$("#vydajeSazba4").val(trunc);
						}
				}

				if($('#sazba4').val() == 80) {

						if (trunc > 800000) {
							trunc = 800000;
							$("#vydajeSazba4").val(trunc);
						}

						else if (trunc <= 800000) {
							$("#vydajeSazba4").val(trunc);
						}
				}

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
