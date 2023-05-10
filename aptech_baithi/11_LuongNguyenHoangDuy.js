function showInfo() {
    let res = document.getElementById("res1");
    res.innerHTML = "";

    let ten= document.getElementById("name");
    res.innerHTML += "Tên sản phẩm : " + ten.value;

    let soluong = document.getElementById("input-number-of-product");
    res.innerHTML += "<br/>Số lượng : " + soluong.value ;

    let giathanh = document.getElementById("input-price");
    res.innerHTML += "<br/>Giá : " + giathanh.value;

    let km = document.getElementById("km");
    res.innerHTML += "<br/>Khuyến mãi :" + km.value;

}

function cong() {
    let res = document.getElementById("res2"); 
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let cong = num1 + num2;
    res.innerHTML += "Phép cộng: " + num1 + "+" + num2 + "=" + cong;
}

function tru (){
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

function luythua() {
    let res = document.getElementById("res2"); 
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let luythua= num1 ** num2;
    res.innerHTML += "Lũy thừa : " + num1 + "^" + num2 + "=" + luythua;
}

function boiso() {
    
}

    
