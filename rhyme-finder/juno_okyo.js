jQuery(document).ready(function (b) {
    var g = "B C Ch D \u0110 G Gh Gi H K Kh L M N Ng Nh Ngh P Ph Qu R S T Th Tr V X".split(" "),
        d = !1;
    b("#form").submit(function (h) {
        var e = b("#input").val(),
            f = b("#output").find("tbody");
        if (/(.+)?\[(.)\](.+)?/.test(e)) {
            f.html("");
            var a = "";
            b.each(g, function (b, d) {
                var c = d + e;
                a += "<tr>";
                a += "<td>" + c.replace("[", "").replace("]", "") + "</td>";
                a += "<td>" + c.replace(/\[a\]/i, "\u00e1").replace(/\[\u00e2\]/i, "\u1ea5").replace(/\[\u0103\]/i, "\u1eaf").replace(/\[e\]/i, "\u00e9").replace(/\[\u00ea\]/i,
                    "\u1ebf").replace(/\[y\]/i, "\u00fd").replace(/\[u\]/i, "\u00fa").replace(/\[\u01b0\]/i, "\u1ee9").replace(/\[i\]/i, "\u00ed").replace(/\[o\]/i, "\u00f3").replace(/\[\u00f4\]/i, "\u1ed1").replace(/\[\u01a1\]/i, "\u1edb") + "</td>";
                a += "<td>" + c.replace(/\[a\]/i, "\u00e0").replace(/\[\u00e2\]/i, "\u1ea7").replace(/\[\u0103\]/i, "\u1eb1").replace(/\[e\]/i, "\u00e8").replace(/\[\u00ea\]/i, "\u1ec1").replace(/\[y\]/i, "\u1ef3").replace(/\[u\]/i, "\u00f9").replace(/\[\u01b0\]/i, "\u1eeb").replace(/\[i\]/i, "\u00ec").replace(/\[o\]/i,
                    "\u00f2").replace(/\[\u00f4\]/i, "\u1ed3").replace(/\[\u01a1\]/i, "\u1edd") + "</td>";
                a += "<td>" + c.replace(/\[a\]/i, "\u1ea3").replace(/\[\u00e2\]/i, "\u1ea9").replace(/\[\u0103\]/i, "\u1eb3").replace(/\[e\]/i, "\u1ebb").replace(/\[\u00ea\]/i, "\u1ec3").replace(/\[y\]/i, "\u1ef7").replace(/\[u\]/i, "\u1ee7").replace(/\[\u01b0\]/i, "\u1eed").replace(/\[i\]/i, "\u1ec9").replace(/\[o\]/i, "\u1ecf").replace(/\[\u00f4\]/i, "\u1ed5").replace(/\[\u01a1\]/i, "\u1edf") + "</td>";
                a += "<td>" + c.replace(/\[a\]/i, "\u00e3").replace(/\[\u00e2\]/i,
                    "\u1eab").replace(/\[\u0103\]/i, "\u1eb5").replace(/\[e\]/i, "\u1ebd").replace(/\[\u00ea\]/i, "\u1ec5").replace(/\[y\]/i, "\u1ef9").replace(/\[u\]/i, "\u0169").replace(/\[\u01b0\]/i, "\u1eef").replace(/\[i\]/i, "\u0129").replace(/\[o\]/i, "\u00f5").replace(/\[\u00f4\]/i, "\u1ed7").replace(/\[\u01a1\]/i, "\u1ee1") + "</td>";
                a += "<td>" + c.replace(/\[a\]/i, "\u1ea1").replace(/\[\u00e2\]/i, "\u1ead").replace(/\[\u0103\]/i, "\u1eb7").replace(/\[e\]/i, "\u1eb9").replace(/\[\u00ea\]/i, "\u1ec7").replace(/\[y\]/i, "\u1ef5").replace(/\[u\]/i,
                    "\u1ee5").replace(/\[\u01b0\]/i, "\u1ef1").replace(/\[i\]/i, "\u1ecb").replace(/\[o\]/i, "\u1ecd").replace(/\[\u00f4\]/i, "\u1ed9").replace(/\[\u01a1\]/i, "\u1ee3") + "</td>";
                a += "</tr>"
            });
            f.html(a);
            a = null;
            d || (d = !0, b("#output").fadeIn("fast"))
        }
        h.preventDefault()
    })
});