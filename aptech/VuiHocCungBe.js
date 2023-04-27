function showInfo() {
    let res = document.getElementById("res1"); // lấy thẻ theo id res1 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let ten = document.getElementById("name");
    res.innerHTML += "Họ tên: " + ten.value;

    let ngsinh = document.getElementById("bd");
    res.innerHTML += "<br/>Ngày sinh: " + ngsinh.value;

    let phone = document.getElementById("phone");
    res.innerHTML += "<br/>Số điện thoại: " + phone.value;

    let gt = document.getElementById("gt");
    res.innerHTML += "<br/>Giới tính: " + gt.value;

    let sothich = document.getElementsByClassName("sothich"); // lấy toàn bộ check box với class sothic
    res.innerHTML += "<br/>Sở thích: "
    for (let i = 0; i < sothich.length; i++) {
        if (sothich[i].checked === true) { // kiểm tra xem thằng nào dc check thì sẽ hiện ra thẻ res1
            res.innerHTML += sothich[i].value + "  ";
        }
    }

    let maunen = document.getElementById("mau");
    res.innerHTML += "<br/>Màu nền: " + maunen.value;

    // document.body.style.backgroundColor = maunen.value; //đổi màu nền cho toàn trang
    res.style.backgroundColor = maunen.value;   //đổi màu nền cho khung result
}

function calculate() {
    let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
    res.innerHTML = "";

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let cong = num1 + num2;
    res.innerHTML += "Phép cộng: " + num1 + "+" + num2 + "=" + cong;

    let tru = num1 + num2;
    res.innerHTML += "<br/> Phép trừ: " + num1 + "-" + num2 + "=" + tru;

    let nhan = num1 + num2;
    res.innerHTML += "<br/> Phép nhân: " + num1 + "*" + num2 + "=" + nhan;

    let chia = num1 + num2;
    res.innerHTML += "<br/> Phép chia: " + num1 + "/" + num2 + "=" + chia;

    let mu = num1;
    for (let i = 1; i < num2; i++) {
        mu *= num1;
    }
    res.innerHTML += "<br/> Phép mũ: " + num1 + "^" + num2 + "=" + mu;

}

function answerQuestion() {
    let res = document.getElementById("res3");
    res.innerHTML = "";

    let totalQuestions = document.getElementsByClassName("questions").length;
    for (let i = 1; i <= totalQuestions; i++) {
        let value = document.querySelector('input[name="cau' + i + '"]:checked')?.value;
        res.innerHTML += "Câu hỏi " + i + " - trả lời: " + value + "<br>";
    }
}
