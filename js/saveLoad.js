document.getElementById("upload").addEventListener('change', upload, false);
document.getElementById("download").addEventListener('click', download, false);
document.getElementById("download2").addEventListener('click', download, false);

function upload(e) {
    var data = null;
    var file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        var csvData = event.target.result;

        var parsedCSV = d3.csv.parseRows(csvData);

        parsedCSV.forEach(function (d, i) {
            if (i == 0) return true;
            document.getElementById(d[0]).value = d[1];
        });
    }
}

function download(e) {
    data = [["id","value"]];

    var e = document.querySelectorAll("#csvForm > input");
    e.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var f = document.querySelectorAll("#csvForm > select");
    f.forEach(function(d,i){
        data.push([d.id, d.value]);
    });
    var g = document.querySelectorAll(".form-group > select");
    g.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var h = document.querySelectorAll(".none > select");
    h.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var j = document.querySelectorAll(".tab > select");
    j.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var k = document.querySelectorAll(".form-group > input");
    k.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var l = document.querySelectorAll(".none > input");
    l.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var m = document.querySelectorAll(".tab > input");
    m.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var n = document.querySelectorAll(".table > input");
    n.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var o = document.querySelectorAll("tbody > input");
    o.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var p = document.querySelectorAll("tr > input");
    p.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var q = document.querySelectorAll("td > input");
    q.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var r = document.querySelectorAll("div > input");
    r.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function (d, i) {
        dataString = d.join(",");
        csvContent += i < data.length ? dataString + "\n" : dataString;
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("type", "hidden"); // make it hidden if needed
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "priznani.csv");
    link.setAttribute("download2", "priznani.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
}
