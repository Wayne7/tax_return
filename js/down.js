$('#download2').click(function() {
data = [["id","value"]];

    var e = d3.selectAll("#csvForm > input")[0];
    e.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var f = d3.selectAll("#csvForm > select")[0];
    f.forEach(function(d,i){
        data.push([d.id, d.value]);
    });
    var g = d3.selectAll(".form-group > select")[0];
    g.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var h = d3.selectAll(".none > select")[0];
    h.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var j = d3.selectAll(".tab > select")[0];
    j.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var k = d3.selectAll(".form-group > input")[0];
    k.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var l = d3.selectAll(".none > input")[0];
    l.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var m = d3.selectAll(".tab > input")[0];
    m.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var n = d3.selectAll(".table > input")[0];
    n.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var o = d3.selectAll("tbody > input")[0];
    o.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var p = d3.selectAll("tr > input")[0];
    p.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var q = d3.selectAll("td > input")[0];
    q.forEach(function(d,i){
        data.push([d.id, d.value]);
    });

    var r = d3.selectAll("div > input")[0];
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
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "priznani.csv");
    link.setAttribute("download2", "priznani.csv");
    link.click();
});