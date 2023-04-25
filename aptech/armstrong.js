function checkArmstrong() {
    var num = parseInt($("#numInput").val());
    var temp = num;
    var sum = 0;

    while (num > 0) { // 153
        var sd = num % 10;
        sum += (sd * sd * sd);
        num = parseInt(num / 10); // => 15 / 15.3

        console.log("num", num, "sum: ", sum);
    }

    if (sum == temp) {
        $("#res").html("This is an Armstrong number");
    } else {
        $("#res").html("This is NOT an Armstrong number");
    }
}


function sortAndShow() {
    document.getElementById("resB2").innerHTML = "";

    var stdArray = document.getElementsByClassName("stds");

    var vlArray = [];
    for (let i = 0; i < stdArray.length; i++) {
        vlArray[i] = stdArray[i].value;
    }

    vlArray.sort();
    for (let i = 0; i < vlArray.length; i++) {
        document.getElementById("resB2").innerHTML += vlArray[i] + " - ";
    }
}

function submit() {
    document.getElementById("resBT").innerHTML = "";
    
    var slch = document.getElementsByClassName("questions").length;
    // var arrRes = [];
    for (var i = 1; i <= slch; i++) {
        var vl = document.querySelector('input[name="cau' + i + '"]:checked').value;
        document.getElementById("resBT").innerHTML += "Câu hỏi " + i + " - trả lời: " + vl + "<br>";
    }

    // for (var i = 1; i <= slch; i++) {
        // document.getElementById("resBT").innerHTML += "Câu hỏi " + i + " - trả lời: " + arrRes[i] + "<br>";
    // }
}