function showInfo() {
    let res = document.getElementById("res1"); // lấy thẻ theo id res1 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let ten = document.getElementById("name");
    res.innerHTML += "Họ tên: " + ten.value;

    let ngsinh = document.getElementById("bd");
    var d = new Date(ngsinh.value);
    res.innerHTML += "<br/>Tuổi: " + (2023 - d.getFullYear());

    let phone = document.getElementById("phone");
    res.innerHTML += "<br/>Số điện thoại: " + phone.value;

    let gt = document.getElementById("gt");
    res.innerHTML += "<br/>Giới tính: " + gt.value;

    let honNhan = document.querySelector('input[name="status"]:checked')?.value
    res.innerHTML += "<br/>Tình trạng hôn nhân: " + honNhan
}

function cong() {
    let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let cong = num1 + num2;
    res.innerHTML += "Phép cộng: " + num1 + "+" + num2 + "=" + cong;
}

function tru() {
    let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let tru = num1 - num2;
    res.innerHTML += "Phép trừ: " + num1 + "-" + num2 + "=" + tru;
}

function nhan() {
    let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let nhan = num1 * num2;
    res.innerHTML += "Phép nhân: " + num1 + "*" + num2 + "=" + nhan;
}

function chia() {
    let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let chia = num1 / num2;
    res.innerHTML += "Phép chia: " + num1 + "/" + num2 + "=" + chia;
}

function mu() {
    let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let mu = num1;
    for (let i = 1; i < num2; i++) {
        mu *= num1;
    }
    res.innerHTML += "Phép mũ: " + num1 + "^" + num2 + "=" + mu;
}

function sont() {
    let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let s = isPrime(num1)? " Là số nguyên tố. " : " Không là số nguyên tố. ";
    let s2 = isPrime(num2)? " Là số nguyên tố. " : " Không là số nguyên tố. ";
    
    res.innerHTML += num1 + s + num2 + s2;
}

function isPrime(n) {
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}

function changebackground() {
    let maunen = document.getElementById("color");
    document.body.style.backgroundColor = maunen.value
}
