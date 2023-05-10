function showinfo() {
    let res = document.getElementById("ketqua1");
    res.innerHTML="";

    let sanpham = document.getElementById("Ten");
    res.innerHTML += "Tên sản phẩm: " + sanpham.value + "<br>";

    let soluong = document.getElementById("Sl");
    res.innerHTML += "Số lượng: " + soluong.value + "<br>";

    let giathanh = document.getElementById("Gia");
    res.innerHTML += "Giá thành: " + giathanh.value + "<br>";

    let khuyenmai = document.getElementById("Km");
    res.innerHTML += "Áp dụng khuyến mãi: " + khuyenmai.value + "<br>";

    let thanhtien = soluong.value * giathanh.value * khuyenmai.value;
    res.innerHTML += "Tổng thành tiền là:" + thanhtien.value;
}

function cong() {
    let res = document.getElementById("ketqua2");
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    let cong = num1 + num2;
    res.innerHTML += "Kết quả toán cộng:" + num1 + "+" + num2 + "=" + cong;
}

function tru() {
    let res = document.getElementById("ketqua2");
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    let tru = num1 - num2;
    res.innerHTML += "Kết quả toán trừ:" + num1 + "-" + num2 + "=" + tru;
}

function nhan() {
    let res = document.getElementById("ketqua2");
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    let nhan = num1 * num2;
    res.innerHTML += "Kết quả toán nhân:" + num1 + "*" + num2 + "=" + nhan;
}

function chia() {
    let res = document.getElementById("ketqua2");
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    let chia = num1 / num2;
    res.innerHTML += "Kết quả toán chia:" + num1 + "/" + num2 + "=" + chia;
}

function mu() {
    let res = document.getElementById("ketqua2");
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    let mu = num1;
    for (i=1; i<num2;i++){
    mu = mu*num1;
    }

    res.innerHTML += "Kết quả toán mũ:" + num1 + "^" + num2 + "=" + mu;
}

function doimaunen() {
    let maunen = document.getElementById("color");
    document.theme.style.backgroudndColor = maunen.value
}