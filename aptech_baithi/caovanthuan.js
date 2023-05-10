function showInfo() {
    let res = document.getElementById("res1"); 
    res.innerHTML = "";

    let ten = document.getElementById("sp");
    res.innerHTML += "Tên Sản Phẩm: " + ten.value;

    let soluong = document.getElementById("sl");
    res.innerHTML += "<br/>Số Lượng: " + soluong.value;
   
    let giatien = document.getElementById("gt");
    res.innerHTML += "<br/>Giá tiền: " + giatien.value;

    let khuyenmai = document.getElementById("km");
    res.innerHTML += "<br/>Khuyến mãi: " + khuyenmai.value;

    }

function cong() {
    let res = document.getElementById("res2"); 
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let cong = num1 + num2;
    res.innerHTML += "Phép cộng: " + num1 + "+" + num2 + "=" + cong;
}

function tru() {
    let res = document.getElementById("res2"); 
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let tru = num1 - num2;
    res.innerHTML += "Phép trừ: " + num1 + "-" + num2 + "=" + tru;
}

function nhan() {
    let res = document.getElementById("res2"); 
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let nhan = num1 * num2;
    res.innerHTML += "Phép nhân: " + num1 + "*" + num2 + "=" + nhan;
}

function chia() {
    let res = document.getElementById("res2"); 
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let chia = num1 / num2;
    res.innerHTML += "Phép chia: " + num1 + "/" + num2 + "=" + chia;
}

function mu() {
    let res = document.getElementById("res2"); 
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let mu = num1;
    for (let i = 1; i < num2; i++) {
        mu *= num1;
    }
    res.innerHTML += "Phép mũ: " + num1 + "^" + num2 + "=" + mu;
}

function bs() {
    let res = document.getElementById("res2"); 
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

     let chia = num1 % num2;

    
}



function changebackground() {
    let maunen = document.getElementById("color");
    document.body.style.backgroundColor = maunen.value
}