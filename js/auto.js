function autocomplete(input, array) {

  var curr;
  input.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      curr = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);

      for (i = 0; i < array.length; i++) {
        if (array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + array[i].substr(0, val.length) + "</strong>";
          b.innerHTML += array[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + array[i] + "'>";

            b.addEventListener("click", function(e) {
              input.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
            });

          a.appendChild(b);
        }
      }
  });

  input.addEventListener("keydown", function(e) {
      var act = document.getElementById(this.id + "autocomplete-list");
      if (act) act = act.getElementsByTagName("div");
      if (e.keyCode == 40) {
        curr++;
        add(act);
      }

      else if (e.keyCode == 38) {
        curr--;
        add(act);
      }

      else if (e.keyCode == 13) {
        e.preventDefault();
        if (curr > -1) {
          if (act) act[curr].click();
        }
      }
  });

  function add(act) {
    if (!act) return false;
    removeActive(act);
    if (curr >= act.length) curr = 0;
    if (curr < 0) curr = (act.length - 1);
    act[curr].classList.add("autocomplete-active");
  }

  function removeActive(act) {
    for (var i = 0; i < act.length; i++) {
      act[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var act = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < act.length; i++) {
      if (elmnt != act[i] && elmnt != input) {
        act[i].parentNode.removeChild(act[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
