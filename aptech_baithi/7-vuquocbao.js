function Products(){
    let res = document.getElementById("res1");
    res.innerHTML = "";

    let ten = document.getElementById("name");
    res.innerHTML += "Tên Sản Phẩm: " + ten.vlaue;

    let sl = document.getElementById("sl");
    res.innerHTML += "Số Lượng" + sl.vlaue;

    let gt = document.getElementById("gt");
    res.innerHTML += "Giá Thành" + gt.vlaue;

}

function cong() {
    let res = document.getElementById("res3");
    res.innerHTML = "";

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let cong = num1 + num2;
    res.innerHTML += "Phép cộng: " + num1 + "+" + num2 + "=" + cong;

}

function    theme(){
    let mau = document.getElementById("theme");
    let hehe = document.getElementById("mau");

    mau.style.backgroundColor= hehe.vlaue
        
    }
}